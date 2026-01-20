"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function AnimatedBorderButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);

  // Rotation automatique du gradient
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => prev + 1.5);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleRad = Math.atan2(mouseY - centerY, mouseX - centerX);
    const angleDeg = angleRad * (180 / Math.PI);

    setAngle(angleDeg);
  };

  return (
    <div
      ref={buttonRef}
      className="relative group"
      onMouseMove={handleMouseMove}
    >
      {/* Halo blanc transparent derrière le bouton */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-md"></div>

      {/* Contour animé */}
      <div
        className="absolute -inset-[2px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `conic-gradient(from ${angle}deg, #22d3ee, #0ea5e9, #1e3a8a, #0f172a, #1e3a8a, #0ea5e9, #22d3ee)`,
        }}
      />

      {/* Bouton */}
      <Button
        variant="outline"
        className="relative border-0 text-cyan-400 bg-background hover:bg-background hover:text-cyan-300 transition-all rounded-full px-6 py-3"
      >
        {children}
      </Button>
    </div>
  );
}
