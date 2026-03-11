import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
  const [items, setItems] = useState([
    { id: 1, label: 'Diagnóstico', detail: 'Análise de Mercado' },
    { id: 2, label: 'Auditoria de Concorrência', detail: 'Mapeamento' },
    { id: 3, label: 'Definição de Objetivos', detail: 'Metas Claras' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(current => {
        const newItems = [...current];
        const last = newItems.pop()!;
        newItems.unshift(last);
        return newItems;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full flex items-center justify-center perspective-[1000px]">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="absolute w-full p-5 rounded-xl bg-[#1A1A1A] text-cream border border-cream/10 shadow-lg transition-all duration-700 mx-auto"
          style={{
            transform: `translateY(${index * 15}px) scale(${1 - index * 0.05}) translateZ(${-index * 50}px)`,
            zIndex: 10 - index,
            opacity: 1 - index * 0.2,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <div className="font-mono text-[10px] text-cream/40 uppercase mb-2">System.Audit_{item.id}</div>
          <div className="font-sans font-bold text-lg">{item.label}</div>
          <div className="font-serif italic text-moss text-sm mt-1">{item.detail}</div>
        </div>
      ))}
    </div>
  );
};

const TypewriterCard = () => {
  const [text, setText] = useState('');
  const messages = ["Processando Estratégia...", "Mapeando Canais de Tração...", "Otimizando Formatos..."];
  
  useEffect(() => {
    let currentMessageIdx = 0;
    let currentCharIdx = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentMessage = messages[currentMessageIdx];
      
      if (isDeleting) {
        setText(currentMessage.substring(0, currentCharIdx - 1));
        currentCharIdx--;
      } else {
        setText(currentMessage.substring(0, currentCharIdx + 1));
        currentCharIdx++;
      }

      let speed = isDeleting ? 30 : 70;

      if (!isDeleting && currentCharIdx === currentMessage.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentCharIdx === 0) {
        isDeleting = false;
        currentMessageIdx = (currentMessageIdx + 1) % messages.length;
        speed = 500;
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-48 bg-[#0a0a0a] rounded-xl p-6 flex flex-col justify-between border border-cream/5 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-clay"></span>
        </span>
        <span className="font-mono text-[10px] text-clay uppercase tracking-widest">Neural Stream</span>
      </div>
      <div className="font-mono text-xs text-moss mt-auto break-words">
        <span className="text-gray-600 mr-2">{'>'}</span>
        {text}
        <span className="animate-pulse bg-moss w-1.5 h-3.5 inline-block ml-1 align-middle"></span>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.to(cursorRef.current, { x: 45, y: 30, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(cursorRef.current, { x: 120, y: 70, duration: 1, ease: "power2.inOut", delay: 0.5 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(cursorRef.current, { x: 0, y: 0, duration: 1, ease: "power2.inOut", delay: 0.5 })
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-48 bg-cream/5 rounded-xl p-5 border border-cream/10 relative">
      <div className="grid grid-cols-7 gap-1 h-2/3 mb-4">
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
          <div key={i} className="flex flex-col items-center justify-between h-full">
            <span className="font-mono text-[10px] text-cream/40">{d}</span>
            <div className="w-full h-full bg-cream/5 rounded flex flex-col gap-1 p-0.5">
              {i % 2 === 0 && <div className="w-full h-1.5 bg-moss/30 rounded-sm"></div>}
              {i === 2 && <div className="w-full h-1.5 bg-moss rounded-sm"></div>}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-2 left-2 z-10 opacity-80" ref={cursorRef}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.76 6.71 21.26L11.43 15.92L15.43 23.36C15.63 23.73 16.09 23.87 16.46 23.67L18.66 22.48C19.03 22.28 19.17 21.82 18.97 21.45L15 14H20.5C21.13 14 21.46 13.25 21 12.82L6.5 3.12C5.97 2.76 5.5 3.1 5.5 3.3Z" fill="white" stroke="black" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="flex justify-between items-center bg-moss/10 px-3 py-2 rounded-md border border-moss/20">
        <span className="font-mono text-[10px] uppercase tracking-wider text-moss">Deploy Automático</span>
      </div>
    </div>
  );
};

export const Methodology: React.FC = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 px-6 md:px-12 bg-charcoal text-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-6 block">O Motor de Crescimento</span>
          <h2 className="font-serif italic text-5xl md:text-7xl leading-tight text-moss">
            A Natureza é o Algoritmo.
          </h2>
          <p className="font-sans text-xl opacity-80 mt-6 max-w-xl">
            Métodos ultrapassados perguntam "O que está errado?". Nós perguntamos <strong>"O que é ótimo?"</strong>. O nosso sistema é uma mecânica biológica construída para escalar audiência e faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col p-8 bg-charcoal border border-cream/10 rounded-[2rem] hover:border-moss/40 transition-colors group">
            <h3 className="font-sans font-bold text-xl md:text-2xl mb-2">1. Diagnóstico Inteligente</h3>
            <p className="font-sans text-sm text-cream/60 mb-8 leading-relaxed">
              Entendemos profundamente o seu negócio, mercado e concorrência. Nada de receita pronta.
            </p>
            <div className="mt-auto relative w-full pt-8 border-t border-cream/5">
              <div className="absolute inset-0 bg-moss/5 rounded-xl blur-xl transition-all group-hover:bg-moss/10" />
              <ShufflerCard />
            </div>
          </div>

          <div className="flex flex-col p-8 bg-charcoal border border-cream/10 rounded-[2rem] hover:border-moss/40 transition-colors group">
            <h3 className="font-sans font-bold text-xl md:text-2xl mb-2">2. Estratégia Neural</h3>
            <p className="font-sans text-sm text-cream/60 mb-8 leading-relaxed">
              Montamos um plano imersível e algorítmico: canais certos, formatos precisos e gatilhos magnéticos.
            </p>
            <div className="mt-auto relative w-full pt-8 border-t border-cream/5">
              <div className="absolute inset-0 bg-moss/5 rounded-xl blur-xl transition-all group-hover:bg-moss/10" />
              <TypewriterCard />
            </div>
          </div>

          <div className="flex flex-col p-8 bg-charcoal border border-cream/10 rounded-[2rem] hover:border-moss/40 transition-colors group">
            <h3 className="font-sans font-bold text-xl md:text-2xl mb-2">3. Execução & Análise</h3>
            <p className="font-sans text-sm text-cream/60 mb-8 leading-relaxed">
              Direção de arte premium com cadência matemática. Ajustes de rota guiados pela telemetria.
            </p>
            <div className="mt-auto relative w-full pt-8 border-t border-cream/5">
              <div className="absolute inset-0 bg-moss/5 rounded-xl blur-xl transition-all group-hover:bg-moss/10" />
              <SchedulerCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
