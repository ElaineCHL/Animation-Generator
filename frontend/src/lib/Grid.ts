import { Drawable } from "./interface/Drawable.js";

export class Grid extends Drawable {
  private canvas: HTMLCanvasElement;
  private width: number;
  private height: number;
  private cellSize: number;
  private showAxis: boolean;
  private showMinorGrid: boolean;

  constructor(cellSize: number = 100) {
    super();
    const canvasElement = document.getElementById("myCanvas") as
      | HTMLCanvasElement
      | null;
    if (!canvasElement) {
      throw new Error("Canvas element not found.");
    }
    this.canvas = canvasElement;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.cellSize = cellSize;
    this.showAxis = true;
    this.showMinorGrid = true;
    this.setZIndex(-1000);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.globalAlpha = this.getOpacity();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "12px Arial";

    // minor grid lines
    if (this.showMinorGrid) {
      const smallStep = this.cellSize / 5;
      ctx.beginPath();
      for (let i = 0; i < this.width; i += smallStep) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, this.height);
      }
      for (let i = 0; i < this.height; i += smallStep) {
        ctx.moveTo(0, i);
        ctx.lineTo(this.width, i);
      }
      ctx.strokeStyle = "#f0f0f0";
      ctx.stroke();
    }

    // major grid lines
    ctx.beginPath();
    for (let i = 0; i < this.width; i += this.cellSize) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this.height);
    }
    for (let i = 0; i < this.height; i += this.cellSize) {
      ctx.moveTo(0, i);
      ctx.lineTo(this.width, i);
    }
    ctx.strokeStyle = "#c0c0c0";
    ctx.stroke();

    // add axis coordinate labels
    if (this.showAxis) {
      ctx.fillStyle = "#000";
      for (let i = this.cellSize; i < this.width; i += this.cellSize) {
        ctx.fillText(i.toString(), i, 15); // X-axis labels
      }
      for (let i = this.cellSize; i < this.height; i += this.cellSize) {
        ctx.fillText(i.toString(), 20, i); // Y-axis labels
      }
    }
  }

  public displayAxis(val: boolean): void {
    this.showAxis = val;
  }

  public displayMinorGrid(val: boolean): void {
    this.showMinorGrid = val;
  }

  public setCellSize(size: number): void {
    this.cellSize = size;
  }
}
