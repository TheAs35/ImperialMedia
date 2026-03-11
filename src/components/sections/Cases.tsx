import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    id: 1,
    title: 'Costelaria Tokunfome',
    metric: 'Picos de Faturamento',
    desc: 'Gestão completa de redes sociais com identidade visual forte, parcerias estratégicas com influenciadores e campanhas sazonais. Resultado: Picos consistentes de vendas alavancados pelo digital.',
    artifact: 'PointGrid'
  },
  {
    id: 2,
    title: 'Sheep Esports',
    metric: 'Zero a Elite em 60 Dias',
    desc: 'Identificamos os formatos de conteúdo que mais geram tração no nicho e aplicamos cadência de postagem focada em retenção e viralização real. Resultado: Autoridade absoluta construída do absoluto zero com mais de 12 mil seguidores em 60 dias.',
    artifact: 'DoubleHelix'
  },
  {
    id: 3,
    title: 'Capital Trend Group',
    metric: 'Crescimento Sustentável',
    desc: '+60 mil seguidores para João Homem e +100 mil para Eduardo Garufi. Estruturamos a construção de audiência, posicionamento estratégico e expansão digital de ambos os perfis. Atuamos na criação de conteúdo, crescimento orgânico e gestão de tráfego pago com foco em aquisição qualificada, autoridade no mercado e escalabilidade consistente.',
    artifact: 'LaserGrid'
  },
  {
    id: 4,
    title: 'Prova de Conceito',
    metric: 'Perfil do Gato',
    desc: 'Sem verba. Sem produto. Criamos um perfil do zero provando que o resultado vem sempre do método, não do cliente. Um estudo de caso clínico. Resultado: +75k seguidores organicamente escalados.',
    artifact: 'EKGWave'
  }
];

const DoubleHelix = () => (
  <div className="w-full h-full flex items-center justify-center opacity-30">
    <div className="relative w-32 h-64 flex flex-col justify-between">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-full h-px bg-cream/30 relative">
          <div className="absolute left-0 top-1/2 -mt-1 w-2 h-2 rounded-full bg-moss animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }}></div>
          <div className="absolute right-0 top-1/2 -mt-1 w-2 h-2 rounded-full bg-clay animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${(7-i) * 0.2}s` }}></div>
        </div>
      ))}
    </div>
  </div>
);

const PointGrid = () => (
  <div className="w-full h-full flex items-center justify-center opacity-30 perspective-[500px]">
    <div className="grid grid-cols-6 grid-rows-6 gap-4 animate-[spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg)' }}>
      {[...Array(36)].map((_, i) => (
        <div key={i} className="w-2 h-2 rounded-full bg-clay opacity-50 transition-all duration-500 hover:scale-150 hover:bg-cream hover:opacity-100" />
      ))}
    </div>
  </div>
);

const LaserGrid = () => (
  <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2 p-8 opacity-30">
    {[...Array(16)].map((_, i) => (
      <div key={i} className="w-full h-full border border-cream/20 rounded-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-moss/20 scale-y-0 origin-bottom transition-transform duration-1000 group-hover:scale-y-100" style={{ transitionDelay: `${(i%4)*0.1}s` }}></div>
      </div>
    ))}
    <div className="absolute top-0 left-0 w-full h-px bg-moss shadow-[0_0_8px_rgba(46,64,54,0.8)] animate-[scan_3s_linear_infinite]" style={{ animationName: 'scan' }} />
    <style>{`@keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }`}</style>
  </div>
);

const EKGWave = () => (
  <div className="w-full h-full flex items-center justify-center opacity-40">
    <svg width="100%" height="100" viewBox="0 0 500 100" preserveAspectRatio="none">
      <path 
        d="M0 50 L100 50 L120 20 L140 80 L160 50 L250 50 L270 10 L290 90 L310 50 L500 50" 
        fill="none" 
        stroke="#2E4036" 
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-[dash_2s_linear_infinite]"
        strokeDasharray="500"
        strokeDashoffset="500"
      />
    </svg>
    <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
  </div>
);

export const Cases: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        if (index > 0) {
          gsap.to(cardsRef.current[index - 1], {
            scale: 0.9,
            filter: 'blur(20px)',
            opacity: 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cases" className="bg-charcoal text-cream relative w-full" ref={containerRef}>
      <div className="pt-32 pb-12 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-serif italic text-5xl md:text-7xl mb-6">Resultados Clínicos</h2>
        <p className="font-sans text-lg text-cream/60">
          Resultados reais de clientes reais. Cada case é a prova de que estratégia mais execução igual a um crescimento previsível e incontestável.
        </p>
      </div>

      <div className="relative w-full pb-32">
        {cases.map((c, index) => (
          <div 
            key={c.id} 
            ref={el => { cardsRef.current[index] = el; }}
            className="w-full min-h-screen flex items-center justify-center p-4 md:p-12 sticky top-0"
            style={{ zIndex: index }}
          >
            <div className="w-full max-w-7xl min-h-[80vh] bg-[#141414] rounded-[2rem] md:rounded-[3rem] border border-cream/10 p-6 md:p-16 flex flex-col md:flex-row shadow-2xl overflow-hidden relative group">
              
              <div className="flex-1 flex flex-col justify-center z-10 py-8 md:py-0">
                <span className="font-mono text-xs uppercase tracking-widest text-cream/40 mb-4 block">Case {index + 1} / 4</span>
                <h3 className="font-sans font-bold text-4xl md:text-6xl mb-4 pr-12">{c.title}</h3>
                <span className="font-serif italic text-3xl md:text-5xl text-clay mb-8 block">{c.metric}</span>
                <p className="font-sans text-lg text-cream/70 max-w-lg leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="flex-1 relative hidden md:block border-l border-cream/5 pl-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/50 to-transparent z-10" />
                {c.artifact === 'PointGrid' && <PointGrid />}
                {c.artifact === 'DoubleHelix' && <DoubleHelix />}
                {c.artifact === 'LaserGrid' && <LaserGrid />}
                {c.artifact === 'EKGWave' && <EKGWave />}
                
                <div className="absolute bottom-0 right-0 p-8 z-20">
                  <div className="flex items-center gap-3 font-mono text-xs text-moss-light">
                    <span className="w-2 h-2 rounded-full bg-moss-light animate-pulse"></span>
                    TELEMETRIA ON
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
