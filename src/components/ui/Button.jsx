import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  download,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14] disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 font-medium tracking-wide",
    md: "px-5 py-2.5 text-sm gap-2 font-semibold",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-bold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]",
    secondary: "border border-white/10 hover:border-cyan-500/40 bg-white/[0.03] hover:bg-white/[0.07] text-gray-200 hover:text-white backdrop-blur-md hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]",
    outline: "border border-white/10 hover:border-white/20 text-gray-300 hover:text-white bg-transparent active:scale-[0.98]",
    ghost: "text-gray-400 hover:text-cyan-300 hover:bg-cyan-950/30 active:scale-[0.98]",
    glow: "bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-gray-950 font-bold shadow-lg shadow-cyan-500/25 active:scale-[0.98]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        download={download}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
    </button>
  );
}
