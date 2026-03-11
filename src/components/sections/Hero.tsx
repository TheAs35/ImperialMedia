import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(title1Ref.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
      .fromTo(title2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.6"
      )
      .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-end pb-24 px-6 md:px-12 pt-32 overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=3000&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-moss/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start mt-auto">
        <h1 className="flex flex-col gap-2">
          <span 
            ref={title1Ref}
            className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream tracking-tight max-w-4xl"
          >
            Sua empresa fatura bem.
          </span>
          <span 
            ref={title2Ref}
            className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-moss-light mt-2"
          >
            Mas pode ir além.
          </span>
        </h1>

        <div ref={statsRef} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-cream/20 pt-8 w-full max-w-5xl">
          <div className="flex flex-col gap-1">
            <span className="font-serif italic text-3xl md:text-4xl text-moss-light">R$ 100k+</span>
            <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Faturamento em 1 lançamento</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif italic text-3xl md:text-4xl text-moss-light">7,2 mi</span>
            <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Visualizações em campanha</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif italic text-3xl md:text-4xl text-moss-light">9M+</span>
            <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Visualizações orgânicas</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif italic text-3xl md:text-4xl text-moss-light">75k</span>
            <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Seguidores sem tráfego pago</span>
          </div>
        </div>
      </div>
    </section>
  );
};
