# Portfolio Web Specification & Antigravity Setup

Dokumentasi arsitektur dan panduan setup Next.js untuk website portofolio **Dicky Muzakki** (Full Stack Developer / Software Engineer), diadaptasi dari referensi visual dark-modern grid aesthetic.

---

## 1. Project Overview & Features

- **Framework**: Next.js 14/15 (App Router) + Tailwind CSS + Lucide / React Icons
- **Design Tokens**:
  - **Background**: `#0c0d0e` (Dark matte background) dengan CSS linear-gradient grid effect berjarak `44px 44px`.
  - **Accent Color**: Orange (`#f97316` / `#ea580c`) terinspirasi dari referensi visual button & active states.
  - **Typography & Sizing**: Clean compact scale (headings `text-2xl` - `text-3xl`, body `text-xs` - `text-sm`, images capped `h-44` to avoid bulky oversized layouts).
- **Core Sections**:
  1. **Floating Pill Navigation**: Sticky pill bar dengan link anchor `#about`, `#skills`, `#experience`, `#projects`, `#contact`.
  2. **Hero & About Me**: 
     - Kolom kiri: Role badge, greeting, resume summary, contact CTA button, dan kartu pendidikan/sertifikasi.
     - Kolom kanan: Foto profil frame compact (grayscale filter with hover reveal).
  3. **Technical Skills**: Grid icon tools (.NET, C#, Java Spring Boot, Angular, PHP, Oracle, Redis, Git, dll).
  4. **Working Experience**: Riwayat kerja di BPJS Kesehatan dan PT Pamapersada Nusantara beserta bullet point teknis.
  5. **Featured Projects**: Filter pill (`All` / `Featured`) menampilkan kartu project (PT Suryaraya Rubberindo Industries, PT Astra Honda Motor, dll).
  6. **Contact & Footer**: Dark card dengan direct mail & phone links.

---

## 2. Instalasi & Setup Cepat di Next.js

Jalankan perintah berikut di terminal:

```bash
# 1. Buat project Next.js baru dengan Tailwind CSS
npx create-next-app@latest dicky-portfolio --typescript --tailwind --app --eslint

cd dicky-portfolio

# 2. Install icon library
npm install react-icons
```

### Konfigurasi Struktur Berkas
Pindahkan atau salin komponen `Portfolio.tsx` ke dalam folder `app/`:

```
dicky-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          <-- Impor <PortfolioPage /> di sini
│   └── globals.css
├── public/
│   └── profile.jpg       <-- Letakkan foto pas formal Anda di sini
├── tailwind.config.ts
└── package.json
```

Di dalam `app/page.tsx`:
```tsx
import PortfolioPage from "./Portfolio";

export default function Home() {
  return <PortfolioPage />;
}
```

---

## 3. Image Assets Configuration

Untuk mengganti foto sample dengan foto Anda:
1. Simpan foto Mas Dicky di folder `public/profile.jpg`.
2. Pada file `Portfolio.tsx`, ubah atribut `src` foto di hero section:
   ```tsx
   <img
     src="/profile.jpg"
     alt="Dicky Muzakki"
     className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition duration-500"
   />
   ```

---

## 4. Antigravity Prompting & Modularity Directives

Gunakan instruksi ini jika Anda ingin memerintahkan AI / Antigravity agent untuk memperluas fungsionalitas:

> *"Tambahkan interaktivitas modal popup untuk setiap project card agar menampilkan arsitektur sistem, ERD diagram sederhana, dan demo URL ketika tombol kartu diklik."*
> 
> *"Hubungkan formulir contact form pada footer ke EmailJS atau Resend API melalui Next.js Server Action (`actions/sendEmail.ts`)."*