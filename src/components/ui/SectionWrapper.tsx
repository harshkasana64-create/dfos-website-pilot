import React from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bg?: 'primary' | 'secondary' | 'neutral';
}

export default function SectionWrapper({
  children,
  bg = 'primary',
  className,
  ...props
}: SectionWrapperProps) {
  const baseStyle = "py-16 sm:py-20 lg:py-24 relative overflow-hidden";
  
  const backgrounds = {
    primary: "bg-[#070708]",
    secondary: "bg-[#0f1012]/40",
    neutral: "bg-[#050506]"
  };

  return (
    <section className={cn(baseStyle, backgrounds[bg], className)} {...props}>
      {children}
    </section>
  );
}
