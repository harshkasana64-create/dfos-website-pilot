import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glow';
}

export default function Card({ children, variant = 'default', className, ...props }: CardProps) {
  const baseStyle = "p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between";
  
  const variants = {
    default: "border-neutral-900 bg-[#0f1012] hover:border-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)]",
    glow: "border-neutral-900 bg-[#0f1012] hover:border-cyan-500/30 hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(6,182,212,0.08)]"
  };

  return (
    <div className={cn(baseStyle, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
