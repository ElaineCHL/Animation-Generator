import { Rectangle } from "./Rectangle.js";

interface SquareOptions {
  centerX: number;
  centerY: number;
  size: number;
  color?: string;
  fill?: boolean;
  text?: string;
}

export class Square extends Rectangle {
  constructor({
    centerX,
    centerY,
    size,
    color,
    fill,
    text,
  }: SquareOptions) {
    super({
      centerX,
      centerY,
      width: size,
      height: size,
      color,
      fill,
      text,
    });
  }

  scale(factor: number, duration: number = 1000): Promise<void> {
    const initialSize = this.width;
    const targetSize = initialSize * factor;
    const startTime = performance.now();

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const newSize = initialSize + progress * (targetSize - initialSize);
        this.width = newSize;
        this.height = newSize;

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
