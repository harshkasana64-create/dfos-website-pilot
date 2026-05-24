import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none px-5 py-2.5";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:opacity-95 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] focus-visible:outline-cyan-500",
    secondary: "bg-neutral-900 border border-neutral-800 text-white hover:border-neutral-700 focus-visible:outline-neutral-500",
    ghost: "text-neutral-400 hover:text-white hover:bg-neutral-900/40 focus-visible:outline-neutral-500"
  };

  return (
    <button
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
