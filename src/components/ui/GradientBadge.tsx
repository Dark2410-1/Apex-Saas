import React from 'react';

interface GradientBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'violet' | 'cyan' | 'emerald' | 'amber';
  pulse?: boolean;
}

export const GradientBadge: React.FC<GradientBadgeProps> = ({
  children,
  icon,
  variant = 'violet',
  pulse = true,
}) => {
  const variantStyles = {
    violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20 shadow-violet-500/10',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 shadow-cyan-500/10',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 shadow-emerald-500/10',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20 shadow-amber-500/10',
  };

  const dotStyles = {
    violet: 'bg-violet-400',
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${variantStyles[variant]}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotStyles[variant]}`} />
          <span className={`relative inline-flex h-2 w-2 rounded-full ${dotStyles[variant]}`} />
        </span>
      )}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
