"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ParallaxHero from '../components/ParallaxHero';
import AboutSection from '../components/AboutSection';
import SpaceVisualizer from '../components/SpaceVisualizer';
import PortfolioGrid from '../components/PortfolioGrid';
import MoodBoard from '../components/MoodBoard';
import BudgetCalculator from '../components/BudgetCalculator';
import DesignSpecsModal from '../components/DesignSpecsModal';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDesignSpecsOpen, setIsDesignSpecsOpen] = useState(false);

  useEffect(() => {
    const sections = ['about', 'visualizer', 'portfolio', 'moodboard', 'calculator'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navbar 
        onOpenDesignSpecs={() => setIsDesignSpecsOpen(true)} 
        activeSection={activeSection} 
      />
      <ParallaxHero />
      <AboutSection />
      <SpaceVisualizer />
      <PortfolioGrid />
      <MoodBoard />
      <BudgetCalculator />
      <Footer />
      <DesignSpecsModal 
        isOpen={isDesignSpecsOpen} 
        onClose={() => setIsDesignSpecsOpen(false)} 
      />
    </main>
  );
}
