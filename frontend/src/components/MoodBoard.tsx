"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trash2, Plus, CheckCircle, Sliders } from 'lucide-react';
import { MaterialItem } from '../types';

export default function MoodBoard() {
  const materials: MaterialItem[] = [
    {
      id: 'mat1',
      name: 'Carrara Marble',
      category: 'stone',
      description: 'Batu alam murni asal Italia dengan urat abu-abu lembut di atas latar putih bersih. Melambangkan kemewahan klasik.',
      imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=300',
      colorHex: '#EAEAE9',
    },
    {
      id: 'mat2',
      name: 'French Oak',
      category: 'wood',
      description: 'Kayu ek Prancis berkualitas tinggi dengan serat lurus rapat berwarna pirang hangat. Memberikan fondasi ruang organik.',
      imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=300',
      colorHex: '#D7C49E',
    },
    {
      id: 'mat3',
      name: 'Brushed Brass',
      category: 'metal',
      description: 'Kuningan yang disikat halus dengan kilau satin redup. Sempurna untuk aksen handle, fitting lampu, dan lis furnitur.',
      imageUrl: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=300',
      colorHex: '#D4AF37',
    },
    {
      id: 'mat4',
      name: 'Bouclé Ivory',
      category: 'fabric',
      description: 'Kain wol berserat tebal berpola keriting mikro. Memberikan tekstur super taktil yang cozy saat diaplikasikan pada sofa.',
      imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=300',
      colorHex: '#F6F2EB',
    },
    {
      id: 'mat5',
      name: 'Obsidian Slate',
      category: 'stone',
      description: 'Batu sabak hitam bertekstur belah kasar dengan ketahanan tinggi. Sempurna untuk dinding aksen dramatis berkarakter.',
      imageUrl: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=300',
      colorHex: '#252526',
    },
    {
      id: 'mat6',
      name: 'Fluted Walnut',
      category: 'wood',
      description: 'Kayu walnut gelap berpanel gelombang (fluted panel). Menghasilkan kedalaman bayangan yang dramatis pada dinding.',
      imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=300',
      colorHex: '#645344',
    },
    {
      id: 'mat7',
      name: 'Rose Copper',
      category: 'metal',
      description: 'Tembaga murni dengan rona merah muda berpasir halus. Melahirkan sentuhan industrial kontemporer yang artistik.',
      imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=300',
      colorHex: '#C39B8B',
    },
    {
      id: 'mat8',
      name: 'Emerald Velvet',
      category: 'fabric',
      description: 'Kain beludru premium berwarna hijau zamrud pekat yang memantulkan cahaya secara elegan. Memberikan aksen warna agung.',
      imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=300',
      colorHex: '#0F3C2E',
    },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(['mat1', 'mat2', 'mat3', 'mat4']);

  const handleToggleMaterial = (id: string) => {
    if (selectedIds.includes(id)) {
      // Keep at least one material selected
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(mid => mid !== id));
      }
    } else {
      if (selectedIds.length < 5) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const handleClearAll = () => {
    setSelectedIds(['mat1']);
  };

  const activeMaterials = materials.filter(m => selectedIds.includes(m.id));

  // Determine aesthetic diagnosis based on active items
  const getAestheticAnalysis = () => {
    const hasWood = activeMaterials.some(m => m.category === 'wood');
    const hasStone = activeMaterials.some(m => m.category === 'stone');
    const hasMetal = activeMaterials.some(m => m.category === 'metal');
    const hasFabric = activeMaterials.some(m => m.category === 'fabric');

    const names = activeMaterials.map(m => m.name);

    if (names.includes('Carrara Marble') && names.includes('French Oak') && names.includes('Brushed Brass')) {
      return {
        title: 'Organic Modern Luxury',
        desc: 'Kombinasi klasik-kontemporer tercerdas. Kehangatan organik kayu ek meredam kedinginan marmer Carrara, sementara aksen emas kuningan memberikan pengikat visual mewah yang elegan.',
        palette: 'Warm Whites, Pale Gold, Sandy Brown'
      };
    }
    if (names.includes('Obsidian Slate') && names.includes('Fluted Walnut')) {
      return {
        title: 'Dark Architectonic Dramatics',
        desc: 'Suasana yang kaya, maskulin, dan kokoh. Panel walnut bergelombang melahirkan kedalaman bayangan yang selaras dengan kekasaran batu obsidian. Sangat cocok untuk vila eksklusif atau ruang kerja direksi.',
        palette: 'Charcoal Black, Coffee Wood, Steel'
      };
    }
    if (names.includes('Bouclé Ivory') && names.includes('French Oak') && !names.includes('Emerald Velvet')) {
      return {
        title: 'Warm Japandi Serenity',
        desc: 'Fokus penuh pada relaksasi sensorik. Tekstur taktil kain bouclé berpadu manis dengan kepolosan kayu Oak pirang. Menenangkan detak jantung, sangat ideal untuk ruang keluarga atau ruang meditasi keluarga.',
        palette: 'Oatmeal, Cotton White, Warm Timber'
      };
    }
    if (names.includes('Emerald Velvet') && names.includes('Brushed Brass')) {
      return {
        title: 'Royal Neo-Classic',
        desc: 'Ekspresi visual agung yang penuh percaya diri. Rona hijau zamrud dari beludru premium melambangkan kemewahan tiada banding kala disorot oleh kilau hangat kuningan satin.',
        palette: 'Deep Forest Green, Satin Gold, Alabaster'
      };
    }

    // Generic mixture diagnosis
    return {
      title: 'Curated Eclectic Harmony',
      desc: 'Anda memadukan beragam spektrum material secara bebas. Keberadaan tekstur ' + 
            (hasFabric ? 'Tekstil lembut' : '') + 
            (hasWood ? ' Kayu alami' : '') + 
            (hasStone ? ' Batu kokoh' : '') + 
            (hasMetal ? ' Logam kilau' : '') + 
            ' melahirkan harmoni ruang eklektik yang merefleksikan kepribadian Anda yang dinamis dan berjiwa seni.',
      palette: 'Multi-Textured Contrast Spectrum'
    };
  };

  const analysis = getAestheticAnalysis();

  // Custom positioning offsets to simulate physical scattered card board layouts
  const scatterOffsets = [
    { top: '8%', left: '8%', rotate: '-4deg', zIndex: 10 },
    { top: '15%', left: '42%', rotate: '3deg', zIndex: 15 },
    { top: '48%', left: '12%', rotate: '6deg', zIndex: 12 },
    { top: '42%', left: '50%', rotate: '-2deg', zIndex: 18 },
    { top: '25%', left: '26%', rotate: '-8deg', zIndex: 11 },
  ];

  return (
    <section id="moodboard" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="font-sans text-xs tracking-[0.4em] text-atelier-sienna uppercase block mb-3 font-bold">
              Eksplorasi Tekstur Taktil
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl text-atelier-charcoal tracking-tight leading-tight font-extrabold">
              Penyusun <span className="text-atelier-sienna">Papan Suasana</span> (Moodboard)
            </h2>
          </div>
          <p className="font-sans text-sm text-atelier-charcoal-light max-w-md mt-4 lg:mt-0 leading-relaxed font-normal">
            Sentuh atau tambahkan material premium di bawah untuk merangkai kombinasi tekstur. Lihat diagnosis kecocokan gaya ruang Anda secara instan di sisi kanan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Swatches Library (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-atelier-sand pb-4 mb-6">
                <span className="text-xs font-bold tracking-widest text-atelier-charcoal uppercase flex items-center space-x-2">
                  <Sliders size={13} className="text-atelier-sienna" />
                  <span>Koleksi Material Pilihan</span>
                </span>
                <span className="text-[10px] text-atelier-charcoal-light uppercase font-mono font-bold">
                  {selectedIds.length}/5 Terpilih
                </span>
              </div>

              {/* Grid of Materials */}
              <div className="grid grid-cols-2 gap-4 max-h-[480px] overflow-y-auto pr-2">
                {materials.map((m) => {
                  const isSelected = selectedIds.includes(m.id);
                  return (
                    <div
                      key={m.id}
                      onClick={() => handleToggleMaterial(m.id)}
                      className={`p-4 border rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-[160px] relative select-none shadow-sm ${
                        isSelected
                          ? 'border-atelier-sienna bg-atelier-sand/30'
                          : 'border-atelier-sand bg-white hover:border-atelier-sienna/50'
                      }`}
                    >
                      <div>
                        {/* Swatch Header Category */}
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[8px] tracking-widest text-atelier-charcoal-light uppercase font-bold">
                            {m.category}
                          </span>
                          {isSelected && (
                            <CheckCircle size={11} className="text-atelier-sienna" />
                          )}
                        </div>
                        <h4 className="font-sans text-sm font-bold text-atelier-charcoal">
                          {m.name}
                        </h4>
                        <p className="font-sans text-[10px] text-atelier-charcoal-light line-clamp-2 mt-1 leading-relaxed font-normal">
                          {m.description}
                        </p>
                      </div>

                      {/* Color Bar / Swatch Footer */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-atelier-sand">
                        <div className="flex items-center space-x-1.5">
                          <div 
                            className="w-3.5 h-3.5 rounded-full border border-black/5" 
                            style={{ backgroundColor: m.colorHex }}
                          />
                          <span className="font-mono text-[8px] text-atelier-charcoal-light uppercase font-bold">
                            {m.colorHex}
                          </span>
                        </div>
                        <button className="text-atelier-sienna cursor-pointer">
                          <Plus size={12} className={`transition-transform duration-300 ${isSelected ? 'rotate-45 text-red-500' : ''}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Clear All Button */}
            <div className="mt-6 pt-4 border-t border-atelier-sand flex justify-end">
              <button
                onClick={handleClearAll}
                className="flex items-center space-x-1.5 text-xs tracking-widest uppercase text-atelier-charcoal/40 hover:text-red-500 transition-colors cursor-pointer py-1 font-bold"
              >
                <Trash2 size={12} />
                <span>Reset Papan</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Scattered Canvas & Analysis (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Mosaic Canvas (md:col-span-7) */}
            <div className="md:col-span-7 bg-atelier-sand/20 border border-atelier-sand aspect-square md:aspect-auto md:h-full relative overflow-hidden flex items-center justify-center p-8 rounded-3xl shadow-inner">
              
              {/* Scattered Physical Card Layout */}
              <div className="relative w-full h-full">
                <AnimatePresence>
                  {activeMaterials.map((m, idx) => {
                    const offset = scatterOffsets[idx] || scatterOffsets[0];
                    return (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: '-20deg' }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          rotate: offset.rotate,
                          y: 0,
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="absolute w-[120px] sm:w-[140px] bg-white border border-atelier-sand p-3 shadow-lg rounded-2xl cursor-grab active:cursor-grabbing hover:scale-105 hover:z-30 transition-shadow duration-300 select-none"
                        style={{ 
                          top: offset.top, 
                          left: offset.left,
                          zIndex: offset.zIndex 
                        }}
                      >
                        {/* Material Swatch Block */}
                        <div className="w-full aspect-[4/3] bg-[#F8F9FA] overflow-hidden mb-2 relative border border-[#EAECF0] rounded-xl">
                          <img
                            src={m.imageUrl}
                            alt={m.name}
                            className="w-full h-full object-cover pointer-events-none"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Card Meta */}
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="font-sans text-[11px] font-bold text-atelier-charcoal leading-none block">
                              {m.name}
                            </span>
                            <span className="text-[7px] tracking-widest text-atelier-charcoal-light uppercase block mt-1 font-bold">
                              {m.category}
                            </span>
                          </div>
                          <div 
                            className="w-2.5 h-2.5 rounded-full border border-black/5" 
                            style={{ backgroundColor: m.colorHex }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Decorative Blueprint Grid Backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-3xl" />

              {/* Tiny Canvas Guide Info */}
              <div className="absolute bottom-4 left-4 text-[8px] tracking-[0.2em] uppercase text-atelier-charcoal-light font-bold">
                Papan Simulasi Fisik FurniSphere
              </div>
            </div>

            {/* Aesthetic Diagnosis Panel (md:col-span-5) */}
            <div className="md:col-span-5 bg-[#1A1A1A] text-white p-8 border border-white/10 flex flex-col justify-between shadow-xl rounded-3xl">
              <div>
                <div className="flex items-center space-x-1.5 text-atelier-sienna text-[9px] tracking-widest uppercase font-bold mb-6">
                  <Sparkles size={11} className="animate-pulse" />
                  <span>Diagnosis Estetika</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={analysis.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-sans text-xl sm:text-2xl text-white tracking-tight font-extrabold mb-3 leading-tight">
                      {analysis.title}
                    </h3>
                    <p className="font-sans text-xs text-white/70 leading-relaxed font-normal mb-6">
                      {analysis.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div>
                {/* Palette Colors Summary */}
                <div className="border-t border-white/10 pt-4 mb-6">
                  <span className="text-[8px] tracking-widest text-white/40 uppercase block mb-2 font-bold">
                    Rekomendasi Rona Spektra
                  </span>
                  <p className="font-sans text-[11px] font-bold text-atelier-sienna">
                    {analysis.palette}
                  </p>
                </div>

                {/* Micro CTA */}
                <button
                  onClick={() => {
                    const calculatorEl = document.getElementById('calculator');
                    if (calculatorEl) {
                      calculatorEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-3.5 bg-atelier-sienna text-white hover:bg-white hover:text-[#1A1A1A] text-[10px] tracking-widest uppercase font-bold transition-all duration-300 text-center block cursor-pointer rounded-full"
                >
                  Gunakan Skema Ini
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
