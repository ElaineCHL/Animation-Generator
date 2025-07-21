import { Shape } from "../interface/Shape";

export class Group {
  private shapes: Shape[] = [];
  private origin: { x: number; y: number }; // center of the group

  constructor() {
    this.origin = { x: 0, y: 0 };
  }

  public addShape(shape: Shape) {
    this.shapes.push(shape);
    this.updateOrigin();
  }

  public getShapes(): Shape[] {
    return this.shapes;
  }

  private updateOrigin(): void {
    if (this.shapes.length === 0) {
      this.origin = { x: 0, y: 0 };
      return;
    }

    const sumX = this.shapes.reduce((acc, shape) => acc + shape.center.x, 0);
    const sumY = this.shapes.reduce((acc, shape) => acc + shape.center.y, 0);

    this.origin = {
      x: sumX / this.shapes.length,
      y: sumY / this.shapes.length,
    };
  }

  public move(
    newX: number,
    newY: number,
    duration: number = 1000,
  ): Promise<void> {
    const movePromises = this.shapes.map((shape) => {
      const x = newX + (shape.center.x - this.origin.x);
      const y = newY + (shape.center.y - this.origin.y);
      return shape.move(x, y, duration);
    });
    this.origin.x = newX;
    this.origin.y = newY;
    return Promise.all(movePromises).then(() => {});
  }

