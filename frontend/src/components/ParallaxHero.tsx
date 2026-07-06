"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Map scroll progress to distinct translation speeds
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.6]);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-atelier-charcoal flex items-center justify-center pt-20"
    >
      {/* Background Parallax Layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[115%] -top-[10%]"
      >
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Minimalist Living Space"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Dynamic Overlay Layer - soft dark screen */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black/45 z-10"
      />

      {/* Text Content Layer (Centered matching FurniSphere banner) */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full h-full z-20 flex flex-col justify-center items-center text-center">
        
        {/* Hero Title Container */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center justify-center"
        >
          <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-[1.15] font-extrabold mb-6 max-w-3xl drop-shadow-md">
            Find The Perfect Furniture To <br />
            <span className="text-white">Complete Your Home</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed font-normal mb-10 drop-shadow-sm">
            We specialize in buying and selling high-quality, marketable furniture, each piece reflecting our unique aesthetic.
          </p>

          <div className="flex flex-col items-center gap-12">
            {/* Shop Now button - Styled exactly like the screenshot (rounded pill, clean background) */}
            <button
              onClick={handleScrollToNext}
              className="bg-white hover:bg-atelier-sienna hover:text-white text-atelier-charcoal px-10 py-4 text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              Shop Now
            </button>

            {/* Circle Arrow Down (FurniSphere indicator) */}
            <button
              onClick={handleScrollToNext}
              className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:border-atelier-sienna hover:bg-white/10 transition-all duration-300 cursor-pointer group mt-4"
            >
              <ArrowDown size={18} className="text-white group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
