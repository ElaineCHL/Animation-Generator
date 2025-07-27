import { AbstractDSLVisitor } from "./AbstractDSLVisitor";
import {
  Animation_stmtContext,
  Block_stmtContext,
  Group_stmtContext,
  PositionContext,
  ScriptContext,
  Shape_stmtContext,
  Sleep_stmtContext,
  StatementContext,
} from "./generated/DSLParser";

export class DSLToTSVisitor extends AbstractDSLVisitor<string> {
  idMap: Map<string, string> = new Map();
  counter = 1;
  output: string[] = [];
  groupIds: Set<string> = new Set();

  override visitScript(ctx: ScriptContext): string {
    ctx.statement().forEach((stmt) => {
      this.visit(stmt);
    });
    return this.output.join("\n");
  }

  override visitShape_stmt(ctx: Shape_stmtContext): string {
    let shapeType = ctx.getChild(2).text;
    const { x, y } = this.getPosition(ctx.position(0));
    const id = ctx.ID().text;
    this.idMap.set(id, id);
    const text = ctx.STRING()?.text ? `${ctx.STRING()?.text}` : "";
    const size = ctx.size()?.number().text
      ? `${ctx.size()!.number().text}`
      : "2";
    const color = ctx.color()?.COLOR().text
      ? `"${ctx.color()?.COLOR().text}"`
      : `"black"`;

    let code = `const ${id} = new `;

    switch (shapeType) {
      case "circle":
        code += `Circle({
  centerX: ${x},
  centerY: ${y},
  radius: ${ctx.number(0).text},
  color: ${color}
});`;
        break;
      case "rectangle":
        code += `Rectangle({ 
  centerX: ${x},
  centerY: ${y},
  width: ${ctx.number(0).text},
  height: ${ctx.number(1).text},
  color: ${color} 
});`;
        break;
      case "square":
        code += `Square({ 
  centerX: ${x},
  centerY: ${y},
  size: ${ctx.number(0).text},
  color: ${color} 
});`;
        break;
      case "triangle":
        code += `Triangle({ 
  centerX: ${x}, 
  centerY: ${y}, 
  radius: ${ctx.number(0).text}, 
  color: ${color} 
});`;
        break;
      case "dot":
        code += `Dot({ 
  centerX: ${x},
  centerY: ${y},
  color: ${color}
});`;
        break;
      case "line":
        const start = this.getPosition(ctx.position(0)!);
        const end = this.getPosition(ctx.position(1)!);

        code += `Line({ 
  startX: ${start.x},
  startY: ${start.y},
  endX: ${end.x},
  endY: ${end.y},
  color: ${color}
});`;
        break;
      case "text":
        code += `Text({
  centerX: ${x},
  centerY: ${y},
  text: ${text},
  size: ${size},
  color: ${color}
});`;
        break;
    }

    this.output.push(code);
    this.output.push(`toDraw.push(${id});\n`);
    return code;
  }

  override visitAnimation_stmt(ctx: Animation_stmtContext): string {
    const id = ctx.ID().text;
    let seconds = ctx.duration()?.number().text ?? "1";
    let milliseconds = Math.round(parseFloat(seconds) * 1000);
    const command = ctx.start.text;
    let code = "";

    switch (command) {
      case "move":
        let pos = "";
        if (ctx.position()) {
          const { x, y } = this.getPosition(ctx.position()!);
          pos = `${x}, ${y}`;
        }
        code = `await ${id}.move(${pos}, ${milliseconds})`;
        break;
      case "fadeIn":
        code = `await ${id}.fadeIn(${milliseconds})`;
        break;
      case "fadeOut":
        code = `await ${id}.fadeOut(${milliseconds})`;
        break;
      case "scale":
        const scale = ctx.number()?.text ?? "1";
        code = `await ${id}.scale(${scale}, ${milliseconds})`;
        break;
      case "rotate":
        const degree = ctx.number()?.text ?? "0";
        let center = "";
        if (ctx.position()) {
          const { x, y } = this.getPosition(ctx.position()!);
          center = `, { x: ${x}, y: ${y} }`;
        }
        code = `await ${id}.rotate(${degree}, ${milliseconds}${center})`;
        break;
    }

    // Only add semicolon here if not inside a block
    this.output.push(`${code};`);
    return code;
  }

  private getPosition(ctx: PositionContext): { x: number; y: number } {
    const x = parseFloat(ctx.number(0).text);
    const y = parseFloat(ctx.number(1).text);
    return { x, y };
  }

