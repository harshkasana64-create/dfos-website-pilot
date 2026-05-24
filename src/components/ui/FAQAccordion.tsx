'use client';

import React, { useState } from 'react';
import { cn } from '../../lib/utils';

interface FAQAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string;
  answer: string;
}

export default function FAQAccordion({ question, answer, className, ...props }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border-b border-neutral-900", className)} {...props}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full py-5 flex items-center justify-between text-left text-white hover:text-cyan-400 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 transition-colors duration-150"
      >
        <span className="font-heading text-base leading-snug">{question}</span>
        <span className={cn(
          "ml-4 flex-shrink-0 transition-transform duration-200 text-neutral-400 text-lg",
          isOpen ? "rotate-45 text-cyan-400" : ""
        )}>
          +
        </span>
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 max-h-0",
        isOpen ? "max-h-40 pb-5" : ""
      )}>
        <p className="text-sm text-neutral-400 leading-relaxed font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
}
