import { Circle } from "./Circle.js";

interface DotOptions {
  centerX: number;
  centerY: number;
  color?: string;
  text?: string;
}

export class Dot extends Circle {
  constructor({
    centerX,
    centerY,
    color = "black",
    text = "",
  }: DotOptions) {
    super({
      centerX: centerX,
      centerY: centerY,
      radius: 2,
      color,
      fill: true,
    });
    this.text = text;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const originalText = this.text;
    this.text = "";

    super.draw(ctx);

    this.text = originalText;

    if (originalText) {
      ctx.save();
      ctx.globalAlpha = this.getOpacity();
      ctx.fillStyle = "black";
      ctx.font = "14px Arial";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(originalText, this.center.x + 5, this.center.y - 20);
      ctx.restore();
    }
  }
}