  override visitBlock_stmt(ctx: Block_stmtContext): string {
    const innerStatements = ctx.statement();
    const animationsMap = new Map<
      string,
      {
        move?: { x: number; y: number };
        rotate?: { angle: string; center?: { x: number; y: number } };
        scale?: string;
      }
    >();
    const tempOutput: string[] = [];

    innerStatements.forEach((stmtCtx: StatementContext) => {
      const animation = stmtCtx.animation_stmt?.();
      if (animation) {
        const id = animation.ID().text;
        const command = animation.start.text;
        const duration = animation.duration()?.number().text ?? "1";
        if (!animationsMap.has(id)) animationsMap.set(id, {}); // init map entry if it doesn't exist

        const current = animationsMap.get(id)!;

        switch (command) {
          case "scale":
            current.scale = animation.number()?.text ?? "1";
            break;
          case "rotate":
            const degree = animation.number()?.text ?? "0";
            let pos = undefined;
            if (animation.position()) {
              pos = this.getPosition(animation.position()!);
            }
            current.rotate = { angle: degree, center: pos };
            break;
          case "move":
            current.move = this.getPosition(animation.position()!);
            break;
          default:
            // Fallback: capture output, strip trailing semicolons
            const prevLen = this.output.length;
            this.visit(stmtCtx);
            const newLines = this.output.splice(prevLen).map((line) =>
              line.replace(/;$/, "")
            );
            tempOutput.push(...newLines);
        }
      } else {
        // Non-animation statement
        const prevLen = this.output.length;
        this.visit(stmtCtx);
        const newLines = this.output.splice(prevLen).map((line) =>
          line.replace(/;$/, "")
        );
        tempOutput.push(...newLines);
      }
    });

    const duration = 1000; // TODO: make dynamic

    for (const [id, acts] of animationsMap.entries()) {
      const isGroup = this.groupIds.has(id);

      if (isGroup) {
        if (acts.scale && acts.rotate) {
          const center = acts.rotate.center
            ? `, { x: ${acts.rotate.center.x}, y: ${acts.rotate.center.y} }`
            : "";
          tempOutput.push(
            `${id}.scaleAndRotate(${acts.scale}, ${acts.rotate.angle}, ${duration}${center})`,
          );
        } else if (acts.scale && acts.move) {
          tempOutput.push(
            `${id}.scaleAndMove(${acts.scale}, ${acts.move.x}, ${acts.move.y}, ${duration})`,
          );
        } else {
          if (acts.scale) {
            tempOutput.push(`${id}.scale(${acts.scale}, ${duration})`);
          }
          if (acts.move) {
            tempOutput.push(
              `${id}.move(${acts.move.x}, ${acts.move.y}, ${duration})`,
            );
          }
          if (acts.rotate) {
            const center = acts.rotate.center
              ? `, { x: ${acts.rotate.center.x}, y: ${acts.rotate.center.y} }`
              : "";
            tempOutput.push(
              `${id}.rotate(${acts.rotate.angle}, ${duration}${center})`,
            );
          }
        }
      } else {
        // Fallback for non-group
        if (acts.scale) {
          tempOutput.push(`${id}.scale(${acts.scale}, ${duration})`);
        }
        if (acts.move) {
          tempOutput.push(
            `${id}.move(${acts.move.x}, ${acts.move.y}, ${duration})`,
          );
        }
        if (acts.rotate) {
          const center = acts.rotate.center
            ? `, { x: ${acts.rotate.center.x}, y: ${acts.rotate.center.y} }`
            : "";
          tempOutput.push(
            `${id}.rotate(${acts.rotate.angle}, ${duration}${center})`,
          );
        }
      }
    }
    this.output.push(`await Promise.all([\n  ${tempOutput.join(",\n  ")}\n]);`);
    return "";
  }

  override visitSleep_stmt(ctx: Sleep_stmtContext): string {
    const seconds = ctx.number().text;
    const durationMs = Math.round(parseFloat(seconds) * 1000);
    const code = `await Util.sleep(${durationMs});`;
    this.output.push(code);
    return code;
  }

  override visitGroup_stmt(ctx: Group_stmtContext): string {
    const [groupName, ...members] = ctx.ID().map((id) => id.text);
    this.groupIds.add(groupName);
    let code = `const ${groupName} = new Group();\n`;
    code += `${groupName}.addShape([${members.join(", ")}]);`;
    this.output.push(code);
    return code;
  }
}
