import { Drawable } from "./interface/Drawable.js";
import { Group } from "./group/Group.js";

export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  shapes: Drawable[];

  constructor(canvas: HTMLCanvasElement, shapes: Drawable[] | Group = []) {
    this.canvas = canvas;
    if (shapes instanceof Group) {
      this.shapes = shapes.getShapes();
    } else {
      this.shapes = shapes;
    }
  }

  public render(): void {
    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;
    this.sortShapesByZIndex();
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.shapes.forEach((shape) => shape.renderShape(ctx));
  }

  private sortShapesByZIndex(): void {
    this.shapes.sort((a, b) => a.getZIndex() - b.getZIndex());
  }
}
