"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, FileText, Layout, Eye } from 'lucide-react';

interface DesignSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesignSpecsModal({ isOpen, onClose }: DesignSpecsModalProps) {
  const [isCopied, setIsCopied] = useState(false);

  const rawMarkdown = `# RANCANGAN DESAIN UI/UX - FURNISPHERE INTERIOR DESIGN

Dokumen ini menjelaskan cetak biru (blueprint) arsitektur visual, interaksi, dan struktur animasi dari website **FurniSphere - Interior Design Studio**. Website ini dirancang untuk memberikan pengalaman digital imersif yang mencerminkan kualitas keahlian dan kepekaan artistik dari sebuah biro desain interior premium.

---

## 1. Filosofi Desain & Identitas Visual

### 1.1 Konsep Utama: *Warm Minimalism* (Minimalisme Hangat)
Desain interior modern tidak lagi sekadar dingin dan kaku. Biro kami berfokus pada keseimbangan antara kesederhanaan bentuk, kehangatan material alami, serta fungsionalitas ruang yang tinggi. UI website ini mencerminkan filosofi tersebut melalui penggunaan elemen visual yang bersih, ruang negatif yang lega (generous negative space), dan transisi yang halus.

### 1.2 Palet Warna (Design Tokens)
Palet warna menggunakan warna-warna bumi (earthy tones) yang menenangkan, berkelas, dan memberikan kontras yang sempurna untuk menyoroti foto portofolio:
*   **Primary Orange (#FE7F2D):** Warna aksen utama untuk elemen aktif, tombol primer, hover, dan sorotan penting. Memberikan energi kreatif dan kehangatan modern.
*   **Secondary Slate Light (#EAECF0):** Warna pemisah, border tipis, dan pembatas konten yang elegan dan bersih.
*   **Charcoal Obsidian (#121212 / #1E1E1E):** Warna dasar gelap untuk teks utama dan area fokus kontras tinggi.
*   **Warm Alabaster (#FBFBFA):** Latar belakang utama halaman. Warna off-white yang lembut di mata dan memberikan suasana lapang.

### 1.3 Tipografi
Kombinasi font kurasi premium yang mencerminkan keindahan arsitektural:
*   **Font Header & Body:** *Plus Jakarta Sans* (Sans-serif premium kontemporer) untuk keterbacaan optimal, bersih, modern, dan memberikan estetika studio arsitektur terkemuka.

---

## 2. Struktur Navigasi & Arsitektur Parallax

Website dirancang sebagai **Single-Page Application (SPA) Imersif** dengan navigasi yang mengalir mulus menggunakan efek gerak paralaks bertingkat (multi-layered parallax scroll):

1. **HERO BANNER (Parallax Layered Image & Text)**
2. **ABOUT & ETHOS (Smooth Fade-Up)**
3. **INTERACTIVE SPACE VISUALIZER (Live Preview)**
4. **PORTFOLIO GALERI (Filtered Grid & Detail View)**
5. **INTERACTIVE MATERIAL MOOD BOARD (Drag/Click Composer)**
6. **KALKULATOR BUDGET & RESERVASI (Estimasi Real-time)**

---

## 3. Fitur Interaktif Industri Desain Interior

### 3.1 Live Room Style Visualizer (Visualisasi Gaya Ruang)
Memungkinkan klien potensial memahami berbagai konsep arsitektur secara instan:
*   **Gaya Japandi:** Minimalis Jepang-Skandinavia dengan kayu terang dan linen.
*   **Modern Luxury:** Elegan dengan marmer hitam, pencahayaan hangat, dan aksen logam emas.
*   **Industrial Loft:** Karakter kuat dengan bata ekspos, logam hitam, dan kayu rustik.
*   **Classic Parisian:** Anggun dengan panel dinding cetak (moulding), warna putih bersih, dan furnitur klasik modern.

### 3.2 Dynamic Interior Budget Calculator (Kalkulator Anggaran)
Mengurangi hambatan komunikasi awal mengenai harga dengan memberikan estimasi instan:
*   **Parameter:** Jenis ruangan (Ruang Tamu, Kamar Tidur, Dapur, Seluruh Rumah), Luas Area (m2), dan Level Desain (Essential, Signature, Avant-Garde).
*   **Output Dinamis:** Estimasi biaya desain, biaya material & furnitur, durasi proyek, serta tombol langsung untuk "Pesan Jadwal Konsultasi" yang otomatis mengisi data kalkulator ke formulir kontak.

### 3.3 Material Mood Board Builder (Penyusun Papan Suasana)
Sesi penyusunan material adalah jantung dari diskusi desain interior:
*   Pengguna dapat memilih dan mengombinasikan tekstur (Oak Wood, Carrara Marble, Brushed Brass, Bouclé Fabric, Terrazzo, Emerald Velvet).
*   Menampilkan kecocokan warna dan harmoni tekstur secara langsung di layar dengan efek visual tumpukan kartu estetik.

---

## 4. Mekanisme Animasi Parallax & Transisi

Semua animasi dikelola dengan performa tinggi menggunakan **Framer Motion** untuk memastikan kelancaran rendering:
1.  **Parallax Scroll pada Hero:** Mengikat posisi scroll (scrollY) ke transformasi posisi Y teks headline dan latar belakang gambar menggunakan useTransform.
2.  **Staggered Fade-In:** Elemen kartu portofolio muncul satu per satu dengan penundaan bertingkat (staggered delay) saat masuk ke area pandang pembaca (viewport).
3.  **Hover Magnify:** Gambar portofolio memiliki efek zoom-in lambat sebesar 1.05x dengan filter pencahayaan saat diarahkan oleh kursor mouse, memberikan kedalaman ruang digital yang dramatis.
4.  **Layout Transitions:** Pergantian kategori galeri portofolio menggunakan animasi tata letak dinamis (layoutId) untuk pergeseran garis bawah filter aktif.

---

## 5. Kesimpulan Cetak Biru (Blueprint)
Website **FurniSphere** menyatukan keindahan seni interior dengan teknologi web interaktif berkinerja tinggi. Kombinasi dari tipografi arsitektural, transisi paralaks yang halus, dan alat bantu pengambilan keputusan (kalkulator budget & visualizer) membuat website ini menjadi saluran pemasaran digital yang sangat profesional, persuasif, dan mengesankan bagi klien kelas atas.`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(rawMarkdown);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-atelier-charcoal/60 backdrop-blur-sm"
          />

