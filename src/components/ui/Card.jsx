import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}) {
  return (
    <div
      className={`relative rounded-2xl p-5 md:p-6 transition-all duration-300 ${
        hoverEffect ? 'glass-card-hover' : ''
      } ${
        glow ? 'shadow-cyan-glow-sm' : ''
      } bg-gradient-to-b from-[#0E1524]/90 to-[#0A0F1D]/80 backdrop-blur-xl border border-white/[0.07] text-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
