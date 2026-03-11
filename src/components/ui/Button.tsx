import React, { useRef } from 'react';
import { cn } from '../../utils/cn';
import gsap from 'gsap';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, magnetic = true, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
      if (!magnetic || !buttonRef.current) return;

      const button = buttonRef.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) * 0.3;
        const y = (e.clientY - top - height / 2) * 0.3;

        gsap.to(button, { x, y, duration: 0.3, ease: 'power2.out' });
      };

      const handleMouseLeave = () => {
        gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      };

      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [magnetic]);

    return (
      <button
        ref={(node) => {
          // @ts-ignore
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden font-sans font-semibold tracking-wide transition-all duration-300 rounded-full",
          {
            'bg-moss text-cream hover:bg-moss/90': variant === 'primary',
            'bg-clay text-cream hover:bg-clay/90': variant === 'secondary',
            'bg-transparent border border-cream/20 text-cream hover:bg-cream/10 ': variant === 'outline',
            'bg-transparent text-cream hover:text-moss': variant === 'ghost',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 font-sans tracking-widest uppercase text-xs">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
