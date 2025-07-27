import { useEffect, useRef } from "react";

import { Util } from "../lib/Utils.js";
import { Drawable } from "../lib/interface/Drawable";
import { Grid } from '../lib/Grid.js';
import { Group } from "../lib/group/Group.js";
import { CanvasRenderer } from "../lib/CanvasRenderer";
import { Animator } from "../lib/animation/Animator.js";

// Shapes
import { Circle } from "../lib/shapes/Circle.js";
import { Square } from "../lib/shapes/Square.js";
import { Rectangle } from "../lib/shapes/Rectangle.js";
import { Triangle } from "../lib/shapes/Triangle";
import { Dot } from "../lib/shapes/Dot.js";
import { Line } from "../lib/shapes/Line.js";
import { Text } from "../lib/shapes/Text.js";

type CanvasWrapperProps = {
  animationCode: string;
  showGrid: boolean;
  onError?: (error: string) => void;
};


const CanvasWrapper = ({ animationCode, showGrid, onError }: CanvasWrapperProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const toDrawRef = useRef<Drawable[]>([]);
  const rendererRef = useRef<CanvasRenderer | null>(null);
  const animatorRef = useRef<Animator | null>(null);

  const initialize = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const toDraw: Drawable[] = [];
  const renderer = new CanvasRenderer(canvas, toDraw);
  const animator = new Animator(renderer);

  toDrawRef.current = toDraw;
  rendererRef.current = renderer;
  animatorRef.current = animator;

  if (showGrid) {
    const gridLines = new Grid();
    toDraw.push(gridLines);
  }

  try {
    const exec = new Function(
      "toDraw", "renderer", "animator", "Circle", "Rectangle", "Square", "Text", "Triangle", "Line", "Dot", "Group", "Grid", "Util",
      `"use strict"; return (async function() { ${animationCode} })();`
    );

    const promise = exec(
      toDraw, renderer, animator,
      Circle, Rectangle, Square, Text, Triangle, Line, Dot,
      Group, Grid, Util
    );

    if (promise instanceof Promise) {
      promise.catch((err: Error) => {
        console.error("Error during async execution:", err);
        onError?.(err.message); // <- Call parent error handler
      });
    }
  } catch (err: unknown) {
    console.error("Error evaluating code:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    onError?.(message); // <- Call parent error handler
  }

  animator.start();
};


  useEffect(() => {
    return () => {
      animatorRef.current?.stop();
    };
  }, [animationCode, showGrid]);

  initialize();
  return (
    <div >
      <canvas
        id="myCanvas"
        ref={canvasRef}
        width={1250}
        height={620}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
};

export default CanvasWrapper;