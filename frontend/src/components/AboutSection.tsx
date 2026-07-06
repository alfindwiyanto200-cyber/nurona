"use client";

import { motion } from 'motion/react';
import { Sparkles, Hammer, Heart } from 'lucide-react';

export default function AboutSection() {
  const principles = [
    {
      icon: <Sparkles className="text-atelier-sienna w-5 h-5" />,
      title: 'Estetika Fungsional',
      desc: 'Setiap sudut ruangan dirancang untuk memukau mata sekaligus memberikan utilitas fungsional yang intuitif dalam aktivitas harian.',
    },
    {
      icon: <Hammer className="text-atelier-sienna w-5 h-5" />,
      title: 'Material Premium & Presisi',
      desc: 'Kami bermitra dengan pengrajin kayu terbaik dan penyuplai batu alam premium untuk merealisasikan sentuhan akhir yang tanpa celah.',
    },
    {
      icon: <Heart className="text-atelier-sienna w-5 h-5" />,
      title: 'Desain Kustom Personal',
      desc: 'Tidak ada proyek yang sama. Kami menerjemahkan narasi hidup dan preferensi unik Anda ke dalam skema tata ruang yang personal.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-atelier-sand pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Premium Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            {/* Soft accent background box (using EAECF0) */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-atelier-sand -z-10 rounded-3xl" />
            
            <div className="overflow-hidden border border-atelier-sand aspect-[3/4] rounded-3xl shadow-md">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                alt="Refined Architectural Interior Detailing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Float Badge (using FE7F2D) */}
            <div className="absolute -bottom-6 -right-6 bg-atelier-charcoal text-white p-6 shadow-xl max-w-[180px] rounded-2xl border border-white/10 hidden sm:block">
              <span className="font-sans text-3xl font-extrabold text-atelier-sienna block mb-1">100+</span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/80 leading-normal block font-bold">
                Ruang Hunian Telah Ditransformasikan
              </span>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-xs tracking-[0.4em] text-atelier-sienna uppercase block mb-3 font-bold">
                Filosofi & Etos Kerja
              </span>
              <h2 className="font-sans text-3xl sm:text-5xl text-atelier-charcoal tracking-tight leading-tight mb-6 font-extrabold">
                Kami tidak sekadar mendesain tata ruang, kami merancang <span className="text-atelier-sienna font-extrabold">pengalaman hidup</span>.
              </h2>
              
              <p className="font-sans text-sm md:text-base text-atelier-charcoal-light leading-relaxed mb-8 font-normal">
                Di FurniSphere, kami percaya bahwa ruangan yang kita tempati adalah perpanjangan dari identitas diri kita. Kolaborasi erat antara arsitek, desainer, dan pengrajin ahli adalah kunci utama dalam melahirkan karya seni spasial yang fungsional dan abadi. Kami menggabungkan material organik seperti kayu solid, batu marmer, dan logam tembaga dengan pencahayaan arsitektural yang apik.
              </p>
            </motion.div>

            {/* Quote Block (using EAECF0 secondary) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-4 border-atelier-sienna pl-6 py-4 mb-10 bg-atelier-sand/30 rounded-r-2xl"
            >
              <p className="font-serif text-lg md:text-xl text-atelier-charcoal italic leading-relaxed font-medium">
                "Rumah harus menjadi jangkar bagi jiwa, tempat di mana kepribadian Anda terwujud dalam wujud material yang hangat dan menenangkan."
              </p>
              <span className="font-sans text-[10px] tracking-widest uppercase text-atelier-sienna font-bold block mt-3">
                — Ar. Alfin Dwiyanto, Pendiri & Kepala Desain
              </span>
            </motion.div>

            {/* Core Principles Grid */}
            <div className="space-y-6">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-atelier-sand border border-white/5 mt-1 rounded-xl shadow-sm">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-atelier-charcoal mb-1">
                      {p.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-atelier-charcoal-light leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