          {/* Sliding Specification Sidebar Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative w-full max-w-2xl h-screen bg-white border-l border-atelier-sand shadow-2xl z-15 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-atelier-sand flex items-center justify-between bg-white">
              <div className="flex items-center space-x-2.5">
                <div className="p-2.5 bg-atelier-sienna/10 border border-atelier-sienna/20 rounded-xl">
                  <FileText size={16} className="text-atelier-sienna" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-atelier-charcoal leading-none">
                    Cetak Biru Desain UI/UX
                  </h3>
                  <span className="text-[10px] tracking-widest text-atelier-charcoal-light uppercase block mt-1 font-bold">
                    DESIGN.md Dokumentasi
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyMarkdown}
                  className="flex items-center space-x-1 px-4 py-2 bg-atelier-sand hover:bg-[#FE7F2D] hover:text-white text-atelier-charcoal transition-all duration-300 text-[10px] tracking-widest uppercase font-bold rounded-full cursor-pointer"
                  title="Salin Kode Markdown Raw"
                >
                  {isCopied ? (
                    <>
                      <Check size={11} className="text-green-600" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>Salin MD</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="p-2 bg-atelier-sand text-atelier-charcoal hover:bg-atelier-sienna hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Rendered Markdown Body Content Area */}
            <div className="flex-grow overflow-y-auto px-8 py-10 bg-[#FBFBFA]">
              <div className="markdown-body">
                <div className="border-b border-atelier-sand pb-6 mb-8">
                  <span className="flex items-center space-x-1.5 text-[#FE7F2D] text-[9px] tracking-widest uppercase font-bold mb-2">
                    <Layout size={10} />
                    <span>ARSITEKTUR DESAIN WEB INTERIOR</span>
                  </span>
                  <h1 className="!border-none !my-0 !pb-0 leading-tight font-extrabold text-atelier-charcoal font-sans">
                    FURNISPHERE - DESIGN BLUEPRINT SPECIFICATION
                  </h1>
                  <p className="text-xs text-atelier-charcoal-light mt-2 font-mono font-bold">
                    Lokalisasi File: ./DESIGN.md
                  </p>
                </div>

