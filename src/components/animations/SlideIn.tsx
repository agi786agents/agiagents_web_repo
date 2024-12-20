import React, { ReactNode, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 700,
  className
}: SlideInProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't apply animations on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldAnimate = isMounted && !isMobile;

  const initialPosition = direction === 'left' ? '-100%' : '100%';

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all ease-out will-change-transform',
        shouldAnimate ? 'opacity-0' : 'opacity-100',
        className
      )}
      style={{
        transform: shouldAnimate 
          ? `translateX(${isIntersecting ? '0' : initialPosition})`
          : 'none',
        opacity: shouldAnimate ? (isIntersecting ? 1 : 0) : 1,
        transitionDuration: shouldAnimate ? `${duration}ms` : '0ms',
        transitionDelay: shouldAnimate ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
}