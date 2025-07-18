import { AbstractDSLVisitor } from "./AbstractDSLVisitor";
import {
  Animation_stmtContext,
  Block_stmtContext,
  PositionContext,
  ScriptContext,
  Shape_stmtContext,
  StatementContext,
  Text_stmtContext,
} from "./generated/DSLParser";

export class DSLToTSVisitor extends AbstractDSLVisitor<string> {
  idMap: Map<string, string> = new Map();
  counter = 1;
  output: string[] = [];

  override visitScript(ctx: ScriptContext): string {
    ctx.statement().forEach((stmt) => {
      this.visit(stmt);
    });
    return this.output.join("\n");
  }

  override visitShape_stmt(ctx: Shape_stmtContext): string {
    let shapeType = ctx.getChild(2).text;
    const pos = this.visit(ctx.position(0));
    const id = ctx.ID().text;
    this.idMap.set(id, id);
    const color = ctx.color()?.COLOR().text
      ? `"${ctx.color()?.COLOR().text}"`
      : `"black"`;

    let code = `const ${id} = new `;

    switch (shapeType) {
      case "circle":
        code += `Circle({ ${pos}, radius: ${
          ctx.number(0).text
        }, color: ${color} });`;
        break;
      case "rectangle":
        code += `Rectangle({ ${pos}, width: ${ctx.number(0).text}, height: ${
          ctx.number(1).text
        }, color: ${color} });`;
        break;
      case "triangle":
        code += `Triangle({ ${pos}, radius: ${
          ctx.number(0).text
        }, color: ${color} });`;
        break;
      case "dot":
        code += `Dot({ ${pos}, color: ${color} });`;
        break;
      case "line":
        const start = this.visit(ctx.position(0));
        const end = this.visit(ctx.position(1));

        // Parse individual components
        const [startX, startY] = start.split(",").map((s) =>
          s.split(":")[1].trim()
        );
        const [endX, endY] = end.split(",").map((s) => s.split(":")[1].trim());
        code +=
          `Line({ startX: ${startX}, startY: ${startY}, endX: ${endX}, endY: ${endY}, color: ${color} });`;
        break;
    }

    this.output.push(code);
    this.output.push(`toDraw.push(${id});`);
    return code;
  }

  override visitText_stmt(ctx: Text_stmtContext): string {
    const id = ctx.ID().text;
    const text = ctx.STRING().text;
    const pos = this.visit(ctx.position());
    const size = ctx.size()?.number().text
      ? `, size: ${ctx.size()!.number().text}`
      : "";
    const color = ctx.color()?.COLOR().text
      ? `, color: "${ctx.color()!.COLOR().text}"`
      : "";
    const code =
      `const ${id} = new Text({ ${pos}, text: ${text}${size}${color} });`;
    this.output.push(code);
    this.output.push(`toDraw.push(${id});`);
    return code;
  }

  override visitAnimation_stmt(ctx: Animation_stmtContext): string {
    const id = ctx.ID().text;
    const duration = ctx.duration()?.number().text;
    const keyword = ctx.start.text;
    let code = "";

    let pos = "";
    if (ctx.position()) {
      pos = this.visit(ctx.position()!);
    }

    if (keyword === "move") {
      const [x, y] = pos.match(/-?\d+(\.\d+)?/g)!.map(Number);
      code = `await ${id}.move(${x}, ${y}, ${
        duration ? duration + "000" : "1000"
      });`;
    } else if (keyword === "fadein") {
      code = `await ${id}.fadeIn(${
        duration ? Math.round(parseFloat(duration) * 1000) : 1000
      });`;
    } else if (keyword === "fadeout") {
      code = `await ${id}.fadeOut(${
        duration ? Math.round(parseFloat(duration) * 1000) : 1000
      });`;
    } else if (keyword === "scale") {
      const scale = ctx.number()?.text ?? "1";
      code = `await ${id}.scale(${scale}, ${
        duration ? Math.round(parseFloat(duration) * 1000) : 1000
      });`;
    } else if (keyword === "rotate") {
      const degree = ctx.number()?.text ?? "0";
      const durationMs = duration
        ? Math.round(parseFloat(duration) * 1000)
        : 1000;

      let center = "";
      if (ctx.position()) {
        const positionText = this.visit(ctx.position()!);
        const match = positionText.match(/centerX: ([^,]+), centerY: (.+)/);
        if (match) {
          const [, x, y] = match;
          center = `, { x: ${x}, y: ${y} }`;
        }
      }
      code = `await ${id}.rotate(${degree}, ${durationMs}${center});`;
    }
    this.output.push(code);
    return code;
  }

  override visitPosition(ctx: PositionContext): string {
    const x = ctx.number(0).text;
    const y = ctx.number(1).text;
    return `centerX: ${x}, centerY: ${y}`;
  }

  override visitBlock_stmt(ctx: Block_stmtContext): string {
    const innerStatements = ctx.statement();
    const promises: string[] = [];

    innerStatements.forEach((stmtCtx: StatementContext) => {
      const prevLength = this.output.length;
      this.visit(stmtCtx);
      const newCode = this.output.splice(prevLength); // isolate new lines
      if (newCode.length > 0) {
        promises.push(`(async () => {\n${newCode.join("\n")}\n})()`);
      }
    });
    this.output.push(`await Promise.all([${promises.join(",\n")}]);`);
    return "";
  }
}
