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
  architecture?: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
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
    resumeUrl: "/cv-dicky-muzakki.pdf",
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
      technologies: ["ASP.NET", "C#", "Java Spring Boot", "Oracle", "JavaScript", "REST API", "Git"],
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
      title: "Imaps",
      client: "BPJS Kesehatan",
      category: "Enterprise System",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/monthly-planning.jpg",
      summary: "Aplikasi enterprise internal BPJS Kesehatan untuk modul pemetaan dan analisis data operasional. (Lorem ipsum dolor sit amet, consectetur adipiscing elit).",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mengembangkan dan memodifikasi modul aplikasi internal berdasarkan Change Request (CR).",
      architecture: "Arsitektur web enterprise dengan backend ASP.NET C#, integrasi database Oracle, serta REST API untuk pertukaran data antar modul sistem kesehatan nasional.",
      technologies: ["ASP.NET", "C#", "Oracle", "JavaScript", "REST API", "Git", "Bootstrap"],
      githubUrl: "https://github.com/SeekorApel",
    },
    {
      id: "project-smartcorpu",
      title: "SmartCorpu",
      client: "BPJS Kesehatan",
      category: "Enterprise System",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/entry-production.jpg",
      summary: "Platform Corporate University internal BPJS Kesehatan untuk manajemen kompetensi dan pelatihan pegawai. (Lorem ipsum dolor sit amet).",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Implementasi penambahan fitur baru, validasi alur pengajuan, dan perbaikan hak akses pengguna.",
      architecture: "Modul pembelajaran korporasi terintegrasi dengan backend Java Spring Boot, RESTful API, dan basis data Oracle untuk penanganan record pelatihan pegawai dalam skala besar.",
      technologies: ["Java Spring Boot", "Oracle", "JavaScript", "REST API", "Git", "HTML5/CSS3"],
      githubUrl: "https://github.com/SeekorApel",
    },
    {
      id: "project-konanfirst",
      title: "KonanFirst",
      client: "BPJS Kesehatan",
      category: "Enterprise System",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/academic-advising.jpg",
      summary: "Sistem aplikasi internal BPJS Kesehatan untuk koordinasi dan alur kerja operasional. (Lorem ipsum dolor sit amet).",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Melakukan modifikasi fitur existing dan siklus pengujian QC/UAT hingga deployment ke production.",
      architecture: "Sistem manajemen alur kerja internal berbasis ASP.NET MVC dengan integrasi basis data Oracle dan protokol autentikasi enterprise.",
      technologies: ["ASP.NET", "C#", "Oracle", "REST API", "Git"],
      githubUrl: "https://github.com/SeekorApel",
    },
    {
      id: "project-aman-jkn",
      title: "AMAN Jkn",
      client: "BPJS Kesehatan",
      category: "Enterprise System",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/monthly-planning.jpg",
      summary: "Sistem penunjang keamanan dan verifikasi data pada ekosistem layanan JKN BPJS Kesehatan. (Lorem ipsum dolor sit amet).",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penyesuaian logic validasi transaksi dan perbaikan feedback pengujian user.",
      architecture: "Layanan verifikasi dan validasi data berkecepatan tinggi dengan caching Redis, backend ASP.NET Core, dan basis data Oracle berkinerja tinggi.",
      technologies: ["ASP.NET Core", "C#", "Oracle Database", "REST API", "Git", "Redis", "JWT"],
      githubUrl: "https://github.com/SeekorApel",
    },
    {
      id: "project-sipp",
      title: "SIPP",
      client: "BPJS Kesehatan",
      category: "Enterprise System",
      projectType: "Enterprise Project",
      featured: true,
      period: "2025 – 2026",
      image: "/projects/entry-production.jpg",
      summary: "Saluran Informasi dan Penanganan Pengaduan pada fasilitas kesehatan mitra BPJS Kesehatan. (Lorem ipsum dolor sit amet).",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pemeliharaan dan modifikasi penanganan pengaduan serta otomasi data pelaporan.",
      architecture: "Platform web pengaduan dan eskalasi kasus terintegrasi antara faskes dan kantor cabang BPJS Kesehatan dengan basis data relasional.",
      technologies: ["ASP.NET", "C#", "SQL Server", "JavaScript", "REST API"],
      githubUrl: "https://github.com/SeekorApel",
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
      summary: "Aplikasi web untuk mendigitalisasi proses perencanaan produksi divisi PPIC menggunakan Java Spring Boot, Angular, dan Oracle Database.",
      description: "Merancang dan mengembangkan aplikasi web terintegrasi untuk mentransformasi alur kerja manual perencanaan produksi divisi PPIC ke dalam platform digital modern. Memangkas waktu pembuatan monthly planning dari 1 bulan menjadi ±2 jam serta mengurangi ketergantungan pada perhitungan manual Excel dan satu personel ahli.",
      architecture: "Arsitektur enterprise modern dengan backend Java Spring Boot RESTful API, integrasi Oracle Database untuk transaksi data batch perencanaan, dan front-end SPA Angular responsif.",
      technologies: ["Java Spring Boot", "Angular", "Oracle Database", "REST API", "Git", "TypeScript"],
      liveUrl: "https://example.com/demo/sri-monthly-planning",
      githubUrl: "https://github.com/SeekorApel",
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
      summary: "Migrasi aplikasi existing ke Java Spring Boot dengan basis data Oracle serta memastikan maintainability dan kompatibilitas sistem.",
      description: "Melakukan migrasi sistem pencatatan progres lini produksi manufaktur otomotif existing ke arsitektur Java Spring Boot modern dengan basis data Oracle. Memastikan fungsionalitas aplikasi tetap berjalan stabil pada platform baru serta mendukung maintainability dan kompatibilitas jangka panjang.",
      architecture: "Refactoring arsitektur legacy ke backend Java Spring Boot berstandar Clean Architecture dengan konektor data Oracle Database berkinerja tinggi untuk pencatatan progres lini manufaktur.",
      technologies: ["Java Spring Boot", "JavaScript", "Oracle Database", "REST API", "Git"],
      liveUrl: "https://example.com/demo/ahm-entry-production",
      githubUrl: "https://github.com/SeekorApel",
    },
    {
      id: "project-student-academic-advising",
      title: "Student Academic Advising System",
      client: "Politeknik Astra",
      category: "Full Stack",
      projectType: "Enterprise Project",
      featured: true,
      period: "Jul 2023 – Okt 2023",
      image: "/projects/academic-advising.jpg",
      summary: "Aplikasi web untuk pencatatan dan pengelolaan bimbingan akademik mahasiswa di Politeknik Astra berbasis ASP.NET dan SQL Server.",
      description: "Merancang dan mengembangkan aplikasi web pencatatan kegiatan bimbingan akademik mahasiswa di Politeknik Astra. Mengembangkan fitur pengelolaan kelompok bimbingan, pengajuan permintaan bimbingan online, histori konsultasi, dan pelaporan kegiatan akademik.",
      architecture: "Full stack web application berbasis framework ASP.NET dengan client-side JavaScript, arsitektur MVC, dan basis data relasional Microsoft SQL Server.",
      technologies: ["ASP.NET", "JavaScript", "SQL Server", "HTML5/CSS3", "Git"],
      liveUrl: "https://example.com/demo/polman-advising",
      githubUrl: "https://github.com/SeekorApel",
    },
  ] as ProjectItem[],
};