  public scale(factor: number, duration: number = 1000): Promise<void> {
    const startTime = performance.now();

    // cache original relative position
    const shapeStates = this.shapes.map((shape) => {
      const dx = shape.center.x - this.origin.x;
      const dy = shape.center.y - this.origin.y;
      return {
        shape,
        dx,
        dy,
        originalX: shape.center.x,
        originalY: shape.center.y,
      };
    });

    this.shapes.forEach((shape) => shape.scale(factor, duration));

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentFactor = 1 + (factor - 1) * progress;

        shapeStates.forEach(({ shape, dx, dy }) => {
          shape.center.x = this.origin.x + dx * currentFactor;
          shape.center.y = this.origin.y + dy * currentFactor;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  public scaleAndMove(
    scaleFactor: number,
    newX: number,
    newY: number,
    duration: number,
  ): Promise<void> {
    const startTime = performance.now();

    // cache original relative positions and the starting origin
    const shapeStates = this.shapes.map((shape) => {
      const dx = shape.center.x - this.origin.x; // relative to origin for scaling
      const dy = shape.center.y - this.origin.y;
      return {
        shape,
        dx,
        dy,
      };
    });

    // cache the starting origin for interpolation
    const startOriginX = this.origin.x;
    const startOriginY = this.origin.y;

    this.shapes.forEach((shape) => shape.scale(scaleFactor, duration));

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentScaleFactor = 1 + (scaleFactor - 1) * progress;
        const currentOriginX = startOriginX + (newX - startOriginX) * progress;
        const currentOriginY = startOriginY + (newY - startOriginY) * progress;

        shapeStates.forEach(({ shape, dx, dy }) => {
          // apply scaling relative to the current origin
          shape.center.x = currentOriginX + dx * currentScaleFactor;
          shape.center.y = currentOriginY + dy * currentScaleFactor;
        });

        // update origin
        this.origin.x = currentOriginX;
        this.origin.y = currentOriginY;

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
    const startTime = performance.now();
    const targetRadians = (degree * Math.PI) / 180;

    const shapeStates = this.shapes.map((shape) => ({
      shape,
      startX: shape.center.x,
      startY: shape.center.y,
      startRotation: shape.rotation,
    }));
    const startOrigin = { ...this.origin };

    const cx = centerOfRotation?.x ?? this.origin.x;
    const cy = centerOfRotation?.y ?? this.origin.y;

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentRadians = targetRadians * progress;

        const cos = Math.cos(currentRadians);
        const sin = Math.sin(currentRadians);

        // Update each shape's position and rotation
        shapeStates.forEach(({ shape, startX, startY, startRotation }) => {
          const translatedX = startX - cx;
          const translatedY = startY - cy;
          shape.center.x = translatedX * cos - translatedY * sin + cx;
          shape.center.y = translatedX * sin + translatedY * cos + cy;

          shape.rotation = startRotation + currentRadians;
        });

        // Update the group's origin
        const originTranslatedX = startOrigin.x - cx;
        const originTranslatedY = startOrigin.y - cy;
        this.origin.x = originTranslatedX * cos - originTranslatedY * sin + cx;
        this.origin.y = originTranslatedX * sin + originTranslatedY * cos + cy;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  public scaleAndRotate(
    scaleFactor: number,
    degree: number,
    centerOfTransformation?: { x: number; y: number },
    duration: number = 1000,
  ): Promise<void> {
    const startTime = performance.now();
    const targetRadians = (degree * Math.PI) / 180;

    const cx = centerOfTransformation?.x ?? this.origin.x;
    const cy = centerOfTransformation?.y ?? this.origin.y;

    const shapeStates = this.shapes.map((shape) => {
      const dx = shape.center.x - cx;
      const dy = shape.center.y - cy;
      return {
        shape,
        dx,
        dy,
        startRotation: shape.rotation,
      };
    });

    const originDx = this.origin.x - cx;
    const originDy = this.origin.y - cy;

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentRadians = targetRadians * progress;
        const currentScale = 1 + (scaleFactor - 1) * progress;

        const cos = Math.cos(currentRadians);
        const sin = Math.sin(currentRadians);

        shapeStates.forEach(({ shape, dx, dy, startRotation }) => {
          const scaledX = dx * currentScale;
          const scaledY = dy * currentScale;

          shape.center.x = scaledX * cos - scaledY * sin + cx;
          shape.center.y = scaledX * sin + scaledY * cos + cy;

          shape.rotation = startRotation + currentRadians;
        });

        this.origin.x = originDx * currentScale * cos -
          originDy * currentScale * sin + cx;
        this.origin.y = originDx * currentScale * sin +
          originDy * currentScale * cos + cy;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      shapeStates.forEach(({ shape }) => shape.scale(scaleFactor, duration));
      requestAnimationFrame(animate);
    });
  }

  public moveAndRotate(
    newX: number,
    newY: number,
    degree: number,
    centerOfRotation?: { x: number; y: number },
    duration: number = 1000,
  ): Promise<void> {
    const startTime = performance.now();
    const targetRadians = (degree * Math.PI) / 180;

    const startOriginX = this.origin.x;
    const startOriginY = this.origin.y;

    const cx = centerOfRotation?.x ?? this.origin.x;
    const cy = centerOfRotation?.y ?? this.origin.y;

    const shapeStates = this.shapes.map((shape) => ({
      shape,
      startX: shape.center.x,
      startY: shape.center.y,
      startRotation: shape.rotation,
    }));

    const startOrigin = { ...this.origin };

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentRadians = targetRadians * progress;

        const currentOriginX = startOriginX + (newX - startOriginX) * progress;
        const currentOriginY = startOriginY + (newY - startOriginY) * progress;

        const cos = Math.cos(currentRadians);
        const sin = Math.sin(currentRadians);

        shapeStates.forEach(({ shape, startX, startY, startRotation }) => {
          const translatedX = startX - cx;
          const translatedY = startY - cy;

          const rotatedX = translatedX * cos - translatedY * sin;
          const rotatedY = translatedX * sin + translatedY * cos;

          const deltaX = rotatedX + cx - shape.center.x;
          const deltaY = rotatedY + cy - shape.center.y;

          // Interpolate movement
          shape.center.x = shape.center.x + (currentOriginX - this.origin.x) +
            deltaX;
          shape.center.y = shape.center.y + (currentOriginY - this.origin.y) +
            deltaY;

          shape.rotation = startRotation + currentRadians;
        });

        // Update group origin
        const originTranslatedX = startOrigin.x - cx;
        const originTranslatedY = startOrigin.y - cy;
        this.origin.x = originTranslatedX * cos - originTranslatedY * sin + cx;
        this.origin.y = originTranslatedX * sin + originTranslatedY * cos + cy;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Final origin set exactly
          this.origin.x = newX;
          this.origin.y = newY;
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }
}
