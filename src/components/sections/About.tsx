import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-32 px-6 md:px-12 bg-cream text-charcoal rounded-[3rem] -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="about-text font-serif italic text-5xl md:text-7xl leading-[1.1]">
              Bons negócios ficam invisíveis todos os dias.
            </h2>
            <p className="about-text font-sans text-lg md:text-xl leading-relaxed opacity-80 max-w-lg">
              Empresas que faturam bem costumam ter o mesmo gargalo: dependem de clientes antigos e indicações para crescer, sem previsibilidade e sem escala. <strong className="font-semibold text-charcoal">Com a gente, isso muda.</strong>
            </p>
            <div className="about-text mt-8 flex flex-col gap-4 max-w-lg">
              <div className="flex justify-between border-b border-charcoal/20 pb-4">
                <span className="font-sans font-bold tracking-widest uppercase text-sm">Lucas</span>
                <span className="font-mono text-xs opacity-60 uppercase">Estratégia & Growth</span>
              </div>
              <div className="flex justify-between border-b border-charcoal/20 pb-4">
                <span className="font-sans font-bold tracking-widest uppercase text-sm">Bruna</span>
                <span className="font-mono text-xs opacity-60 uppercase">Criação & Conteúdo</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-8">
            <p className="about-text font-sans text-base md:text-lg leading-relaxed opacity-80">
              Somos uma dupla especializada em transformar marketing em motor de crescimento real. Nossa missão é simples: fazer o seu negócio ser encontrado, lembrado e escolhido. Estratégia, criatividade e dados.
            </p>
            <p className="about-text font-sans text-base md:text-lg leading-relaxed opacity-80">
              Já geramos mais de R$ 100k em um único lançamento, crescemos perfis do zero a 10k seguidores em 60 dias e dobramos a audiência de influenciadores do mercado financeiro.
            </p>
            
            <div className="about-text grid grid-cols-2 gap-x-8 gap-y-8 mt-8 p-10 bg-charcoal text-cream rounded-[2rem] shadow-2xl">
              <div className="flex flex-col gap-2">
                <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Especialidade</span>
                <span className="font-serif italic text-xl md:text-2xl text-moss">Marketing Digital</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Foco</span>
                <span className="font-serif italic text-xl md:text-2xl text-moss">Crescimento Orgânico</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Abordagem</span>
                <span className="font-serif italic text-xl md:text-2xl text-moss">Estratégia + Dados</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-xs uppercase tracking-widest text-cream/50">Atendimento</span>
                <span className="font-serif italic text-xl md:text-2xl text-moss">Exclusivo & Seletivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