                <div className="space-y-8 text-sm text-atelier-charcoal leading-relaxed font-normal">
                  <p>
                    Dokumen ini menjelaskan cetak biru (blueprint) arsitektur visual, interaksi, dan struktur animasi dari website <strong>FurniSphere - Interior Design Studio</strong>. Website ini dirancang untuk memberikan pengalaman digital imersif yang mencerminkan kualitas keahlian dan kepekaan arsitektural dari sebuah biro desain interior premium.
                  </p>

                  <section className="space-y-4">
                    <h2 className="flex items-center space-x-2 font-extrabold text-lg text-atelier-charcoal">
                      <span className="w-1.5 h-4 bg-atelier-sienna inline-block rounded-full" />
                      <span>1. Filosofi Desain & Identitas Visual</span>
                    </h2>
                    
                    <div className="pl-3 space-y-4">
                      <div>
                        <h3 className="font-extrabold text-atelier-charcoal text-xs uppercase tracking-wider">1.1 Konsep Utama: Warm Minimalism (Minimalisme Hangat)</h3>
                        <p className="mt-1">Desain interior modern tidak lagi sekadar dingin dan kaku. Biro kami berfokus pada keseimbangan antara kesederhanaan bentuk, kehangatan material alami, serta fungsionalitas ruang yang tinggi. UI website ini mencerminkan filosofi tersebut melalui penggunaan elemen visual yang bersih, ruang negatif yang lega (generous negative space), dan transisi yang halus.</p>
                      </div>

