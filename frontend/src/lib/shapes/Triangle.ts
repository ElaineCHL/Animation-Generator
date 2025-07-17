import { Shape } from "../interface/Shape.js";

interface TriangleOptions {
  centerX: number;
  centerY: number;
  color?: string;
  fill?: boolean;
  text?: string;
  radius?: number;
}

export class Triangle extends Shape {
  center: { x: number; y: number };
  color: string;
  fill: boolean;
  rotation: number;
  radius: number;
  text: string;

  constructor({
    centerX,
    centerY,
    color = "rgba(0, 255, 255, 0.5)",
    fill = false,
    text = "",
    radius = 10,
  }: TriangleOptions) {
    super();
    this.center = { x: centerX, y: centerY };
    this.color = color;
    this.fill = fill;
    this.text = text;
    this.radius = radius;
    this.rotation = 0;
  }

  setPosition(x: number, y: number): void {
    this.center = { x, y };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(this.rotation);

    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.getOpacity();
    ctx.strokeStyle = this.color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";

    const angleOffset = (2 * Math.PI) / 3; // 120 degrees

    ctx.beginPath();

    // Triangle points
    ctx.moveTo(
      this.radius * Math.cos(-Math.PI / 2),
      this.radius * Math.sin(-Math.PI / 2),
    );
    ctx.lineTo(
      this.radius * Math.cos(-Math.PI / 2 + angleOffset),
      this.radius * Math.sin(-Math.PI / 2 + angleOffset),
    );
    ctx.lineTo(
      this.radius * Math.cos(-Math.PI / 2 + 2 * angleOffset),
      this.radius * Math.sin(-Math.PI / 2 + 2 * angleOffset),
    );

    ctx.closePath();

    if (this.fill) ctx.fill();
    ctx.stroke();

    // Draw text
    ctx.fillStyle = "black";
    ctx.fillText(this.text, 0, 0);

    ctx.restore();
  }

  move(dx: number, dy: number, duration: number = 1000): Promise<void> {
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

  scale(factor: number, duration: number = 1000): Promise<void> {
    const initialRadius = this.radius;
    const targetRadius = initialRadius * factor;
    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Interpolate between the initial and target radius
        this.radius = initialRadius + progress * (targetRadius - initialRadius);

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
    centerOfRotation?: { x: number; y: number },
    duration: number = 1000,
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
