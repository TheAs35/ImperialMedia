import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Luis Showtana',
    company: 'Sheep Esports',
    text: '"Contratei os serviços há três meses e não tenho o que reclamar! Entregas de qualidade, estratégias que vem dando certo e um resultado expressivo em menos e seis meses juntos."',
    image: '/testimonials/luisshowtana.jpg'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-charcoal text-cream relative w-full py-24">
      <div className="px-6 md:px-12 text-center max-w-4xl mx-auto mb-16">
        <h2 className="font-serif italic text-5xl md:text-7xl mb-6">O que falam sobre a gente?</h2>
        <p className="font-sans text-lg text-cream/60">
          A experiência de quem confia na nossa metodologia para gerar resultados explosivos.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-cream/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-moss/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden border border-white/5 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 to-transparent"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left relative z-10">
              <div className="text-6xl text-moss/20 font-serif absolute -top-8 -left-4 md:-left-8 pointer-events-none">"</div>
              <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-cream/90 mb-8 leading-relaxed relative z-10">
                {testimonial.text}
              </p>
              <div className="flex flex-col md:block items-center">
                <hr className="w-12 border-moss/30 mb-4 md:ml-0" />
                <h4 className="font-sans font-bold text-xl md:text-2xl text-moss-light tracking-wide mb-1">{testimonial.name}</h4>
                <span className="font-mono text-xs text-cream/50 uppercase tracking-widest">{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
