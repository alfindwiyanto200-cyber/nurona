# RANCANGAN DESAIN UI/UX - ATELIER INTERIOR DESIGN

Dokumen ini menjelaskan cetak biru (blueprint) arsitektur visual, interaksi, dan struktur animasi dari website **Atelier - Interior Design Studio**. Website ini dirancang untuk memberikan pengalaman digital imersif yang mencerminkan kualitas keahlian dan kepekaan artistik dari sebuah biro desain interior premium.

---

## 1. Filosofi Desain & Identitas Visual

### 1.1 Konsep Utama: *Warm Minimalism* (Minimalisme Hangat)
Desain interior modern tidak lagi sekadar dingin dan kaku. Biro kami berfokus pada keseimbangan antara kesederhanaan bentuk, kehangatan material alami, serta fungsionalitas ruang yang tinggi. UI website ini mencerminkan filosofi tersebut melalui penggunaan elemen visual yang bersih, ruang negatif yang lega (generous negative space), dan transisi yang halus.

### 1.2 Palet Warna (Design Tokens)
Palet warna menggunakan warna-warna bumi (earthy tones) yang menenangkan, berkelas, dan memberikan kontras yang sempurna untuk menyoroti foto portofolio:
*   **Charcoal Obsidian (`#121212` / `#1E1E1E`):** Warna dasar gelap untuk teks utama, tombol primer, dan area dramatis. Memberikan kesan kokoh dan mewah.
*   **Warm Alabaster (`#FBFBFA`):** Latar belakang utama halaman. Warna off-white yang lembut di mata dan memberikan suasana lapang.
*   **Sand Drift (`#F4EFEA`):** Warna aksen latar belakang sekunder, memberikan tekstur hangat seperti pasir hangat atau semen halus.
*   **Sienna Terra (`#AF8560`):** Warna aksen utama (tembaga/tanah liat terakota) untuk elemen aktif, hover, dan sorotan penting.

### 1.3 Tipografi
Kombinasi font kurasi premium yang mencerminkan keindahan arsitektural:
*   **Font Header (Display):** *Playfair Display* (Serif kelas tinggi) atau *Syne* (Geometris kontemporer) untuk judul besar yang berani dan artistik.
*   **Font Body:** *Inter* (Sans-serif) untuk keterbacaan optimal pada teks penjelasan dan angka-angka teknis.

---

## 2. Struktur Navigasi & Arsitektur Parallax

Website dirancang sebagai **Single-Page Application (SPA) Imersif** dengan navigasi yang mengalir mulus menggunakan efek gerak paralaks bertingkat (multi-layered parallax scroll):

```
+-------------------------------------------------------------+
| [NAVBAR] Brand Logo | Galeri | Visualizer | Kalkulator | Konsul |
+-------------------------------------------------------------+
|                                                             |
| 1. HERO BANNER (Parallax Layered Image & Text)              |
|    - Layer Belakang: Gambar Interior Resolusi Tinggi (0.6x) |
|    - Layer Tengah: Teks Headline Artistik (1.0x)            |
|    - Layer Depan: Elemen Bingkai Arsitektural (1.2x)         |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
| 2. ABOUT & ETHOS (Smooth Fade-Up)                           |
|    - Narasi filosofis studio dan nilai arsitektur kami.     |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
| 3. INTERACTIVE SPACE VISUALIZER (Live Preview)              |
|    - Pengunjung dapat memilih gaya (Japandi, Luxury, dll.)  |
|    - Visual berganti secara dinamis dengan transisi halus.  |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
| 4. PORTFOLIO GALERI (Filtered Grid & Detail View)           |
|    - Filter: Ruang Tamu, Dapur, Kamar Tidur, Ruang Kerja.   |
|    - Grid dengan efek hover paralaks pada gambar.            |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
| 5. INTERACTIVE MATERIAL MOOD BOARD (Drag/Click Composer)     |
|    - Menyusun kombinasi bahan (Marmer, Kayu Oak, Kuningan). |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
| 6. KALKULATOR BUDGET & RESERVASI (Estimasi Real-time)      |
|    - Kalkulator interaktif berdasarkan luas ruang & tipe.   |
|    - Form reservasi konsultasi langsung.                     |
|                                                             |
+-------------------------------------------------------------+
| [FOOTER] Informasi Kontak, Media Sosial, Hak Cipta         |
+-------------------------------------------------------------+
```

