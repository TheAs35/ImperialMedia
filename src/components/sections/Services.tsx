import React from 'react';
import { Button } from '../ui/Button';

const services = [
  "Planejamento e Consultoria de Crescimento",
  "Branding Essencial",
  "Web Design",
  "Engajamento e Crescimento Orgânico",
  "Campanhas de Performance (Tráfego)",
  "Vídeos e Reels de Alto Impacto",
  "Processos Inteligentes para Escalar",
  "Dashboards Avançados e Automações",
  "Cobertura Profissional com Audiovisual"
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 px-6 md:px-12 bg-charcoal text-cream relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <div className="mb-12 flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-2">Operações e Estrutura</span>
          <h2 className="font-serif italic text-5xl md:text-7xl mb-6 max-w-3xl">
            Tudo sob o mesmo teto.
          </h2>
          <p className="font-sans text-lg md:text-xl text-cream/60 max-w-2xl">
            Sua empresa não precisa de 5 agências diferentes. Nós integramos estratégia, criatividade e tecnologia em um único ecossistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-32 group">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="p-8 border border-cream/10 rounded-2xl bg-[#141414] hover:bg-moss/10 hover:border-moss/30 transition-all duration-300 flex items-center justify-center text-center min-h-[160px]"
            >
              <span className="font-sans font-bold text-lg md:text-xl">{service}</span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-4xl bg-cream text-charcoal rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          
          <h2 className="font-serif italic text-5xl md:text-7xl mb-8 relative z-10 text-charcoal">
            Evolua a sua Audiência.
          </h2>
          <p className="font-sans text-xl opacity-80 mb-12 max-w-xl relative z-10">
            Agende uma Reunião de Diagnóstico gratuita. Em 45 minutos, analisamos seu negócio e revelamos o tracionamento ignorado.
          </p>
          
          <a href="https://api.whatsapp.com/send/?phone=5511940542386&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="relative z-10">
            <Button size="lg" variant="primary" className="text-sm md:text-base">
              Chamar no WhatsApp (Vagas Limitadas)
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};
