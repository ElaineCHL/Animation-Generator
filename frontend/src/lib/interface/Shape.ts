import { Drawable } from "./Drawable";

export abstract class Shape extends Drawable {
  public abstract center: { x: number; y: number };
  public abstract color: string;
  public abstract fill: boolean;
  public abstract rotation: number;
  public abstract text: string;

  public abstract setPosition(x: number, y: number): void;
  public abstract move(x: number, y: number, duration?: number): Promise<void>;
  public abstract scale(factor: number, duration?: number): Promise<void>;
  public abstract rotate(
    degree: number,
    centerOfRotation?: { x: number; y: number },
    duration?: number,
  ): Promise<void>;
}
