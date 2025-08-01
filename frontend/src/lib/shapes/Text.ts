import { Shape } from "../interface/Shape.js";

interface TextOptions {
  centerX: number;
  centerY: number;
  text: string;
  size?: number;
  color?: string;
  fill?: boolean;
  font?: string;
}

export class Text extends Shape {
  center: { x: number; y: number };
  color: string;
  text: string;
  fill: boolean;
  rotation: number;
  size: number;
  font: string;

  constructor({
    centerX,
    centerY,
    text,
    size = 1,
    color = "black",
    fill = true,
    font = "calibri",
  }: TextOptions) {
    super();
    this.center = { x: centerX, y: centerY };
    this.text = text;
    this.size = size;
    this.color = color;
    this.fill = fill;
    this.font = font;
    this.rotation = 0;
  }

  setPosition(x: number, y: number): void {
    this.center = { x, y };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(this.rotation);

    ctx.globalAlpha = this.getOpacity();
    ctx.beginPath();
    ctx.font = this.size * 10 + "px " + this.font;
    ctx.strokeStyle = this.color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeText(this.text, 0, 0);

    if (this.fill) {
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, 0, 0);
    }

    ctx.closePath();
    ctx.restore();
  }

  move(dx: number, dy: number, duration: number): Promise<void> {
    const initialX = this.center.x;
    const initialY = this.center.y;
    const targetX = dx;
    const targetY = dy;
    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Interpolate between the initial and target position
        this.center.x = initialX + progress * (targetX - initialX);
        this.center.y = initialY + progress * (targetY - initialY);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  scale(factor: number, duration: number): Promise<void> {
    const initialSize = this.size;
    const targetSize = initialSize * factor;

    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Interpolate between the initial and target size
        this.size = initialSize + progress * (targetSize - initialSize);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  rotate(
    degree: number,
    duration: number = 1000,
    centerOfRotation?: { x: number; y: number },
  ): Promise<void> {
    const targetRadians = (degree * Math.PI) / 180;
    const startRotation = this.rotation;

    const startCenter = { ...this.center };
    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentRadians = targetRadians * progress;

        // Apply incremental rotation from start
        this.rotation = startRotation + currentRadians;

        if (centerOfRotation) {
          const cx = centerOfRotation.x;
          const cy = centerOfRotation.y;
          const cos = Math.cos(currentRadians);
          const sin = Math.sin(currentRadians);

          const translatedX = startCenter.x - cx;
          const translatedY = startCenter.y - cy;

          const rotatedX = translatedX * cos - translatedY * sin;
          const rotatedY = translatedX * sin + translatedY * cos;

          this.center.x = rotatedX + cx;
          this.center.y = rotatedY + cy;
        }

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
