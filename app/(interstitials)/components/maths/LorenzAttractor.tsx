"use client"

import React, { useEffect, useRef } from 'react'

const LorenzAttractor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const σ = 10;
    const ρ = 28;
    const β = 8 / 3;

    let x = 0.01;
    let y = 0;
    let z = 0;
    let dt = 0.01;

    const draw = () => {
      const dx = σ * (y - x) * dt;
      const dy = (x * (ρ - z) - y) * dt;
      const dz = (x * y - β * z) * dt;

      x = x + dx;
      y = y + dy;
      z = z + dz;

      const scale = 8; // Adjust scaling for better visualization

      const drawX = canvas.width / 2 + x * scale;
      const drawY = canvas.height / 2 - y * scale;

      ctx.fillStyle = '#ff0000';
      ctx.fillRect(drawX, drawY, 1, 1);

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default LorenzAttractor