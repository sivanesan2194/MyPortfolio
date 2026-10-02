import React from 'react';

export default function Badge({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
  icon: Icon
}) {
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[11px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const variantStyles = {
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50",
    indigo: "bg-indigo-950/40 text-indigo-300 border-indigo-500/30 hover:border-indigo-400/50",
    emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50",
    neutral: "bg-white/[0.04] text-gray-300 border-white/[0.08] hover:border-white/20",
    amber: "bg-amber-950/40 text-amber-300 border-amber-500/30 hover:border-amber-400/50"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-md border backdrop-blur-xs transition-colors duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 flex-shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
