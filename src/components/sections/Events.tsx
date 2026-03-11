import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 'endurance',
    title: 'Endurance SP 2025',
    location: 'São Paulo, SP',
    desc: 'Cobertura completa do Endurance SP 2025. Estivemos no evento produzindo conteúdo em tempo real para maximizar o alcance e engajamento nas redes sociais.',
    images: [
      '/events/endurance/IMG_9565.jpg',
      '/events/endurance/IMG_9671.jpg',
      '/events/endurance/IMG_9828.jpg'
    ]
  },
  {
    id: 'xadrez',
    title: 'Torneio de Xadrez',
    location: 'Circuito 2025',
    desc: 'Cobertura completa do torneio com produção de conteúdo ao vivo. Registramos tudo no perfil do cliente e transmitimos a emoção da competição em tempo real nas redes sociais.',
    images: [
      // The user will need to drop their uploaded images into this folder
      '/events/xadrez/1.jpg',
      '/events/xadrez/2.jpg',
      '/events/xadrez/3.jpg'
    ]
  }
];

export const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, _index) => {
        if (!row) return;
        const images = row.querySelectorAll('.event-image');
        
        gsap.fromTo(images, 
          { 
            y: 100, 
            opacity: 0,
            scale: 0.9 
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="events" className="bg-cream text-charcoal py-16 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-32">
          <h2 className="font-sans font-bold text-5xl md:text-8xl tracking-tight mb-6">
            COBERTURA DE EVENTOS
          </h2>
          <p className="font-serif italic text-2xl md:text-4xl text-charcoal/60 max-w-2xl">
            Produção audiovisual premium em tempo real. Transformamos seu evento físico em uma escalada digital hiper-engajada.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {events.map((ev, index) => (
            <div 
              key={ev.id} 
              className="flex flex-col gap-8"
              ref={el => { rowsRef.current[index] = el; }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-charcoal/10 pb-6 gap-6">
                <div>
                  <h3 className="font-sans font-bold text-4xl md:text-5xl mb-2">{ev.title}</h3>
                  <span className="font-mono text-sm uppercase tracking-widest text-charcoal/50">{ev.location}</span>
                </div>
                <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-lg leading-relaxed">
                  {ev.desc}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ev.images.map((src, i) => (
                  <div key={i} className="event-image relative aspect-[4/5] bg-charcoal/5 overflow-hidden rounded-2xl group">
                    <img 
                      src={src} 
                      alt={`${ev.title} cobertura ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback UI if image is missing (e.g. user hasn't copied the xadrez images yet)
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-6 text-charcoal/40 bg-charcoal/5">
                      <span className="font-mono text-xs uppercase mb-2">Imagem Pendente</span>
                      <span className="font-sans text-sm">Adicione {src} na pasta public</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
