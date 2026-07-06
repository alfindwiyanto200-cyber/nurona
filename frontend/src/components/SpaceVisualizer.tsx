"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Info, CheckCircle } from 'lucide-react';
import { RoomStyle } from '../types';

export default function SpaceVisualizer() {
  const [activeStyle, setActiveStyle] = useState<'japandi' | 'luxury' | 'industrial' | 'classic'>('japandi');
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [activeColorIdx, setActiveColorIdx] = useState<number>(0);

  const styles: Record<'japandi' | 'luxury' | 'industrial' | 'classic', RoomStyle> = {
    japandi: {
      id: 'japandi',
      name: 'Japandi Modern',
      description: 'Sinergi harmonis antara estetika minimalis Jepang (Wabi-Sabi) dan kenyamanan fungsional Skandinavia. Menghargai keindahan dalam ketidaksempurnaan, alam, dan kesederhanaan.',
      imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      furnitureDescription: 'Furnitur rendah bergaris bersih berbahan kayu Oak alami, anyaman rotan, serta sofa berselimut linen linen alami berwarna krem hangat.',
      mainMaterial: 'Kayu Oak Terang, Rotan Alam, Kain Linen Organik, Dinding Semen Tekstur Halus.',
      paletteColors: [
        { name: 'Warm Alabaster', hex: '#FAF7F2' },
        { name: 'Light Oak', hex: '#E5D3B3' },
        { name: 'Sage Green', hex: '#9CA998' },
        { name: 'Charcoal Accent', hex: '#2C2C2B' },
      ],
    },
    luxury: {
      id: 'luxury',
      name: 'Modern Luxury',
      description: 'Definisi keanggunan kontemporer yang mewah namun tetap bersahaja. Berfokus pada permukaan marmer berpola tegas, aksen logam berkilau, dan garis simetris yang megah.',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
      furnitureDescription: 'Sofa beludru (velvet) kustom berbentuk melengkung (curved), meja marmer Carrara berkaki kuningan satin, dan pencahayaan gantung geometris.',
      mainMaterial: 'Marmer Hitam Nero Marquina, Kuningan Sikat (Brushed Brass), Beludru Sutra, Cermin Bronze.',
      paletteColors: [
        { name: 'Nero Black', hex: '#161616' },
        { name: 'Carrara Gray', hex: '#DCDCDC' },
        { name: 'Satin Brass', hex: '#CFB53B' },
        { name: 'Deep Emerald', hex: '#0B3F2A' },
      ],
    },
    industrial: {
      id: 'industrial',
      name: 'Industrial Loft',
      description: 'Mengedepankan karakter jujur dari material struktural mentah yang biasanya disembunyikan. Menampilkan aura maskulin, urban, dan penuh ekspresi historis arsitektural.',
      imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
      furnitureDescription: 'Meja makan dari bilah kayu jati reklamasi besar dengan rangka besi hitam tempa, serta kursi makan berbahan kulit sapi antik dengan jahitan terekspos.',
      mainMaterial: 'Bata Merah Ekspos, Besi Baja Karat, Kayu Jati Kasar, Lantai Semen Poles (Polished Concrete).',
      paletteColors: [
        { name: 'Rusty Brick', hex: '#9C5D4B' },
        { name: 'Steel Black', hex: '#282828' },
        { name: 'Distressed Tan', hex: '#A0714E' },
        { name: 'Concrete Gray', hex: '#A19E9A' },
      ],
    },
    classic: {
      id: 'classic',
      name: 'Classic Parisian',
      description: 'Menjunjung tinggi keanggunan klasik apartemen bergaya Haussmann di Paris dengan sentuhan eklektik modern. Menghadirkan dinding panel moulding romantis dan pencahayaan dramatis.',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      furnitureDescription: 'Kursi berlengan (armchair) bergaya klasik Louis, dipadukan kontras dengan lampu lantai modern minimalis berwarna hitam matte serta karya seni abstrak berbingkai emas besar.',
      mainMaterial: 'Panel Dinding Moulding Semen, Lantai Kayu Herringbone, Marmer Calacatta, Detail Plafon Gipsum Ukir.',
      paletteColors: [
        { name: 'Pure Chalk', hex: '#FDFCFA' },
        { name: 'Parisian Gray', hex: '#E2DFD9' },
        { name: 'Classic Blue', hex: '#1C2E3D' },
        { name: 'Antique Gold', hex: '#D4AF37' },
      ],
    },
  };

  const currentStyle = styles[activeStyle];

  return (
    <section id="visualizer" className="py-24 bg-atelier-sand/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-sans text-xs tracking-[0.4em] text-atelier-sienna uppercase block mb-3 font-semibold">
              Eksperimen Gaya Interaktif
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-atelier-charcoal tracking-tight leading-tight">
              Visualisasikan <span className="italic font-normal">Gaya Ruang</span> Anda
            </h2>
          </div>
          <p className="font-sans text-sm text-atelier-charcoal/60 max-w-md mt-4 md:mt-0 leading-relaxed font-light">
            Sentuh berbagai gaya desain di bawah untuk mengganti suasana material, perabot, dan mood pencahayaan siang atau malam hari secara langsung.
          </p>
        </div>

        {/* Style Toggles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {(Object.keys(styles) as Array<keyof typeof styles>).map((key) => {
            const isSelected = activeStyle === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveStyle(key);
                  setActiveColorIdx(0);
                }}
                className={`py-4 px-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 relative cursor-pointer border rounded-2xl ${
                  isSelected
                    ? 'bg-atelier-sienna text-white border-atelier-sienna shadow-sm'
                    : 'bg-white text-atelier-charcoal/70 border-atelier-sand hover:border-atelier-sienna hover:text-atelier-sienna'
                }`}
              >
                {styles[key].name}
              </button>
            );
          })}
        </div>

        {/* Visualizer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Visual Display (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative border border-atelier-sand overflow-hidden bg-white aspect-[4/3] flex-grow rounded-3xl shadow-sm">
              
              {/* Day/Night Simulated Lighting Ambient Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeStyle}-${isNightMode}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentStyle.imageUrl}
                    alt={currentStyle.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Filter for Night Mode (Warm golden & darker) */}
                  {isNightMode ? (
                    <div className="absolute inset-0 bg-yellow-950/40 mix-blend-color-burn backdrop-brightness-[0.65] backdrop-contrast-[1.1]" />
                  ) : (
                    <div className="absolute inset-0 bg-blue-50/5 mix-blend-soft-light" />
                  )}
                  
                  {/* Subtle lighting vignette overlay */}
                  <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isNightMode 
                      ? 'bg-radial-gradient from-transparent via-black/30 to-black/70' 
                      : 'bg-gradient-to-t from-black/20 via-transparent to-transparent'
                  }`} />
                </motion.div>
              </AnimatePresence>

              {/* Lighting Ambient State Tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-[#1A1A1A]/90 text-white text-[9px] tracking-widest uppercase py-2 px-3 rounded-full border border-white/10 backdrop-blur-sm">
                {isNightMode ? (
                  <>
                    <Moon size={10} className="text-amber-400 fill-amber-400" />
                    <span>Lampu Hangat Malam (3000K)</span>
                  </>
                ) : (
                  <>
                    <Sun size={10} className="text-amber-100" />
                    <span>Cahaya Alami Siang (5500K)</span>
                  </>
                )}
              </div>

              {/* Day/Night Toggle Controls on Stage */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-1 bg-white/90 p-1.5 rounded-full border border-atelier-sand backdrop-blur-sm shadow-xl">
                <button
                  onClick={() => setIsNightMode(false)}
                  className={`px-4 py-2 text-[10px] tracking-widest uppercase font-extrabold flex items-center space-x-1 transition-all duration-300 rounded-full cursor-pointer ${
                    !isNightMode
                      ? 'bg-atelier-sienna text-white'
                      : 'text-atelier-charcoal/60 hover:text-atelier-charcoal'
                  }`}
                >
                  <Sun size={11} />
                  <span className="hidden sm:inline">Siang</span>
                </button>
                <button
                  onClick={() => setIsNightMode(true)}
                  className={`px-4 py-2 text-[10px] tracking-widest uppercase font-extrabold flex items-center space-x-1 transition-all duration-300 rounded-full cursor-pointer ${
                    isNightMode
                      ? 'bg-atelier-sienna text-white'
                      : 'text-atelier-charcoal/60 hover:text-atelier-charcoal'
                  }`}
                >
                  <Moon size={11} />
                  <span className="hidden sm:inline">Malam</span>
                </button>
              </div>

            </div>
          </div>

          {/* Style Details Column (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-atelier-sand p-8 md:p-10 rounded-3xl shadow-sm">
            
            <div>
              {/* Style Header */}
              <div className="border-b border-atelier-sand pb-6 mb-6">
                <span className="text-[10px] font-bold tracking-widest text-atelier-sienna uppercase block mb-1">
                  KONSEP RUANG
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl text-atelier-charcoal tracking-tight font-extrabold">
                  {currentStyle.name}
                </h3>
                <p className="font-sans text-xs md:text-sm text-atelier-charcoal-light leading-relaxed font-normal mt-3">
                  {currentStyle.description}
                </p>
              </div>

              {/* Dynamic Interior Spec Points */}
              <div className="space-y-4">
                <div>
                  <span className="text-[9px] font-bold tracking-widest text-atelier-charcoal-light uppercase block mb-1">
                    Material Utama
                  </span>
                  <p className="font-sans text-xs text-atelier-charcoal font-bold">
                    {currentStyle.mainMaterial}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold tracking-widest text-atelier-charcoal-light uppercase block mb-1">
                    Konsep Furnitur
                  </span>
                  <p className="font-sans text-xs text-atelier-charcoal-light leading-relaxed font-normal">
                    {currentStyle.furnitureDescription}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold tracking-widest text-atelier-charcoal-light uppercase block mb-1">
                    Pencahayaan Simulasional ({isNightMode ? 'Malam' : 'Siang'})
                  </span>
                  <p className="font-sans text-xs text-atelier-charcoal-light leading-relaxed font-normal">
                    {isNightMode 
                      ? 'Pencahayaan tersembunyi (cove lighting) kuning hangat dipadukan dengan lampu sorot dinding (wall washer) untuk melahirkan bayangan dramatis berkelas.'
                      : 'Memaksimalkan lubang skylight atau jendela besar untuk mengalirkan cahaya putih bersih yang merefleksikan karakter jujur material alami.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Color Swatch Selector */}
            <div className="mt-8 pt-6 border-t border-atelier-sand">
              <span className="text-[9px] font-bold tracking-widest text-atelier-charcoal-light uppercase block mb-3">
                Palet Warna Spektra (Pilih untuk detail)
              </span>
              <div className="flex items-center space-x-3 mb-4">
                {currentStyle.paletteColors.map((color, idx) => {
                  const isColorActive = activeColorIdx === idx;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setActiveColorIdx(idx)}
                      className={`w-9 h-9 rounded-full border transition-all duration-300 relative cursor-pointer flex items-center justify-center ${
                        isColorActive 
                          ? 'border-atelier-sienna scale-110 shadow-md' 
                          : 'border-atelier-sand hover:border-atelier-sienna/50'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {isColorActive && (
                        <CheckCircle size={12} className={idx === 0 && color.hex === '#FAF7F2' ? 'text-atelier-charcoal' : 'text-white'} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Color Information */}
              <div className="bg-[#F8F9FA] p-4 border border-atelier-sand rounded-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-5 h-5 rounded-md border border-black/10"
                    style={{ backgroundColor: currentStyle.paletteColors[activeColorIdx].hex }}
                  />
                  <div>
                    <span className="font-sans text-[11px] font-bold text-atelier-charcoal block">
                      {currentStyle.paletteColors[activeColorIdx].name}
                    </span>
                    <span className="font-mono text-[9px] text-atelier-charcoal-light block">
                      {currentStyle.paletteColors[activeColorIdx].hex}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-atelier-sienna text-[9px] tracking-widest uppercase font-bold">
                  <Info size={10} />
                  <span>Aksen Utama</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
