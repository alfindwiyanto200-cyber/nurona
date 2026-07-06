"use client";

import { MapPin, Phone, Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-atelier-charcoal text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative radial background light */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-atelier-sienna/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand/Logo Block (Col span 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Nuvora Logo" className="h-10 w-auto" />
            </div>
            
            <p className="font-sans text-xs text-white/50 leading-relaxed font-light max-w-sm mb-6">
              Atelier merancang ruang huni kustom yang memadukan filosofi minimalisme fungsional dengan material berkualitas tinggi untuk melahirkan estetika abadi.
            </p>

            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 border border-white/10 hover:border-atelier-sienna hover:text-atelier-sienna transition-colors text-white/60">
                <Instagram size={14} />
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-atelier-sienna hover:text-atelier-sienna transition-colors text-white/60">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Col span 2) */}
          <div className="lg:col-span-2">
            <span className="text-[9px] font-semibold tracking-widest text-atelier-sienna uppercase block mb-5">
              Menu Navigasi
            </span>
            <ul className="space-y-3 text-xs font-light text-white/60">
              {['Tentang', 'Visualizer', 'Portofolio', 'Moodboard', 'Kalkulator'].map((link, idx) => {
                const ids = ['about', 'visualizer', 'portfolio', 'moodboard', 'calculator'];
                return (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(ids[idx]);
                        if (el) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = el.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                      }}
                      className="hover:text-atelier-sienna transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Office Address Column (Col span 3) */}
          <div className="lg:col-span-3">
            <span className="text-[9px] font-semibold tracking-widest text-atelier-sienna uppercase block mb-5">
              Lokasi Studio
            </span>
            <ul className="space-y-4 text-xs font-light text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={14} className="text-atelier-sienna flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Gedung Linea Arsitek, Lantai 4,<br />
                  Jl. Senopati No. 82, Kebayoran Baru,<br />
                  Jakarta Selatan, 12190
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (Col span 3) */}
          <div className="lg:col-span-3">
            <span className="text-[9px] font-semibold tracking-widest text-atelier-sienna uppercase block mb-5">
              Hubungi Kami
            </span>
            <ul className="space-y-3 text-xs font-light text-white/60">
              <li className="flex items-center space-x-3">
                <Phone size={13} className="text-atelier-sienna flex-shrink-0" />
                <span>+62 21 5432 9870</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={13} className="text-atelier-sienna flex-shrink-0" />
                <span className="hover:text-atelier-sienna transition-colors cursor-pointer">consult@atelier.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-[10px] text-white/40 font-light">
          <div>
            <span>&copy; {new Date().getFullYear()} Atelier - Interior Design Studio. Hak Cipta Dilindungi Undang-Undang.</span>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">Syarat & Ketentuan</span>
            <span className="hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</span>
            
            <button
              onClick={handleScrollToTop}
              className="p-2 border border-white/10 hover:border-atelier-sienna hover:text-white text-white/40 transition-colors flex items-center justify-center cursor-pointer"
              title="Kembali ke atas"
            >
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
