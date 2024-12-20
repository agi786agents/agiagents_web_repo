import React from 'react';
import { LucideIcon } from 'lucide-react';
import { SlideIn } from '../animations/SlideIn';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <SlideIn
      direction={index % 2 === 0 ? 'left' : 'right'}
      className="group relative isolate overflow-hidden rounded-xl border border-primary-accent border-opacity-20 bg-black/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-opacity-100 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
      delay={index * 100}
    >
      <div className="relative z-10">
        <Icon className="mx-auto mb-4 md:mb-6 h-10 w-10 md:h-12 md:w-12 text-primary-accent" />
        <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold text-white text-center">
          {title}
        </h3>
        <p className="text-sm md:text-base text-text-light text-center">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </SlideIn>
  );
}