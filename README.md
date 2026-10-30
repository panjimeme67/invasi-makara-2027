# Invasi Makara 2027

Website pengenalan Universitas Indonesia untuk siswa SMA Negeri 8 Jakarta, dibangun dengan Next.js, TypeScript, dan Recharts.

## Menjalankan secara lokal
1. Install Node.js 20 atau lebih baru.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.
4. Buka http://localhost:3000.

## Mengisi konten
- Data alumni: `src/data/alumni.ts`
- Data fakultas: `src/data/fakultas.ts`
- Tipe data dan jalur seleksi: `src/data/types.ts`

Data alumni dan fakultas sengaja dikosongkan. Masukkan data yang sudah diverifikasi oleh tim; statistik dihitung otomatis dari data alumni.

Setiap alumni memiliki `id`, `nama`, `tahunMasukUI`, `fakultasSlug`, `programStudi`, dan `jalurSeleksi` (SNBP, SNBT, SIMAK, TS, atau PPKB). Field tahun lulus SMA, bio, dan foto bersifat opsional.

Setiap fakultas memiliki `slug`, `nama`, `singkatan`, serta daftar sejarah, budaya, fun facts, pencapaian, program studi, dan prospek kerja. Halaman detail dibuat berdasarkan slug.

## Halaman
- `/`: Beranda
- `/tentang`: Tentang Invasi Makara
- `/alumni`: Direktori alumni
- `/statistik`: Statistik per fakultas dan jalur seleksi
- `/fakultas`: Daftar fakultas
- `/fakultas/[slug]`: Detail fakultas

## Privasi
Pastikan memperoleh persetujuan sebelum mempublikasikan profil atau foto alumni. Jangan masukkan data pribadi yang tidak diperlukan.