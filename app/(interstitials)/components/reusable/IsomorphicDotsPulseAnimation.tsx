"use client"
import React, { useRef, useEffect } from 'react';

interface Dot {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  direction: string;
}

interface Props {
  canvasPercentageWidth: number;
}

const PulsatingDotsCanvas: React.FC<Props> = ({ canvasPercentageWidth }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetWidth;

    const dots: Dot[] = [];

    class Dot {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      direction: string;

      constructor(x: number, y: number, radius: number, speed: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.opacity = 1;
        this.direction = 'up';
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }

      update() {
        if (this.direction === 'up') {
          this.opacity -= this.speed;
          if (this.opacity <= 0.1) {
            this.direction = 'down';
          }
        } else if (this.direction === 'down') {
          this.opacity += this.speed;
          if (this.opacity >= 1) {
            this.direction = 'up';
          }
        }
        this.draw();
      }
    }

    const dotRadius = 0.375;
    const dotSpacingX = 20;
    const dotSpacingY = 20;

    for (let y = 0; y < canvas.height; y += dotSpacingY) {
      for (let x = 0; x < canvas.width; x += dotSpacingX) {
        const dot = new Dot(x, y, dotRadius, 0.02);
        dots.push(dot);
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.update();
      });
    };

    animate();
  }, [canvasPercentageWidth]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${canvasPercentageWidth}%`, height: 'auto', aspectRatio: '1 / 1' }}
    ></canvas>
  );
};

export default PulsatingDotsCanvas;
