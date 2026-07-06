"use client";

import { useState, useMemo, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Check, ArrowRight, User, Phone, Mail, FileCheck2, Calendar } from 'lucide-react';
import { BudgetEstimate } from '../types';

export default function BudgetCalculator() {
  const [roomType, setRoomType] = useState<'living' | 'kitchen' | 'bedroom' | 'whole'>('living');
  const [roomSize, setRoomSize] = useState<number>(30);
  const [designTier, setDesignTier] = useState<'essential' | 'signature' | 'avant'>('signature');

  // Booking Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Constants for pricing
  const tierRates = {
    essential: 150000, // IDR per m2
    signature: 350000,
    avant: 650000,
  };

  const roomBuildMultipliers = {
    living: 3500000,  // Build cost per m2
    kitchen: 5000000, // Kitchens are more expensive (plumbing, appliances, cabinets)
    bedroom: 3000000,
    whole: 4000000,
  };

  // Recalculate estimates reactively when dependencies change
  const estimates = useMemo<BudgetEstimate>(() => {
    const designRate = tierRates[designTier];
    const buildRateMultiplier = roomBuildMultipliers[roomType];

    const designFee = designRate * roomSize;
    const buildFee = buildRateMultiplier * roomSize;
    const totalCost = designFee + buildFee;

    // Estimate duration in weeks
    let durationWeeks = 4;
    if (roomSize > 40) durationWeeks = 6;
    if (roomSize > 80) durationWeeks = 10;
    if (roomSize > 150) durationWeeks = 16;
    if (designTier === 'avant') durationWeeks += 2; // Extra details take time

    return {
      designFee,
      buildFee,
      totalCost,
      durationWeeks,
    };
  }, [roomType, roomSize, designTier]);

  // Form Submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setIsSubmitted(true);
  };

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="calculator" className="py-24 bg-[#F8F9FA] border-t border-b border-atelier-sand relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-xs tracking-[0.4em] text-atelier-sienna uppercase block mb-3 font-bold">
            Estimasi Transparan
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl text-atelier-charcoal tracking-tight leading-tight mb-4 font-extrabold">
            Kalkulator Anggaran & <span className="text-atelier-sienna">Konsultasi</span>
          </h2>
          <p className="font-sans text-sm text-atelier-charcoal-light leading-relaxed font-normal">
            Kami menjunjung tinggi keterbukaan harga tanpa ada biaya terselubung. Sesuaikan kriteria di bawah untuk memperoleh kalkulasi kasar proyek interior Anda, lalu kirimkan jadwal konsultasi tatap muka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Settings (4 Cols) */}
          <div className="lg:col-span-4 bg-white border border-atelier-sand p-8 rounded-3xl shadow-sm space-y-8">
            <div className="flex items-center space-x-2 text-atelier-charcoal border-b border-atelier-sand pb-4">
              <Calculator size={18} className="text-atelier-sienna" />
              <span className="text-xs font-bold tracking-widest uppercase">Kriteria Ruangan</span>
            </div>

            {/* Room Type Selector */}
            <div className="space-y-3">
              <label className="text-[10px] tracking-widest uppercase text-atelier-charcoal-light font-bold block">
                1. Tipe Area Proyek
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'living', label: 'Ruang Tamu' },
                  { id: 'kitchen', label: 'Dapur & Pantry' },
                  { id: 'bedroom', label: 'Kamar Tidur' },
                  { id: 'whole', label: 'Seluruh Rumah' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setRoomType(t.id as any)}
                    className={`py-3 px-4 text-left text-xs transition-all duration-300 border rounded-xl font-bold cursor-pointer ${
                      roomType === t.id
                        ? 'bg-atelier-sienna text-white border-atelier-sienna shadow-sm'
                        : 'bg-transparent text-atelier-charcoal/70 border-atelier-sand hover:border-atelier-sienna/50'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Room Size Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-[10px] tracking-widest uppercase text-atelier-charcoal-light font-bold">
                  2. Perkiraan Luas Area (m²)
                </label>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    value={roomSize}
                    onChange={(e) => setRoomSize(Math.max(1, Math.min(1000, Number(e.target.value))))}
                    className="w-16 border border-atelier-sand rounded-lg text-center text-xs py-1 font-bold text-atelier-charcoal focus:border-atelier-sienna focus:outline-none"
                  />
                  <span className="text-xs text-atelier-charcoal-light font-bold">m²</span>
                </div>
              </div>
              
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={roomSize}
                onChange={(e) => setRoomSize(Number(e.target.value))}
                className="w-full accent-atelier-sienna cursor-pointer bg-atelier-sand"
              />
              <div className="flex justify-between text-[9px] text-atelier-charcoal-light font-mono font-bold">
                <span>10 m²</span>
                <span>130 m²</span>
                <span>250 m²</span>
              </div>
            </div>

            {/* Design Service Level Tier */}
            <div className="space-y-3">
              <label className="text-[10px] tracking-widest uppercase text-atelier-charcoal-light font-bold block">
                3. Tingkat Layanan Desain
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'essential',
                    title: 'Essential Concept',
                    desc: 'Desain denah tata ruang 2D, moodboard dasar, dan visualisasi 3D standard.',
                    rate: 'Rp 150.000 / m²',
                  },
                  {
                    id: 'signature',
                    title: 'FurniSphere Signature',
                    desc: 'Rancangan 3D Photorealistic lengkap, gambar kerja mekanikal-elektrikal, kustom furnitur.',
                    rate: 'Rp 350.000 / m²',
                  },
                  {
                    id: 'avant',
                    title: 'Avant-Garde Luxe',
                    desc: 'Signature + supervisi berkala kontraktor, seleksi seni pajangan, material impor eksklusif.',
                    rate: 'Rp 650.000 / m²',
                  },
                ].map((tier) => {
                  const isSelected = designTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setDesignTier(tier.id as any)}
                      className={`p-4 border rounded-2xl transition-all duration-300 cursor-pointer flex items-start space-x-3 select-none ${
                        isSelected
                          ? 'border-atelier-sienna bg-atelier-sand/20'
                          : 'border-atelier-sand bg-transparent hover:border-atelier-sienna/50'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border border-atelier-sienna mt-1 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-atelier-sienna text-white' : ''
                      }`}>
                        {isSelected && <Check size={10} />}
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-sans font-bold text-xs text-atelier-charcoal">
                            {tier.title}
                          </h4>
                          <span className="font-mono text-[9px] text-atelier-sienna font-bold">
                            {tier.rate}
                          </span>
                        </div>
                        <p className="font-sans text-[10px] text-atelier-charcoal-light leading-normal mt-1 font-normal">
                          {tier.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Center Column: Live Calculations Display (4 Cols) */}
          <div className="lg:col-span-4 bg-[#1A1A1A] text-white p-8 border border-white/10 rounded-3xl flex flex-col justify-between h-full min-h-[500px] shadow-xl">
            
            <div>
              <div className="flex items-center space-x-1.5 text-atelier-sienna text-[9px] tracking-widest uppercase font-bold mb-6">
                <span>Rincian Estimasi Biaya</span>
              </div>

              {/* Specs parameters recap */}
              <div className="mb-8 border-b border-white/10 pb-4">
                <h3 className="font-sans text-2xl text-white font-extrabold tracking-tight mb-2">
                  FurniSphere Proposal
                </h3>
                <span className="text-xs text-white/60 block capitalize font-normal">
                  {roomType === 'whole' ? 'Seluruh Rumah' : `${roomType} Area`} • {roomSize}m² • {designTier} Tier
                </span>
              </div>

              {/* Estimate Details */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold">Layanan Gambar Desain</span>
                    <span className="text-xs text-white/60 font-normal">Fee Arsitek & Desainer</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-white">
                    {formatIDR(estimates.designFee)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold">Konstruksi & Material</span>
                    <span className="text-xs text-white/60 font-normal">Estimasi Vendor & Kontraktor</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-white">
                    {formatIDR(estimates.buildFee)}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-5">
                  <div>
                    <span className="text-[10px] text-atelier-sienna uppercase tracking-widest block font-bold">Estimasi Durasi</span>
                    <span className="text-xs text-white/60 font-normal">Hingga Serah Terima Kunci</span>
                  </div>
                  <span className="font-sans text-lg text-atelier-sienna font-extrabold">
                    ~ {estimates.durationWeeks} Minggu
                  </span>
                </div>
              </div>
            </div>

            {/* Grand Total cost */}
            <div className="mt-12 border-t border-white/10 pt-6">
              <span className="text-[9px] text-white/40 uppercase tracking-widest block mb-1 font-bold">
                Akumulasi Total Anggaran (IDR)
              </span>
              <h4 className="font-sans text-3xl sm:text-4xl text-atelier-sienna font-extrabold leading-none mb-2">
                {formatIDR(estimates.totalCost)}
              </h4>
              <p className="font-sans text-[10px] text-white/40 leading-relaxed font-normal">
                *Estimasi ini bersifat indikatif awal. Penawaran harga resmi (RAB) yang presisi akan diajukan usai survey lapangan komprehensif.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Booking Form (4 Cols) */}
          <div className="lg:col-span-4 bg-white border border-atelier-sand p-8 rounded-3xl shadow-sm">
            <div className="flex items-center space-x-2 text-atelier-charcoal border-b border-atelier-sand pb-4 mb-6">
              <Calendar size={18} className="text-atelier-sienna" />
              <span className="text-xs font-bold tracking-widest uppercase">Jadwal Konsultasi</span>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="bookingForm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] tracking-widest uppercase text-atelier-charcoal-light font-bold block">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-3.5 text-atelier-charcoal/30" />
                      <input
                        required
                        type="text"
                        placeholder="Contoh: Alfin Dwiyanto"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-atelier-sand rounded-xl pl-10 pr-4 py-3 text-xs focus:border-atelier-sienna focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] tracking-widest uppercase text-atelier-charcoal-light font-bold block">
                      Alamat Email
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-3.5 text-atelier-charcoal/30" />
                      <input
                        required
                        type="email"
                        placeholder="Contoh: alfin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-atelier-sand rounded-xl pl-10 pr-4 py-3 text-xs focus:border-atelier-sienna focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] tracking-widest uppercase text-atelier-charcoal-light font-bold block">
                      Nomor WhatsApp
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-3.5 text-atelier-charcoal/30" />
                      <input
                        required
                        type="text"
                        placeholder="Contoh: 081234567890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-atelier-sand rounded-xl pl-10 pr-4 py-3 text-xs focus:border-atelier-sienna focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] tracking-widest uppercase text-atelier-charcoal-light font-bold block">
                      Catatan / Kebutuhan Khusus
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan impian gaya ruang atau kendala arsitektural Anda..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#F8F9FA] border border-atelier-sand rounded-xl px-4 py-3 text-xs focus:border-atelier-sienna focus:outline-none transition-all font-medium"
                    />
                  </div>

                  {/* Dynamic calculation attachment disclaimer */}
                  <div className="bg-atelier-sand/20 p-3.5 border border-atelier-sand rounded-xl flex items-start space-x-2">
                    <FileCheck2 size={14} className="text-atelier-sienna flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] text-atelier-charcoal-light leading-relaxed font-normal">
                      Data estimasi sebesar <strong>{formatIDR(estimates.totalCost)}</strong> akan dilampirkan otomatis untuk membantu tim desainer kami memahami brief Anda.
                    </span>
                  </div>

                  {/* Booking CTA Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-atelier-sienna hover:bg-atelier-sienna-light text-white text-xs tracking-widest uppercase font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm rounded-full cursor-pointer group"
                  >
                    <span>Kirim Pengajuan Jadwal</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="successState"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 bg-atelier-sienna/10 border border-atelier-sienna flex items-center justify-center rounded-full mx-auto mb-6">
                    <Check className="text-atelier-sienna w-6 h-6" />
                  </div>
                  <h4 className="font-sans text-xl font-extrabold text-atelier-charcoal mb-2">
                    Pengajuan Terkirim!
                  </h4>
                  <p className="font-sans text-xs text-atelier-charcoal-light leading-relaxed font-normal mb-6">
                    Terima kasih, <strong>{name}</strong>. Tim desainer utama FurniSphere akan menghubungi nomor WhatsApp Anda (<strong>{phone}</strong>) dalam waktu 1x24 jam kerja untuk memverifikasi tanggal konsultasi perdana Anda.
                  </p>
                  
                  {/* Reset form button */}
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="text-atelier-sienna font-sans text-xs tracking-widest uppercase font-bold hover:underline cursor-pointer"
                  >
                    Atur Pertemuan Baru
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
