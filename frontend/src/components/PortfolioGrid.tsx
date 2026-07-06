"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Map, Calendar, Users, Eye, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Project } from '../types';

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<'All' | 'Living Room' | 'Kitchen' | 'Workspace' | 'Bedroom'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: (Project & { badge: string; price: string; colors: string[] })[] = [
    {
      id: 'proj1',
      title: 'Avondale Wood Leg Sofa',
      category: 'Living Room',
      description: 'Sebuah eksplorasi mendalam tentang keseimbangan tekstur kayu Oak dengan dinding plaster semen mikro (microcement) yang artistik. Proyek ini memprioritaskan bukaan cahaya alami serta integrasi furnitur kustom berbidang rendah untuk menegaskan aura ruang yang tenang.',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600',
      client: 'Bpk. Gunawan Margono',
      year: '2024',
      area: '48 m²',
      tags: ['Japandi', 'Custom Cabinetry', 'Microcement'],
      badge: 'Best Sale',
      price: '$180.00',
      colors: ['#475467', '#D1D5DB', '#FE7F2D'],
    },
    {
      id: 'proj2',
      title: 'Zuma Outdoor Upholstered',
      category: 'Kitchen',
      description: 'Dapur modern mewah yang mengombinasikan marmer Nero Marquina bermotif tebal dengan lemari berlapisan kayu gelap matte. Semua peralatan dapur disembunyikan di balik panel kustom (integrated appliances) untuk mempertahankan keindahan monolitik ruangan.',
      imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600',
      client: 'Ibu Clarissa Wijaya',
      year: '2025',
      area: '26 m²',
      tags: ['Modern Luxury', 'Nero Marquina', 'Built-in Appliances'],
      badge: 'Top Rated',
      price: '$280.00',
      colors: ['#1D2939', '#EAECF0', '#E5C158'],
    },
    {
      id: 'proj3',
      title: 'Pershing Leather Curved Chair',
      category: 'Workspace',
      description: 'Transformasi area pergudangan tua menjadi ruang kerja komunal yang hangat dengan sentuhan industrial halus. Menggunakan partisi kaca berbingkai baja hitam untuk mempertahankan aliran pencahayaan silang (cross-ventilation) yang sehat.',
      imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600',
      client: 'Sinergi Creative Space',
      year: '2023',
      area: '85 m²',
      tags: ['Industrial Chic', 'Steel Partitions', 'Polished Concrete'],
      badge: 'Best Price',
      price: '$290.00',
      colors: ['#344054', '#FE7F2D', '#D1D5DB'],
    },
    {
      id: 'proj4',
      title: 'Powell Lounge Chair',
      category: 'Bedroom',
      description: 'Kamar tidur utama yang didesain bagaikan kepompong hangat yang menenangkan. Memanfaatkan tekstur kain bouclé berserat tebal, pencahayaan tidak langsung di balik panel dinding berlengkung lembut, serta lantai kayu Oak berpola tulang ikan.',
      imageUrl: 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&q=80&w=600',
      client: 'Dr. Amelia Kartika',
      year: '2024',
      area: '34 m²',
      tags: ['Warm Minimalism', 'Bouclé Fabric', 'Herringbone Floor'],
      badge: 'Top Rated',
      price: '$200.00',
      colors: ['#101828', '#EAECF0', '#FC8B3E'],
    },
    {
      id: 'proj5',
      title: 'Infiniti Swivel Chair',
      category: 'Living Room',
      description: 'Ruang tamu berplafon ganda dengan dinding kaca penuh yang menghadap ke arah taman dalam (courtyard). Fitur utama dari proyek ini adalah dinding marmer slab vertikal setinggi 6 meter yang menyembunyikan sistem kabel audio visual terintegrasi.',
      imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600',
      client: 'Bpk. Raymond Suteja',
      year: '2025',
      area: '72 m²',
      tags: ['High-Ceiling', 'Calacatta Marble', 'Glass Facade'],
      badge: 'Best Price',
      price: '$250.00',
      colors: ['#475467', '#0A0A0A', '#E5C158'],
    },
    {
      id: 'proj6',
      title: 'Cerca Striped Armchair',
      category: 'Kitchen',
      description: 'Dapur sarapan fungsional berukuran kompak dengan dominasi warna hijau sage matte yang dipadukan harmonis dengan kuarsit putih murni. Mengoptimalkan sistem penyimpanan geser vertikal untuk memanfaatkan setiap sentimeter luas ruang.',
      imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600',
      client: 'Ibu Melina Salim',
      year: '2024',
      area: '18 m²',
      tags: ['Sage Green', 'White Quartzite', 'Smart Storage'],
      badge: 'Best Sale',
      price: '$220.00',
      colors: ['#0A0A0A', '#EAECF0', '#FE7F2D'],
    },
  ];

  const categories: ('All' | 'Living Room' | 'Kitchen' | 'Workspace' | 'Bedroom')[] = [
    'All', 'Living Room', 'Kitchen', 'Workspace', 'Bedroom'
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header (Matches FurniSphere "Our New Collections") */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-5xl text-atelier-charcoal tracking-tight font-extrabold mb-4">
            Our New Collections
          </h2>
          <p className="font-sans text-sm text-atelier-charcoal-light leading-relaxed font-normal">
            These products are crafted using wood sourced from responsibly certified forests.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 border rounded-full font-bold cursor-pointer ${
                  isSelected
                    ? 'bg-atelier-sienna text-white border-atelier-sienna shadow-sm'
                    : 'bg-transparent text-atelier-charcoal/70 border-atelier-sand hover:border-atelier-sienna hover:text-atelier-sienna'
                }`}
              >
                {cat === 'All' ? 'Semua Proyek' : cat}
              </button>
            );
          })}
        </div>

        {/* Grid Display (Styled exactly like the product list in FurniSphere) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer bg-[#F8F9FA] hover:bg-[#F0F2F5] border border-atelier-sand rounded-3xl overflow-hidden flex flex-col justify-between p-5 transition-all duration-300 shadow-sm relative hover:shadow-md"
              >
                {/* Header of product card: Tag & Dot Colors */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] bg-[#EAECEF] text-atelier-charcoal px-3 py-1.5 rounded-full font-bold tracking-wider">
                    {p.badge}
                  </span>
                  
                  {/* Dot color indicators */}
                  <div className="flex items-center space-x-1.5">
                    {p.colors.map((c, i) => (
                      <span 
                        key={i} 
                        className="w-2.5 h-2.5 rounded-full border border-black/10"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                {/* Aspect-ratio image containing Zoom on Hover & Quick view button */}
                <div className="overflow-hidden aspect-[4/3] relative rounded-2xl bg-white mb-6 flex items-center justify-center p-4">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover action overlay */}
                  <div 
                    onClick={() => setSelectedProject(p)}
                    className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1px] rounded-2xl"
                  >
                    <div className="flex items-center space-x-2 bg-white text-atelier-charcoal px-4 py-2.5 text-[10px] tracking-widest uppercase font-bold rounded-full shadow-md hover:bg-atelier-sienna hover:text-white transition-colors">
                      <span>Quick View</span>
                      <Eye size={12} />
                    </div>
                  </div>
                </div>

                {/* Footer details: Name, price & Buy circular button */}
                <div className="flex items-end justify-between mt-auto">
                  <div className="space-y-1 pr-4">
                    <h3 className="font-sans text-sm text-atelier-charcoal group-hover:text-atelier-sienna transition-all duration-300 font-extrabold line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="font-sans text-xs text-atelier-charcoal/50 leading-none">
                      {p.category}
                    </p>
                    <p className="font-sans text-sm text-atelier-sienna font-extrabold pt-1">
                      {p.price}
                    </p>
                  </div>

                  {/* Circular Bag Button from the screenshot */}
                  <button 
                    onClick={() => setSelectedProject(p)}
                    className="w-10 h-10 rounded-full border border-atelier-sand hover:border-atelier-sienna bg-white hover:bg-atelier-sienna text-atelier-charcoal hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    <ShoppingBag size={15} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Detailed Showcase Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="bg-white border border-atelier-sand w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-15 shadow-2xl flex flex-col md:flex-row rounded-3xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-30 p-2.5 bg-atelier-charcoal hover:bg-atelier-sienna text-white rounded-full transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>

                {/* Left Side: Big Visual */}
                <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative bg-[#F8F9FA] p-8 flex items-center justify-center">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full max-h-[350px] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Side: Specifications Details */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Category Block */}
                    <div className="flex items-center space-x-2 text-atelier-sienna text-xs font-bold tracking-widest uppercase mb-4">
                      <span>FurniSphere Collection</span>
                      <span>•</span>
                      <span>{selectedProject.category}</span>
                    </div>

                    <h3 className="font-sans text-2xl sm:text-3xl text-atelier-charcoal tracking-tight font-extrabold mb-4">
                      {selectedProject.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-atelier-charcoal-light leading-relaxed font-normal mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-atelier-sand py-5 mb-6">
                      <div className="flex items-center space-x-3">
                        <Users size={16} className="text-atelier-sienna flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-atelier-charcoal-light uppercase tracking-widest block font-bold">Klien</span>
                          <span className="text-xs font-bold text-atelier-charcoal">{selectedProject.client}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Calendar size={16} className="text-atelier-sienna flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-atelier-charcoal-light uppercase tracking-widest block font-bold">Tahun Selesai</span>
                          <span className="text-xs font-bold text-atelier-charcoal">{selectedProject.year}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Map size={16} className="text-atelier-sienna flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-atelier-charcoal-light uppercase tracking-widest block font-bold">Luas Area</span>
                          <span className="text-xs font-bold text-atelier-charcoal">{selectedProject.area}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <ArrowUpRight size={16} className="text-atelier-sienna flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-atelier-charcoal-light uppercase tracking-widest block font-bold">Gaya Desain</span>
                          <span className="text-xs font-bold text-atelier-charcoal">{selectedProject.tags[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <span className="text-[9px] text-atelier-charcoal-light uppercase tracking-widest block mb-2 font-bold">Tag Produk</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map(t => (
                        <span key={t} className="text-[10px] bg-atelier-sand text-atelier-charcoal/80 px-2.5 py-1 uppercase tracking-wider font-bold rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        const calculatorEl = document.getElementById('calculator');
                        if (calculatorEl) {
                          calculatorEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full mt-6 py-3.5 bg-atelier-sienna hover:bg-atelier-sienna-light text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 text-center block cursor-pointer rounded-full"
                    >
                      Dapatkan Desain Serupa
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
