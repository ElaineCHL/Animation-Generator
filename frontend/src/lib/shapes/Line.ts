import { Shape } from "../interface/Shape.js";

interface LineOptions {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color?: string;
  lineWidth?: number;
  arrowStart?: boolean;
  arrowEnd?: boolean;
  arrowSize?: number;
  text?: string;
}

export class Line extends Shape {
  public start: { x: number; y: number };
  public end: { x: number; y: number };
  public color: string;
  public lineWidth: number;
  public center: { x: number; y: number };
  public fill = false; // not applicable to lines
  public rotation: number = 0;
  public arrowStart: boolean;
  public arrowEnd: boolean;
  public arrowSize: number;
  public text: string;

  constructor({
    startX,
    startY,
    endX,
    endY,
    color = "black",
    text = "",
    lineWidth = 2,
    arrowStart = false,
    arrowEnd = false,
    arrowSize = 10,
  }: LineOptions) {
    super();
    this.start = { x: startX, y: startY };
    this.end = { x: endX, y: endY };
    this.color = color;
    this.lineWidth = lineWidth;
    this.center = {
      x: (startX + endX) / 2,
      y: (startY + endY) / 2,
    };
    this.arrowStart = arrowStart;
    this.arrowEnd = arrowEnd;
    this.arrowSize = arrowSize;
    this.text = text;
  }

  private updateCenter(): void {
    this.center = {
      x: (this.start.x + this.end.x) / 2,
      y: (this.start.y + this.end.y) / 2,
    };
  }

  public setPosition(x: number, y: number): void {
    const dx = x - this.center.x;
    const dy = y - this.center.y;
    this.start.x += dx;
    this.start.y += dy;
    this.end.x += dx;
    this.end.y += dy;
    this.updateCenter();
  }

  private drawArrowhead(
    ctx: CanvasRenderingContext2D,
    from: { x: number; y: number },
    to: { x: number; y: number },
  ): void {
    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    const size = this.arrowSize;

    ctx.beginPath();
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(
      to.x - size * Math.cos(angle - Math.PI / 6),
      to.y - size * Math.sin(angle - Math.PI / 6),
    );
    ctx.lineTo(
      to.x - size * Math.cos(angle + Math.PI / 6),
      to.y - size * Math.sin(angle + Math.PI / 6),
    );
    ctx.lineTo(to.x, to.y);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.globalAlpha = this.getOpacity();

    ctx.beginPath();
    ctx.moveTo(this.start.x, this.start.y);
    ctx.lineTo(this.end.x, this.end.y);
    ctx.stroke();
    ctx.closePath();

    if (this.arrowEnd) {
      this.drawArrowhead(ctx, this.start, this.end);
    }
    if (this.arrowStart) {
      this.drawArrowhead(ctx, this.end, this.start);
    }

    if (this.text) {
      ctx.fillStyle = "black";
      ctx.font = "15px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.center.x, this.center.y);
    }
    ctx.restore();
  }

  public move(
    dx: number,
    dy: number,
    duration: number = 1000,
  ): Promise<void> {
    const startStart = { ...this.start };
    const startEnd = { ...this.end };
    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        this.start.x = startStart.x + dx * progress;
        this.start.y = startStart.y + dy * progress;
        this.end.x = startEnd.x + dx * progress;
        this.end.y = startEnd.y + dy * progress;
        this.updateCenter();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  public scale(factor: number, duration: number = 1000): Promise<void> {
    const center = { ...this.center };
    const startVecStart = {
      x: this.start.x - center.x,
      y: this.start.y - center.y,
    };
    const startVecEnd = {
      x: this.end.x - center.x,
      y: this.end.y - center.y,
    };
    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const scale = 1 + (factor - 1) * progress;

        this.start.x = center.x + startVecStart.x * scale;
        this.start.y = center.y + startVecStart.y * scale;
        this.end.x = center.x + startVecEnd.x * scale;
        this.end.y = center.y + startVecEnd.y * scale;
        this.updateCenter();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  public rotate(
    degree: number,
    centerOfRotation?: { x: number; y: number },
    duration: number = 1000,
  ): Promise<void> {
    const radians = (degree * Math.PI) / 180;
    const startStart = { ...this.start };
    const startEnd = { ...this.end };
    const cx = centerOfRotation?.x ?? this.center.x;
    const cy = centerOfRotation?.y ?? this.center.y;

    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const angle = radians * progress;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        const rotate = (px: number, py: number) => {
          const dx = px - cx;
          const dy = py - cy;
          return {
            x: dx * cos - dy * sin + cx,
            y: dx * sin + dy * cos + cy,
          };
        };
        this.start = rotate(startStart.x, startStart.y);
        this.end = rotate(startEnd.x, startEnd.y);
        this.rotation = angle;
        this.updateCenter();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }
}
