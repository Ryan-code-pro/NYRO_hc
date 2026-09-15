import React from 'react';
import { LivingPalette } from '../types';

interface LivingBackgroundProps {
  palette: LivingPalette;
  isAliveAnimation: boolean;
}

export const LivingBackground: React.FC<LivingBackgroundProps> = ({
  palette,
  isAliveAnimation,
}) => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Dynamic Ambient Mesh Orbs - Soft, gradual & sleek */}
      {/* Orb 1: Top Right - Dynamic Cyan / Primary */}
      <div
        className={`absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full blur-[160px] transition-all duration-[3000ms] ease-in-out ${
          isAliveAnimation ? 'animate-float-1 animate-pulse-slow' : ''
        }`}
        style={{
          backgroundColor: palette.ambientOrbs.orb1,
          opacity: 0.12,
        }}
      />

      {/* Orb 2: Middle Left - Vibrant Purple / Fuchsia */}
      <div
        className={`absolute top-[35%] -left-36 w-[600px] h-[600px] rounded-full blur-[180px] transition-all duration-[3000ms] ease-in-out ${
          isAliveAnimation ? 'animate-float-2 animate-pulse-slow' : ''
        }`}
        style={{
          backgroundColor: palette.ambientOrbs.orb2,
          opacity: 0.11,
        }}
      />

      {/* Orb 3: Bottom Right - Emerald / Lime */}
      <div
        className={`absolute top-[70%] right-[10%] w-[500px] h-[500px] rounded-full blur-[170px] transition-all duration-[3000ms] ease-in-out ${
          isAliveAnimation ? 'animate-float-1' : ''
        }`}
        style={{
          backgroundColor: palette.ambientOrbs.orb3,
          opacity: 0.09,
        }}
      />

      {/* Orb 4: Center Shimmer - Sunset Amber / Hot Pink */}
      <div
        className="absolute top-[15%] left-[45%] -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-[150px] transition-all duration-[3000ms] ease-in-out"
        style={{
          backgroundColor: palette.colors[3] || '#ec4899',
          opacity: 0.07,
        }}
      />

      {/* Subtle Micro-Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
      />
    </div>
  );
};
