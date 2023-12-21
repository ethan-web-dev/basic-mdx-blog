"use client"

import React, { useEffect, useRef } from 'react';

const MandelbrotSet: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const maxIterations = 100;
    const magnificationFactor = 400;
    const panX = 1;
    const panY = 0;

    const draw = () => {
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const real = (x - width / 2) / magnificationFactor - panX;
          const imaginary = (y - height / 2) / magnificationFactor - panY;

          let zx = 0;
          let zy = 0;
          let iteration = 0;

          while (zx * zx + zy * zy < 4 && iteration < maxIterations) {
            const xtemp = zx * zx - zy * zy + real;
            zy = 2 * zx * zy + imaginary;
            zx = xtemp;
            iteration++;
          }

          if (iteration === maxIterations) {
            ctx.fillStyle = '#000';
            ctx.fillRect(x, y, 1, 1);
          } else {
            const hue = (iteration / maxIterations) * 360;
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default MandelbrotSet;
