"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDesignSpecs: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenDesignSpecs, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'visualizer', label: 'Product' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'moodboard', label: 'Collection' },
    { id: 'calculator', label: 'Contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md text-atelier-charcoal py-4 border-b border-atelier-sand shadow-sm'
            : 'bg-transparent text-atelier-charcoal py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo (Matches FurniSphere styling) */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <img src="/logo.png" alt="Nuvora Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollTo(item.id)}
                      className={`font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative py-1 hover:text-atelier-sienna cursor-pointer ${
                        isActive 
                          ? 'text-atelier-sienna font-bold' 
                          : 'text-atelier-charcoal/70'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-atelier-sienna"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Inquiry/Inquire Button Matches FurniSphere UI */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenDesignSpecs}
                className="flex items-center space-x-1.5 px-4 py-2 text-[10px] tracking-widest uppercase border border-atelier-charcoal/20 hover:border-atelier-sienna text-atelier-charcoal/80 hover:text-atelier-sienna transition-all duration-300 cursor-pointer font-bold"
              >
                <FileText size={12} />
                <span>Rancangan MD</span>
              </button>

              <button
                onClick={() => handleScrollTo('calculator')}
                className="px-6 py-2 border border-atelier-sienna text-atelier-sienna text-[10px] uppercase tracking-widest hover:bg-atelier-sienna hover:text-white transition-all duration-300 font-bold cursor-pointer"
              >
                Inquiry
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenDesignSpecs}
              className="p-2 border border-atelier-charcoal/10 text-atelier-charcoal transition-all duration-300"
              title="Lihat Rancangan Desain MD"
            >
              <FileText size={16} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 cursor-pointer focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} className="text-atelier-charcoal" /> : <Menu size={24} className="text-atelier-charcoal" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-center px-10"
          >
            <ul className="space-y-6 text-center">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="font-sans font-bold text-2xl tracking-wider text-atelier-charcoal hover:text-atelier-sienna transition-all duration-300 uppercase block w-full text-center"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col items-center space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDesignSpecs();
                }}
                className="flex items-center justify-center space-x-2 w-full max-w-[280px] py-3 border border-atelier-charcoal/20 text-atelier-charcoal tracking-widest uppercase text-xs hover:border-atelier-sienna transition-all duration-300 font-bold"
              >
                <FileText size={14} />
                <span>Rancangan Desain MD</span>
              </button>

              <button
                onClick={() => handleScrollTo('calculator')}
                className="w-full max-w-[280px] py-3 bg-atelier-sienna text-white tracking-widest uppercase text-xs hover:bg-atelier-sienna-light transition-all duration-300 flex items-center justify-center space-x-2 font-bold"
              >
                <span>Mulai Konsultasi</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
