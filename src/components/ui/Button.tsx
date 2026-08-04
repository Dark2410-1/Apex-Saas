import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  glow = false,
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base font-semibold gap-3",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700/60 hover:border-slate-500 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]",
    glass: "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {glow && variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-600 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      )}
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
};
