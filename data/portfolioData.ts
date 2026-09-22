export interface SkillItem {
  name: string;
  level?: string;
  category: "Programming & Development" | "Database & Data Management" | "Development Tools";
  iconName: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  division?: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category?: string;
  projectType: string;
  featured: boolean;
  period?: string;
  summary: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  field: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credential?: string;
  iconType?: "mikrotik" | "azure";
}

export const portfolioData = {
  personal: {
    name: "Dicky Muzakki",
    title: "Full Stack Developer | Software Engineer",
    shortBio: "Software Engineer lulusan D3 Manajemen Informatika Politeknik Astra (IPK 3,66/4,00) dengan rekam jejak hands-on mengembangkan aplikasi enterprise, otomatisasi web, sistem IoT, hingga manajemen database berkinerja tinggi. Terbiasa memecahkan alur kerja operasional yang kompleks di lingkungan korporasi maupun industri manufaktur menjadi solusi perangkat lunak yang cepat, stabil, dan scalable. Siap memberikan dampak nyata dan nilai tambah langsung bagi tim engineering Anda.",
    location: "Bekasi / Jakarta, Indonesia",
    status: "Terbuka untuk Peluang Baru",
    email: "dickymuzakki06@gmail.com",
    phone: "(+62) 898-5276-326",
    whatsappUrl: "https://wa.me/628985276326?text=Halo%20Dicky,%20saya%20tertarik%20dengan%20profil%20portofolio%20Anda.",
    linkedinUrl: "https://www.linkedin.com/in/dickymuzakki/",
    githubUrl: "https://github.com/SeekorApel",
    resumeUrl: "/CV_Dicky_Muzakki.pdf",
  },

  education: [
    {
      institution: "Politeknik Astra, Bekasi – Indonesia",
      degree: "D3 Manajemen Informatika",
      field: "IPK: 3,66 / 4,00",
      period: "2022 – 2025",
    },
  ] as EducationItem[],

  certifications: [
    {
      name: "MTCNA (MikroTik Certified Network Associate)",
      issuer: "MikroTik",
      credential: "2406NA3336",
      year: "2024",
      iconType: "mikrotik",
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      credential: "wCNV2-48EN",
      year: "2024",
      iconType: "azure",
    },
  ] as CertificationItem[],

  skills: [
    // Programming & Development
    { name: "C#", category: "Programming & Development", iconName: "TbBrandCSharp" },
    { name: "Java", category: "Programming & Development", iconName: "FaJava" },
    { name: "PHP", category: "Programming & Development", iconName: "SiPhp" },
    { name: "JavaScript", category: "Programming & Development", iconName: "SiJavascript" },
    { name: "ASP.NET", category: "Programming & Development", iconName: "SiDotnet" },
    { name: "Java Spring Boot", category: "Programming & Development", iconName: "SiSpring" },
    { name: "CodeIgniter", category: "Programming & Development", iconName: "SiCodeigniter" },
    { name: "Angular", category: "Programming & Development", iconName: "SiAngular" },
    // Database & Data Management
    { name: "Microsoft SQL Server", category: "Database & Data Management", iconName: "DiMsqlServer" },
    { name: "MySQL", category: "Database & Data Management", iconName: "SiMysql" },
    { name: "Oracle", category: "Database & Data Management", iconName: "GrOracle" },
    { name: "Redis", category: "Database & Data Management", iconName: "SiRedis" },
    // Development Tools
    { name: "Git", category: "Development Tools", iconName: "SiGit" },
    { name: "GitLab", category: "Development Tools", iconName: "SiGitlab" },
    { name: "Bitbucket", category: "Development Tools", iconName: "SiBitbucket" },
  ] as SkillItem[],

  experiences: [
    {
      company: "BPJS Kesehatan",
      role: "Full Stack Developer",
      division: "Divisi SPPTI",
      period: "Nov 2025 – Sep 2026",
      location: "Jakarta, Indonesia",
      description: "Mengembangkan dan melakukan perubahan pada aplikasi internal BPJS Kesehatan Divisi SPPTI berdasarkan Change Request (CR) melalui siklus pengembangan end-to-end hingga deployment ke production.",
      achievements: [
        "Mengembangkan dan melakukan perubahan pada 5 aplikasi internal berdasarkan Change Request (CR) dengan menangani 23 task, mencakup modifikasi fitur existing, penambahan fitur baru, perubahan logic, validasi, dan hak akses.",
        "Mengikuti siklus pengembangan mulai dari implementasi, Quality Control (QC), User Acceptance Test (UAT), perbaikan feedback, hingga deployment ke production.",
        "Berkolaborasi dengan Lead dalam pembagian task serta dengan tim QC dan user selama proses testing dan penyelesaian perubahan aplikasi.",
        "Melakukan troubleshooting dan penyelesaian issue selama proses development dan testing.",
        "Menjaga kualitas implementasi serta dokumentasi perubahan untuk mendukung maintenance dan pengembangan lanjutan.",
      ],
      technologies: ["Angular", "ASP.NET", "C#", "Java Spring Boot", "PHP CodeIgniter", "SQL Server", "JavaScript", "REST API", "GitLab", "Bitbucket"],
    },
    {
      company: "PT Pamapersada Nusantara",
      role: "Full Stack Developer (Magang)",
      division: "Divisi Digital Tech & Innovation Analyst",
      period: "Jan 2025 – Jul 2025",
      location: "Jakarta & Site Area, Indonesia",
      description: "Merancang dan mengimplementasikan sistem otomatisasi IoT, pelacakan armada dump truck berbasis RFID, serta manajemen perangkat jarak jauh.",
      achievements: [
        "Merancang dan mengembangkan sistem tracking dan analisis waktu operasional dump truck berbasis UHF RFID menggunakan ASP.NET dan SQL Server, dengan pencatatan otomatis hingga 10 meter dan respons rata-rata 0,65 detik.",
        "Mengembangkan sistem refueling automation berbasis ASP.NET yang terintegrasi dengan Redis, LCR600, dan UHF RFID, mencapai akurasi pembacaan tag 100% pada jarak 10 meter.",
        "Mengimplementasikan pencatatan log berbasis FTP pada Mini PC untuk penyimpanan rekaman CCTV kabin dan depan truk secara otomatis, menggantikan penggunaan memory card dan menerapkan penghapusan log mingguan.",
        "Mengimplementasikan dan mengonfigurasi Intel Endpoint Management Assistant (EMA) untuk pengelolaan jarak jauh terhadap 117 unit Mini PC dump truck.",
        "Mendokumentasikan hasil pengembangan dan implementasi sebagai bagian dari kebutuhan teknis dan evaluasi project.",
      ],
      technologies: ["ASP.NET", "C#", "SQL Server", "Redis", "UHF RFID", "Intel EMA", "FTP", "Mini PC"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "project-imaps",
      title: "IMAPS",
      client: "BPJS Kesehatan",
      category: "Enterprise e-Procurement",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/imaps.png",
      summary: "Sistem e-Procurement internal BPJS Kesehatan untuk tata kelola pengadaan barang/jasa dan evaluasi rekanan. Mengimplementasikan penyesuaian Change Request (CR) mencakup modul evaluasi kinerja vendor, data KBLI, penyesuaian aturan validasi input pada alur pengadaan, mekanisme multi-select bulk action pada penetapan penyedia, serta konfigurasi hak akses peran UKPF dan Auditor.",
      description: "Bertanggung jawab menyelesaikan rangkaian Change Request (CR) pengadaan pada siklus end-to-end. Mengembangkan modul baru evaluasi kinerja vendor yang memisahkan form entri penilaian dan rekapitulasi data rekanan, mengimplementasikan pengelolaan data kontak vendor dengan mekanisme soft delete untuk menjaga integritas data riwayat, serta menambahkan modul referensi KBLI. Melakukan penyesuaian aturan bisnis pada proses pengadaan dengan mengubah parameter aanwijzing menjadi non-mandatory, mengintegrasikan navigasi detail lelang E-Reverse Auction pada monitoring pengadaan, menambahkan interaksi batch check/uncheck all pada penetapan penyedia, serta mengatur visibilitas menu dan hak akses peran berjenjang untuk User UKPF dan Auditor.",
      technologies: ["Java Spring Boot", "SQL Server", "JavaScript", "REST API", "Bitbucket"],
    },
    {
      id: "project-smartcorpu",
      title: "SmartCorpu",
      client: "BPJS Kesehatan",
      category: "Enterprise EdTech & HR System",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/smartcorpu.png",
      summary: "Platform Corporate University internal BPJS Kesehatan untuk manajemen diklat pegawai. Mengembangkan penyesuaian Change Request (CR) dan perbaikan bug pada form evaluasi, kalkulasi bantuan biaya pendidikan berbasis aturan IPK, pengiriman email laporan, serta notifikasi persetujuan pembelajaran.",
      description: "Bertanggung jawab menangani Change Request (CR) dan perbaikan bug pada siklus end-to-end. Memperbaiki penyimpanan data form evaluasi dan form esai agar input teks otomatis ter-clear saat opsi berganti. Menambahkan validasi kalkulasi bantuan biaya pendidikan SPP berdasarkan nilai IPK (100% vs 50%) dan opsi Partial Funded. Memperbaiki tampilan grafik batang dashboard yang menyusut, menambahkan validasi agar upload soal hanya menerima file Excel, memperbaiki pengiriman email laporan ke pengajar, serta menambahkan notifikasi persetujuan pembelajaran.",
      technologies: ["Angular", "PHP CodeIgniter", "SQL Server", "REST API", "GitLab"],
    },
    {
      id: "project-konanfirst",
      title: "KONAN FIRST",
      client: "BPJS Kesehatan",
      category: "Anti-Fraud & Regulatory Compliance",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/konan-first.jpeg",
      summary: "Sistem investigasi anti-fraud internal BPJS Kesehatan. Mengembangkan penyesuaian Change Request (CR) pada proses tindak lanjut penanganan kecurangan mencakup penyederhanaan menu aksi BAPK (Pembuatan BAPK, Sanksi, Pengembalian Kerugian, dan Detail) serta alur persetujuan (approval) Ketua untuk ubah, hapus, dan pembatalan dokumen BAPK.",
      description: "Bertanggung jawab merombak alur kerja pada modul Proses Tindak Lanjut Penanganan Kasus. Menyederhanakan navigasi menu menjadi satu tampilan terpadu melalui dropdown aksi (Pembuatan BAPK, Sanksi Kecurangan, Pengembalian Kerugian, dan menu Detail ringkasan). Mengembangkan fitur ubah, hapus, dan pembatalan dokumen BAPK yang memerlukan verifikasi persetujuan (approval) Ketua sebelum data tersimpan, serta menambahkan pilihan checklist pada form sanksi kecurangan.",
      technologies: ["Angular", "ASP.NET", "C#", "SQL Server", "REST API", "GitLab"],
    },
    {
      id: "project-aman-jkn",
      title: "AMAN JKN",
      client: "BPJS Kesehatan",
      category: "Enterprise Portal & Survey System",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/aman-jkn.jpeg",
      summary: "Sistem portal penunjang operasional dan kepesertaan BPJS Kesehatan. Mengembangkan penyesuaian Change Request (CR) mencakup pembuatan modul pengelolaan data Info JKN, implementasi fitur pembaruan data email profil peserta, serta pengembangan modul feedback dan evaluasi kepuasan peserta berbasis skor rating terintegrasi per menu.",
      description: "Bertanggung jawab mengimplementasikan rangkaian Change Request (CR) pada aplikasi AMAN JKN melalui siklus end-to-end. Membangun modul baru Info JKN dengan fungsionalitas manajemen data lengkap (CRUD) untuk pengelolaan dan publikasi informasi kepesertaan, mengembangkan fitur mutasi data profil peserta yang berfokus pada validasi dan pembaruan alamat email guna menjaga keakuratan data kontak pada basis data induk, serta merancang dan mengintegrasikan modul Survei Kepuasan Peserta yang menyediakan instrumen feedback interaktif dengan rating skala 1–5 bintang pada setiap menu aplikasi guna mengukur kepuasan pengguna secara granular.",
      technologies: ["Angular", "ASP.NET", "C#", "SQL Server", "REST API", "GitLab"],
    },
    {
      id: "project-sipp",
      title: "SIPP",
      client: "BPJS Kesehatan",
      category: "Public Service & SLA Tracking",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/sipp.png",
      summary: "Sistem penanganan keluhan dan informasi peserta JKN di fasilitas kesehatan dan kantor cabang nasional. Mengembangkan modul Change Request (CR) mencakup alur delegasi disposisi tiket khusus level Kedeputian Wilayah, mekanisme aksi konfirmasi dan kelengkapan berkas aduan peserta, serta penambahan atribut data aduan guna mengakomodasi informasi lokasi kejadian dan berkas lampiran.",
      description: "Bertanggung jawab mengimplementasikan penyesuaian Change Request (CR) pada sistem pengaduan nasional SIPP melalui siklus pengembangan end-to-end. Memperkuat model otorisasi Role-Based Access Control (RBAC) dengan menambahkan aksi Disposisi khusus bagi pengguna tingkat Kedeputian Wilayah untuk mendelegasikan tiket penanganan komplain secara hierarkis ke unit kerja operasional di bawah naungannya. Mengembangkan alur verifikasi data aduan melalui penambahan aksi Konfirmasi yang memungkinkan petugas meminta klarifikasi serta instruksi pengunggahan kelengkapan dokumen pendukung kepada peserta sebelum tiket diproses, serta memperkaya referensi parameter kanal aduan dengan menambahkan metadata lokasi kejadian dan pengelolaan file lampiran guna standardisasi pencatatan insiden.",
      technologies: ["Angular", "Java Spring Boot", "SQL Server", "REST API", "GitLab"],
    },
    {
      id: "project-monthly-planning",
      title: "Monthly Planning Application",
      client: "PT Suryaraya Rubberindo Industries",
      category: "Full Stack",
      projectType: "Enterprise Project",
      featured: true,
      period: "Jul 2024 – Des 2024",
      image: "/projects/monthly-planning.jpg",
      summary: "Digitalisasi sistem perencanaan produksi ban divisi PPIC dari spreadsheet Excel ke aplikasi web terintegrasi, mengotomatisasi formula kalkulasi produksi yang kompleks guna meminimalkan deviasi perhitungan dan mengurangi ketergantungan pada personel tunggal.",
      description: "Merancang dan mengembangkan aplikasi web terintegrasi untuk mentransformasi alur kerja manual perencanaan produksi ban divisi PPIC ke dalam platform digital modern. Memangkas waktu pembuatan monthly planning dari 1 bulan menjadi ±2 jam serta mengotomatisasi formula kalkulasi produksi guna meminimalkan resiko kesalahan hitung dan ketergantungan pada personel tunggal.",
      technologies: ["Java Spring Boot", "Angular", "Oracle Database", "REST API", "Git", "TypeScript"],
      liveUrl: "https://example.com/demo/sri-monthly-planning",
    },
    {
      id: "project-entry-production",
      title: "Entry Production Progress",
      client: "PT Astra Honda Motor",
      category: "Backend",
      projectType: "Enterprise Project",
      featured: true,
      period: "Mei 2024 – Jul 2024",
      image: "/projects/entry-production.jpg",
      summary: "Memigrasikan sistem pencatatan lini produksi manufaktur otomotif dari arsitektur legacy (JSP/Servlet) ke framework Spring sesuai spesifikasi kebutuhan fungsional sistem.",
      description: "Bertanggung jawab melakukan migrasi sistem pencatatan progres lini produksi manufaktur otomotif dari Java versi lama ke framework Spring dengan mengacu pada dokumen Spesifikasi Program (SP). Memastikan seluruh fungsionalitas pencatatan pada lini perakitan berjalan stabil sesuai kebutuhan teknis dan mendukung maintainability sistem jangka panjang.",
      technologies: ["Java Spring Boot", "JavaScript", "Oracle Database", "REST API", "Git"],
      liveUrl: "https://example.com/demo/ahm-entry-production",
    },
    {
      id: "project-student-academic-advising",
      title: "Student Academic Advising System",
      client: "Politeknik Astra",
      category: "Full Stack",
      projectType: "Enterprise Project",
      featured: true,
      period: "Jul 2023 – Okt 2023",
      image: "/projects/student-academic-advising.png",
      summary: "Aplikasi web pengelolaan bimbingan perwalian mahasiswa Politeknik Astra yang mencakup pengelompokan bimbingan, pencatatan sesi perwalian, dan pelaporan kegiatan akademik yang terintegrasi dengan Sistem Informasi Akademik (SIA).",
      description: "Merancang dan mengembangkan aplikasi web pengelolaan bimbingan perwalian mahasiswa di Politeknik Astra yang terhubung dengan modul Sistem Informasi Akademik (SIA). Mengembangkan modul pengelompokan mahasiswa bimbingan, pencatatan histori sesi konsultasi perwalian, serta penyusunan pelaporan kegiatan akademik berkala bagi dosen pembimbing.",
      technologies: ["ASP.NET", "JavaScript", "SQL Server", "HTML5/CSS3", "Git"],
      liveUrl: "https://example.com/demo/polman-advising",
    },
  ] as ProjectItem[],
};
