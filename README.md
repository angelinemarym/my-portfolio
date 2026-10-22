# Angeline Mary Marchella — Personal Portfolio

Portfolio personal menggunakan Next.js App Router, TypeScript, Tailwind CSS v4, dan struktur shadcn/ui. Dibuat sebagai project lokal, belum dipublikasikan.

## Menjalankan

Gunakan Node.js 22 LTS atau lebih baru dan npm.

```sh
npm ci
npm run dev
```

Buka http://127.0.0.1:3000. Untuk produksi:

```sh
npm run typecheck
npm test
npm run build
npm start
```

## Mengubah konten

Edit `src/content/portfolio.ts` untuk nama, copy, research, proyek, venture, email, dan tautan sosial. Nama, role, headline, dan subheadline berasal dari brief. Entri proyek adalah contoh struktur konten, bukan klaim pekerjaan yang sudah dilakukan. Pendidikan dan pengalaman memakai tanggal dari pemilik serta rincian yang diparafrasekan dari profil LinkedIn. Projects dan Ventures yang belum dilengkapi tetap berupa placeholder; Research menampilkan tiga publikasi yang terverifikasi melalui LinkedIn.

Isi `profile.email` dengan alamat terverifikasi untuk mengaktifkan tombol `mailto:`. Isi `profile.links` untuk menampilkan tautan sosial. Sampai itu diisi, Contact menampilkan pesan coming soon; tidak ada form yang berpura-pura mengirim pesan. Tambahkan URL studi kasus/repository setelah kontennya tersedia. Kartu placeholder sengaja berupa artikel, tanpa tautan palsu.

Situs menggunakan `lang="en"` karena konten portfolio berbahasa Inggris. Instruksi ini berbahasa Indonesia.

## Struktur

- `src/app/`: halaman, layout, metadata, favicon, styles.
- `src/components/portfolio/`: hero, navigasi mobile, section portfolio.
- `src/components/ui/`: Button dengan Radix Slot + CVA, Badge, BeamWordmarkFooter.
- `src/lib/`: `cn()` dan perhitungan beam.
- `src/content/portfolio.ts`: data konten yang dapat diedit.
- `components.json`: konfigurasi CLI shadcn dan alias `@/`.
- `tests/beam.test.ts`: batas pointer, pergerakan idle, smoothing lintas frame rate.

Tambahkan komponen shadcn melalui `npx shadcn@latest add <nama-komponen>`. Komponen ditempatkan pada `src/components/ui/` sesuai alias `@/components/ui`.

## Animasi dan aksesibilitas

`BeamWordmarkFooter` diadaptasi dari komponen lampiran milik pengguna (referensi Kedhar / Night Shift). Warna ditetapkan ke burgundy dan wordmark ANGELINE; tautan demo dan identitas perusahaan demo tidak digunakan. Pastikan hak penggunaan referensi sesuai kebutuhan sebelum publikasi komersial.

Hero memakai wash, garis vertikal, dua beam diagonal, grain, dan pointer glow yang diadaptasi dari footer, bersama fungsi drift, beamTarget, dan approach dari referensi. Posisi pointer berada dalam closure dan diterapkan lewat CSS variables tanpa render React per frame. Animasi hero berhenti ketika section tidak terlihat atau tab tersembunyi. Footer berhenti ketika tidak terlihat. Kontrol Pause motion menjeda drift keduanya; glow hero dan footer masih mengikuti input pointer seperti perilaku referensi. `prefers-reduced-motion` menonaktifkan drift, reveal, hop, dan smooth scrolling. Navigasi mobile mendukung keyboard, Escape, dan fokus otomatis. Semua section memiliki anchor dan terdapat skip link.

Font memakai system sans-serif dan Georgia sehingga build tidak perlu mengunduh font. Visual proyek dibuat dengan CSS. Foto hero memakai foto lokal pengguna pada `public/hero_picture.jpg`, dirender dengan Next Image. `src/components/ui/tilt-card.tsx` mengadaptasi referensi InteractiveTiltCard menggunakan Framer Motion, spring tilt, glare, dan dukungan reduced motion. Kartu berada di kanan teks pada desktop dan di bawah teks pada layar hingga 900px.

## Sebelum dipublikasikan

Lengkapi placeholder dan kontak terverifikasi. Ubah `robots` di `src/app/layout.tsx` dari `index: false, follow: false` ketika konten sudah siap. Isi metadata/domain Open Graph dan tambahkan gambar profil jika diinginkan. Deployment dapat memakai hosting yang mendukung Next.js. Tidak ada API key atau environment variable yang diperlukan untuk versi ini.

## Dokumentasi stack

- [Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [shadcn/ui](https://ui.shadcn.com/docs/installation/next)

## About folder cards

`src/components/ui/glass-folder-card.tsx` menyediakan folder bergaya kaca yang terinspirasi referensi Glass Folder Cards. Klik atau tekan Enter/Space untuk membuka, Escape untuk menutup. Tautan yang muncul mengarah ke Research, Projects, dan Ventures. Animasi hover hanya aktif untuk pointer presisi dan menghormati reduced motion.

## Education & Experience

Tautan dari About menuju `#education-experience`, tepat setelah section About. Data berada di `src/content/experience.ts`; komponennya `src/components/portfolio/education-experience.tsx`. Tanggal mengikuti brief pengguna. Deskripsi diringkas dari [profil LinkedIn](https://www.linkedin.com/in/angeline-mary-marchella/) dan [detail pendidikan](https://www.linkedin.com/in/angeline-mary-marchella/details/education/). S2 September 2025–Juli 2027 ditandai in progress/expected completion. Semua gambar dan logo memakai aset lokal `public/experience/`. Klik periode untuk melihat detail; Escape menutupnya.

Referensi Product Timeline Hyperiux di 21st.dev dipakai sebagai arah konsep; preview tidak selesai dimuat dan salinan kode memerlukan paket berbayar. Implementasi section ini ditulis sendiri tanpa mengambil kode berbayar.

## Research & Publications

Data paper berada di `src/content/publications.ts`. Ketiga paper diverifikasi terhadap [daftar publikasi LinkedIn](https://www.linkedin.com/in/angeline-mary-marchella/details/publications/). Tombol Read paper membuka laman penerbit pada tab baru, bukan mengklaim akses full-text gratis. Ringkasan ditulis ulang secara singkat.

- Heterogeneous Tabular Data Query and Analysis System Based on Large Language Models — Frontiers of Computer Science, 2026: https://journal.hep.com.cn/fcs/EN/10.1007/s11704-026-60020-2
- BEEXPERT — ICoICT 2025 / IEEE: https://ieeexplore.ieee.org/document/11192932
- Convolutional Neural Network Algorithms for Car Accident Classification — ICAICTA 2023, tampil di IEEE Xplore pada 2024 sesuai profil: https://ieeexplore.ieee.org/document/10390261

Kartu menggunakan native CSS sticky stacking yang terinspirasi [Systaliko Cards Stack](https://systaliko-ui.vercel.app/docs/cards/cards-stack). Pada reduced motion atau viewport pendek, kartu kembali menjadi daftar biasa. Komponen reusable berada di `src/components/ui/cards-stack.tsx`; tampilan publikasi di `src/components/portfolio/publication-cards.tsx`.
