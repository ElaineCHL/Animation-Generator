export abstract class Drawable {
  private visible = true;
  private opacity = 1;
  private zIndex = 0;

  public abstract draw(ctx: CanvasRenderingContext2D): void;

  public renderShape(ctx: CanvasRenderingContext2D): void {
    if (!this.getVisibility()) return;
    ctx.save();
    this.draw(ctx);
    ctx.restore();
  }

  public setVisibility(visible: boolean): void {
    this.visible = visible;
  }

  public setZIndex(zIndex: number): void {
    this.zIndex = zIndex;
  }

  public setOpacity(opacity: number): void {
    this.opacity = opacity;
  }

  public getVisibility = (): boolean => this.visible;
  public getZIndex = (): number => this.zIndex;
  public getOpacity = (): number => this.opacity;

  public fadeIn(duration: number = 1000): Promise<void> {
    this.opacity = 0;
    this.setVisibility(true);
    const startTime = performance.now();
    const initialOpacity = this.opacity;

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        this.opacity = initialOpacity + progress * (1 - initialOpacity);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  fadeOut(duration: number = 1000): Promise<void> {
    const startTime = performance.now();
    const initialOpacity = this.opacity;

    return new Promise<void>((resolve) => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        this.opacity = initialOpacity * (1 - progress);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.opacity = 0;
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }
}