---

## 3. Fitur Interaktif Industri Desain Interior

Untuk memenuhi kebutuhan nyata di industri desain interior, website ini dilengkapi dengan 3 modul interaktif yang berfungsi penuh:

### 3.1 Live Room Style Visualizer (Visualisasi Gaya Ruang)
Memungkinkan klien potensial memahami berbagai konsep arsitektur secara instan:
*   **Gaya Japandi:** Minimalis Jepang-Skandinavia dengan kayu terang dan linen.
*   **Modern Luxury:** Elegan dengan marmer hitam, pencahayaan hangat, dan aksen logam emas.
*   **Industrial Loft:** Karakter kuat dengan bata ekspos, logam hitam, dan kayu rustik.
*   **Classic Parisian:** Anggun dengan panel dinding cetak (moulding), warna putih bersih, dan furnitur klasik modern.

### 3.2 Dynamic Interior Budget Calculator (Kalkulator Anggaran)
Mengurangi hambatan komunikasi awal mengenai harga dengan memberikan estimasi instan:
*   **Parameter:** Jenis ruangan (Ruang Tamu, Kamar Tidur, Dapur, Seluruh Rumah), Luas Area ($m^2$), dan Level Desain (Essential, Signature, Avant-Garde).
*   **Output Dinamis:** Estimasi biaya desain, biaya material & furnitur, durasi proyek, serta tombol langsung untuk "Pesan Jadwal Konsultasi" yang otomatis mengisi data kalkulator ke formulir kontak.

### 3.3 Material Mood Board Builder (Penyusun Papan Suasana)
Sesi penyusunan material adalah jantung dari diskusi desain interior:
*   Pengguna dapat memilih dan mengombinasikan tekstur (Oak Wood, Carrara Marble, Brushed Brass, Bouclé Fabric, Terrazzo, Emerald Velvet).
*   Menampilkan kecocokan warna dan harmoni tekstur secara langsung di layar dengan efek visual tumpukan kartu estetik.

---

## 4. Mekanisme Animasi Parallax & Transisi

Semua animasi dikelola dengan performa tinggi menggunakan **Framer Motion** untuk memastikan kelancaran rendering:
1.  **Parallax Scroll pada Hero:** Mengikat posisi scroll (`scrollY`) ke transformasi posisi Y teks headline dan latar belakang gambar menggunakan `useTransform`.
2.  **Staggered Fade-In:** Elemen kartu portofolio muncul satu per satu dengan penundaan bertingkat (staggered delay) saat masuk ke area pandang pembaca (*viewport*).
3.  **Hover Magnify:** Gambar portofolio memiliki efek *zoom-in* lambat sebesar `1.05x` dengan filter pencahayaan saat diarahkan oleh kursor mouse, memberikan kedalaman ruang digital yang dramatis.
4.  **Layout Transitions:** Pergantian kategori galeri portofolio menggunakan animasi tata letak dinamis (`layoutId`) untuk pergeseran garis bawah filter aktif.

---

## 5. Kesimpulan Cetak Biru (Blueprint)
Website **Atelier** menyatukan keindahan seni interior dengan teknologi web interaktif berkinerja tinggi. Kombinasi dari tipografi arsitektural, transisi paralaks yang halus, dan alat bantu pengambilan keputusan (kalkulator budget & visualizer) membuat website ini menjadi saluran pemasaran digital yang sangat profesional, persuasif, dan mengesankan bagi klien kelas atas.
