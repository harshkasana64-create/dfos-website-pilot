import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'teal' | 'neutral';
}

export default function Badge({ children, variant = 'teal', className, ...props }: BadgeProps) {
  const baseStyle = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide w-fit";
  
  const variants = {
    teal: "border border-teal-500/20 bg-teal-500/5 text-teal-400",
    neutral: "border border-neutral-800 bg-[#0f1012] text-neutral-400"
  };

  return (
    <span className={cn(baseStyle, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
