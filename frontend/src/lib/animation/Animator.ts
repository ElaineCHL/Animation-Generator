import { CanvasRenderer } from "../CanvasRenderer";

export class Animator {
  private animationFrameId: number | null = null;
  private renderer;

  constructor(renderer: CanvasRenderer) {
    this.renderer = renderer;
  }

  public start(): void {
    const animate = () => {
      this.renderer.render();
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  public stop(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
