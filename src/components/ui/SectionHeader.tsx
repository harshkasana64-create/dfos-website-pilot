import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  heading: string;
  lead?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  heading,
  lead,
  align = 'left',
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        align === 'center' ? "text-center mx-auto" : "text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-xs font-bold text-cyan-500 tracking-widest uppercase font-mono">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
        {heading}
      </h2>
      {lead && (
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-sans">
          {lead}
        </p>
      )}
    </div>
  );
}
