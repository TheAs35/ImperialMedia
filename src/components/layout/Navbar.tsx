import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-500">
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-7xl rounded-full px-6 py-3 transition-all duration-500 backdrop-blur-md",
          scrolled 
            ? "bg-cream/80 text-moss border border-moss/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            : "bg-transparent text-cream border border-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          {/* Logo Mark */}
          <div className="w-8 h-8 rounded-full bg-current flex items-center justify-center">
            <span className={cn("font-serif font-bold text-lg", scrolled ? "text-cream" : "text-charcoal")}>
              IM
            </span>
          </div>
          <span className="font-sans font-bold tracking-tight text-lg leading-none hidden md:block">
            IMPERIAL MEDIA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-sans text-xs tracking-widest uppercase font-semibold">
          <a href="#sobre" className="hover:opacity-70 transition-opacity">Sobre Nós</a>
          <a href="#metodo" className="hover:opacity-70 transition-opacity">Método</a>
          <a href="#cases" className="hover:opacity-70 transition-opacity">Cases</a>
          <a href="#depoimentos" className="hover:opacity-70 transition-opacity">Depoimentos</a>
          <a href="#servicos" className="hover:opacity-70 transition-opacity">Serviços</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://api.whatsapp.com/send/?phone=5511940542386&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <Button variant={scrolled ? "primary" : "outline"} size="sm">
              Diagnóstico Gratuito
            </Button>
          </a>
          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-charcoal/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center p-6",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8 font-serif italic text-4xl text-cream">
          <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-moss-light transition-colors">Sobre Nós</a>
          <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="hover:text-moss-light transition-colors">Método</a>
          <a href="#cases" onClick={() => setIsMenuOpen(false)} className="hover:text-moss-light transition-colors">Cases</a>
          <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="hover:text-moss-light transition-colors">Depoimentos</a>
          <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="hover:text-moss-light transition-colors">Serviços</a>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-6">
          <a href="https://api.whatsapp.com/send/?phone=5511940542386&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <Button variant="primary" size="lg">
              Diagnóstico Gratuito
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