                      <div>
                        <h3 className="font-extrabold text-atelier-charcoal text-xs uppercase tracking-wider">1.2 Palet Warna (Design Tokens)</h3>
                        <p className="mt-1">Palet warna menggunakan warna-warna bumi (earthy tones) yang menenangkan, berkelas, dan memberikan kontras yang sempurna untuk menyoroti foto portofolio:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Primary Orange (<code className="text-atelier-sienna font-bold">#FE7F2D</code>):</strong> Warna aksen utama untuk elemen aktif, tombol primer, hover, dan sorotan penting.</li>
                          <li><strong>Secondary Slate Light (<code className="text-atelier-sienna font-bold">#EAECF0</code>):</strong> Warna pemisah, border tipis, dan pembatas konten yang elegan dan bersih.</li>
                          <li><strong>Warm Alabaster (<code className="text-atelier-sienna font-bold">#FBFBFA</code>):</strong> Latar belakang utama halaman yang memberikan suasana lapang.</li>
                          <li><strong>Charcoal Obsidian (<code className="text-atelier-sienna font-bold">#121212</code>):</strong> Warna dasar gelap untuk teks utama.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-extrabold text-atelier-charcoal text-xs uppercase tracking-wider">1.3 Tipografi</h3>
                        <p className="mt-1">Kombinasi font kurasi premium yang mencerminkan keindahan arsitektural:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Font Header & Body:</strong> <em>Plus Jakarta Sans</em> (Sans-serif premium) untuk keterbacaan optimal pada teks penjelasan dan angka-angka teknis.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="flex items-center space-x-2 font-extrabold text-lg text-atelier-charcoal">
                      <span className="w-1.5 h-4 bg-atelier-sienna inline-block rounded-full" />
                      <span>2. Struktur Navigasi & Arsitektur Parallax</span>
                    </h2>
                    <p className="pl-3">
                      Website dirancang sebagai <strong>Single-Page Application (SPA) Imersif</strong> dengan navigasi yang mengalir mulus menggunakan efek gerak paralaks bertingkat (multi-layered parallax scroll):
                    </p>
                    <div className="pl-3 bg-atelier-sand/20 p-4 border border-atelier-sand rounded-2xl font-mono text-xs space-y-1.5">
                      <div className="text-atelier-sienna font-bold">// 1. HERO BANNER (Parallax Layered Image & Text)</div>
                      <div>- Translasi Y latar belakang melambat (faktor 0.4x)</div>
                      <div>- Translasi Y teks memicu scroll normal (faktor 1.1x)</div>
                      <div className="text-atelier-sienna font-bold">// 2. ABOUT & ETHOS (Smooth Viewport Fade-Up)</div>
                      <div className="text-atelier-sienna font-bold">// 3. INTERACTIVE SPACE VISUALIZER (Live Style Toggles)</div>
                      <div className="text-atelier-sienna font-bold">// 4. PORTFOLIO GALERI (Filtered Grid & Detail Modals)</div>
                      <div className="text-atelier-sienna font-bold">// 5. INTERACTIVE MATERIAL MOOD BOARD (Click/Compose swatches)</div>
                      <div className="text-atelier-sienna font-bold">// 6. KALKULATOR BUDGET & RESERVASI (Real-time pricing)</div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="flex items-center space-x-2 font-extrabold text-lg text-atelier-charcoal">
                      <span className="w-1.5 h-4 bg-atelier-sienna inline-block rounded-full" />
                      <span>3. Fitur Interaktif Industri Desain Interior</span>
                    </h2>
                    <div className="pl-3 space-y-3">
                      <p><strong>3.1 Live Room Style Visualizer (Visualisasi Gaya Ruang)</strong><br />Memungkinkan klien potensial memahami berbagai konsep arsitektur secara instan. Menampilkan parameter khusus gaya Japandi, Modern Luxury, Industrial Loft, dan Parisian Classic, lengkap dengan simulasi pencahayaan Siang (daylight) dan Malam (cozy warmth).</p>
                      <p><strong>3.2 Dynamic Interior Budget Calculator (Kalkulator Anggaran)</strong><br />Mengurangi hambatan komunikasi awal mengenai harga dengan memberikan estimasi instan jasa gambar dan pengerjaan berdasarkan luasan area meter persegi yang diinput manual.</p>
                      <p><strong>3.3 Material Mood Board Builder (Penyusun Papan Suasana)</strong><br />Meniru sesi diskusi fisik material interior secara taktil. Pengguna dapat memilih dan mengombinasikan tekstur (Oak Wood, Carrara Marble, Brushed Brass, Bouclé Fabric, Terrazzo, Emerald Velvet) untuk mendapatkan diagnosis kecocokan visual.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="flex items-center space-x-2 font-extrabold text-lg text-atelier-charcoal">
                      <span className="w-1.5 h-4 bg-atelier-sienna inline-block rounded-full" />
                      <span>4. Mekanisme Animasi Parallax & Transisi</span>
                    </h2>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><strong>Parallax Scroll pada Hero:</strong> Mengikat posisi scroll (<code className="text-atelier-sienna font-bold">scrollY</code>) ke transformasi posisi Y teks headline dan latar belakang gambar menggunakan <code className="text-atelier-sienna font-bold">useTransform</code>.</li>
                      <li><strong>Staggered Fade-In:</strong> Elemen kartu portofolio muncul satu per satu dengan penundaan bertingkat (staggered delay) saat masuk ke area pandang pembaca (viewport) demi menjaga ritme pergerakan.</li>
                      <li><strong>Hover Magnify:</strong> Gambar portofolio memiliki efek zoom-in lambat sebesar 1.05x dengan filter pencahayaan saat diarahkan oleh kursor mouse, memberikan kedalaman ruang digital yang dramatis.</li>
                    </ol>
                  </section>
                </div>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="px-6 py-4 border-t border-atelier-sand bg-white flex items-center justify-between text-[10px] text-atelier-charcoal-light">
              <span className="font-mono uppercase tracking-wider font-bold">FurniSphere Architecture &copy; 2026</span>
              <button
                onClick={onClose}
                className="flex items-center space-x-1 hover:text-atelier-sienna font-bold transition-colors uppercase tracking-widest cursor-pointer"
              >
                <Eye size={12} />
                <span>Kembali ke Web</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
