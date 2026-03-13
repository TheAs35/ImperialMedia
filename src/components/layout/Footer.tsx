import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream rounded-t-[4rem] mt-8 pt-16 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-cream/10 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        <div className="max-w-md">
          <h2 className="font-sans text-4xl mb-6 font-bold tracking-tight">
            Nós não apenas entregamos marketing. <br/>
            <span className="font-serif italic font-normal text-moss-light">Nós moldamos mercados.</span>
          </h2>
          <div className="flex items-center gap-3 text-sm font-mono text-cream/60">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            System Operational
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 font-sans text-sm tracking-widest uppercase">
          <div className="flex flex-col gap-4">
            <h3 className="text-cream/40 mb-2">Explore</h3>
            <a href="#sobre" className="hover:text-moss-light transition-colors">Sobre Nós</a>
            <a href="#metodo" className="hover:text-moss-light transition-colors">Método</a>
            <a href="#cases" className="hover:text-moss-light transition-colors">Cases</a>
            <a href="#servicos" className="hover:text-moss-light transition-colors">Serviços</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-cream/40 mb-2">Contato</h3>
            <a href="https://api.whatsapp.com/send/?phone=5511940542386&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-moss-light transition-colors">
              WhatsApp
            </a>
            <a href="https://instagram.com/imperialmedia" target="_blank" rel="noopener noreferrer" className="hover:text-moss-light transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between text-xs text-cream/40 font-sans tracking-widest uppercase gap-4">
        <span>© {new Date().getFullYear()} Imperial Media</span>
        <span>Premium Growth Agency</span>
      </div>
    </footer>
  );
};
