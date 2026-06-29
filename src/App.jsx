import React, { useState, useEffect } from "react";
import {
  Activity,
  Heart,
  Info,
  Sparkles,
  Smartphone,
  TrendingUp,
  CheckCircle,
  Menu,
  X,
  Download,
  ChevronRight,
  AlertTriangle,
  Play,
  ShieldAlert,
  FileText,
  UserCheck,
  ArrowRight,
  Settings,
  ShieldCheck,
  FolderOpen,
  Mail,
  HeartHandshake,
} from "lucide-react";

// Custom SVG Instagram Icon as it is missing from this version of lucide-react
const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events (sticky navbar and active menu link)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ["home", "tentang", "fitur", "sasaran", "cara-install"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for scroll fade-up reveals
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Features list
  const features = [
    {
      icon: <FileText size={24} />,
      title: "Asesmen Awal Pengguna",
      desc: "Mengidentifikasi tingkat keparahan keluhan awal pada area ekstremitas bawah Anda untuk memetakan kesiapan latihan secara aman.",
    },
    {
      icon: <Activity size={24} />,
      title: "Rekomendasi Latihan",
      desc: "Dapatkan program gerakan terarah yang disesuaikan secara personal berdasarkan tingkat mobilitas dan keparahan nyeri Anda.",
    },
    {
      icon: <Play size={24} />,
      title: "Panduan Gerakan Latihan",
      desc: "Video demonstrasi instruksional yang dilengkapi tips ergonomis untuk meminimalisir kesalahan postur saat berlatih mandiri.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Deteksi Gerakan (Pose Estimation)",
      desc: "Teknologi AI menggunakan kamera smartphone Anda untuk memandu sudut sendi, menghitung repetisi, dan mendeteksi postur secara real-time.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Riwayat & Progress Latihan",
      desc: "Laporan harian visual mengenai tingkat keberhasilan gerakan, frekuensi latihan, dan evaluasi grafik progres pemulihan Anda.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Tampilan Mudah Digunakan",
      desc: "Antarmuka aplikasi yang ramah pengguna, bersih dari iklan, serta didesain khusus agar nyaman diakses segala usia.",
    },
  ];

  // User target groups
  const targets = [
    {
      icon: <Activity size={26} />,
      title: "Keluhan Ekstremitas Bawah Ringan",
      desc: "Pengguna yang mengalami keluhan muskuloskeletal ringan (seperti kaku otot atau pegal pasca cedera ringan) di paha, lutut, betis, hingga pergelangan kaki.",
    },
    {
      icon: <Smartphone size={26} />,
      title: "Latihan Terarah di Rumah",
      desc: "Mereka yang ingin melakukan latihan pemulihan mandiri secara konsisten di rumah tanpa harus bergantung pada ketersediaan alat klinis yang rumit.",
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Pecinta Pelacakan Progres",
      desc: "Pengguna yang ingin melacak data kemajuan latihan mereka secara kuantitatif melalui statistik skor kepatuhan gerakan.",
    },
    {
      icon: <HeartHandshake size={26} />,
      title: "Asisten Pendamping Latihan",
      desc: "Pengguna yang membutuhkan aplikasi panduan digital interaktif sebagai komplementer atau pendamping program latihan mandiri harian.",
    },
  ];

  // Install steps
  const steps = [
    {
      number: "01",
      icon: <Download size={22} />,
      title: "Unduh File APK",
      desc: "Klik tombol 'Download APK' di navbar atau tombol CTA untuk mengunduh installer resmi PhysioMove.",
    },
    {
      number: "02",
      icon: <FolderOpen size={22} />,
      title: "Buka File Unduhan",
      desc: "Buka pengelola file atau folder 'Download' pada smartphone Android Anda, lalu ketuk file physiomove.apk.",
    },
    {
      number: "03",
      icon: <Settings size={22} />,
      title: "Izinkan Sumber Tidak Dikenal",
      desc: "Jika sistem Android meminta verifikasi keamanan, berikan izin 'Install Unknown Apps' untuk browser atau file manager Anda.",
    },
    {
      number: "04",
      icon: <ShieldCheck size={22} />,
      title: "Lakukan Pemasangan",
      desc: "Ketuk tombol 'Instal' pada layar konfirmasi, lalu tunggu beberapa detik hingga proses instalasi selesai.",
    },
    {
      number: "05",
      icon: <Sparkles size={22} />,
      title: "Mulai Gunakan",
      desc: "Buka aplikasi PhysioMove, isi asesmen awal, dan ikuti rekomendasi gerakan latihan mandiri pertama Anda!",
    },
  ];

  return (
    <div className="landing-page">
      {/* Decorative background shapes */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="bg-blob bg-blob-3"></div>

      {/* Floating particles background decoration */}
      <div className="particle-container">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${15 + i * 15}%`,
              width: `${10 + (i % 3) * 6}px`,
              height: `${10 + (i % 3) * 6}px`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* ==========================================
         1. NAVBAR
         ========================================== */}
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="container">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("home");
            }}
          >
            <Activity size={24} />
            <span>
              Physio
              <span style={{ color: "var(--color-turquoise)" }}>Move</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar-menu">
            <a
              href="#home"
              className={`navbar-link ${activeSection === "home" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("home");
              }}
            >
              Home
            </a>
            <a
              href="#tentang"
              className={`navbar-link ${activeSection === "tentang" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("tentang");
              }}
            >
              Tentang
            </a>
            <a
              href="#fitur"
              className={`navbar-link ${activeSection === "fitur" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("fitur");
              }}
            >
              Fitur
            </a>
            <a
              href="#sasaran"
              className={`navbar-link ${activeSection === "sasaran" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("sasaran");
              }}
            >
              Sasaran
            </a>
            <a
              href="#cara-install"
              className={`navbar-link ${activeSection === "cara-install" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("cara-install");
              }}
            >
              Cara Install
            </a>
            <div className="navbar-btn">
              <a
                href="/physiomove.apk"
                download
                className="btn btn-primary btn-pulse"
              >
                <Download size={16} />
                <span>Download APK</span>
              </a>
            </div>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            className={`navbar-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Mobile Dropdown Links */}
          <div
            className={`navbar-menu-mobile ${isMobileMenuOpen ? "open" : ""}`}
          >
            <a
              href="#home"
              className={`navbar-link ${activeSection === "home" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("home");
              }}
            >
              Home
            </a>
            <a
              href="#tentang"
              className={`navbar-link ${activeSection === "tentang" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("tentang");
              }}
            >
              Tentang
            </a>
            <a
              href="#fitur"
              className={`navbar-link ${activeSection === "fitur" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("fitur");
              }}
            >
              Fitur
            </a>
            <a
              href="#sasaran"
              className={`navbar-link ${activeSection === "sasaran" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("sasaran");
              }}
            >
              Sasaran
            </a>
            <a
              href="#cara-install"
              className={`navbar-link ${activeSection === "cara-install" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("cara-install");
              }}
            >
              Cara Install
            </a>
            <a
              href="/physiomove.apk"
              download
              className="btn btn-primary btn-pulse"
              style={{ width: "100%", marginTop: "8px" }}
            >
              <Download size={16} />
              <span>Download APK</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ==========================================
         2. HERO SECTION
         ========================================== */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content reveal active">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                <span className="hero-badge-text">
                  Android App &bull; Bebas Iklan
                </span>
              </div>
              <h1 className="hero-title">
                Latihan Mandiri Lebih <br />
                <span className="text-gradient">Terarah</span> Bersama
                PhysioMove
              </h1>
              <p className="hero-desc">
                Aplikasi rehabilitasi mandiri muskuloskeletal ekstremitas bawah.
                Dapatkan asesmen awal, rekomendasi latihan khusus, panduan
                visual, serta pelacakan real-time berbasis AI pose estimation.
              </p>
              <div className="hero-buttons">
                <a
                  href="/physiomove.apk"
                  download
                  className="btn btn-primary btn-pulse"
                >
                  <Download size={18} />
                  <span>Download APK</span>
                </a>
                <button
                  onClick={() => handleNavLinkClick("fitur")}
                  className="btn btn-secondary"
                >
                  <span>Lihat Fitur</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div
              className="hero-visual reveal active"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="hero-glow-blob"></div>

              {/* Smartphone Mockup UI Simulation */}
              <div className="smartphone-mockup-wrapper">
                <div className="smartphone-border">
                  <div className="smartphone-camera"></div>
                  <div className="smartphone-screen">
                    {/* Mockup Header */}
                    <div className="app-header">
                      <div className="app-title">PhysioMove</div>
                      <div className="app-profile"></div>
                    </div>

                    {/* Today's Workout & Progress */}
                    <div className="app-card">
                      <div className="app-stats-title">PROGRAM HARI INI</div>
                      <div className="app-stats-val">
                        Knee Extension
                        <span style={{ fontSize: "12px" }}>78% Selesai</span>
                      </div>
                      <div className="app-progress-bar-wrapper">
                        <div className="app-progress-bar-fill"></div>
                      </div>
                    </div>

                    {/* Pose Estimation Feed Simulation */}
                    <div className="app-pose-estimation">
                      {/* Simulated overlay camera skeleton nodes */}
                      <svg className="app-pose-svg" viewBox="0 0 200 150">
                        {/* Lines connecting joints */}
                        <line
                          x1="100"
                          y1="30"
                          x2="80"
                          y2="75"
                          className="skeleton-line"
                        />
                        <line
                          x1="80"
                          y1="75"
                          x2="135"
                          y2="120"
                          className="skeleton-line"
                        />

                        {/* Hip joint */}
                        <circle
                          cx="100"
                          cy="30"
                          r="5"
                          className="skeleton-joint"
                        />
                        {/* Knee joint */}
                        <circle
                          cx="80"
                          cy="75"
                          r="5"
                          className="skeleton-joint"
                        />
                        {/* Ankle joint */}
                        <circle
                          cx="135"
                          cy="120"
                          r="5"
                          className="skeleton-joint"
                        />

                        {/* Angle Arc Indicator */}
                        <path
                          d="M 90,52 A 15,15 0 0,0 95,85"
                          fill="none"
                          stroke="var(--color-cyan)"
                          strokeWidth="1.5"
                          strokeDasharray="3"
                        />
                      </svg>

                      {/* Decorative labels */}
                      <div className="app-pose-label">
                        <span className="app-pose-indicator"></span>
                        AI Tracking: Active
                      </div>
                      <div className="app-pose-score">Sudut: 120&deg;</div>
                    </div>

                    {/* Recommendation Card */}
                    <div className="app-exercise-recommendation">
                      <div className="app-rec-title">
                        Rekomendasi Berikutnya
                      </div>
                      <div className="app-rec-item">
                        <div className="app-rec-icon">
                          <Activity size={12} />
                        </div>
                        <div className="app-rec-details">
                          <div className="app-rec-name">Straight Leg Raise</div>
                          <div className="app-rec-meta">
                            3 Set &bull; 10 Repetisi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges outside mockup */}
              <div className="floating-card floating-card-1">
                <div className="float-icon float-icon-cyan">
                  <Sparkles size={18} />
                </div>
                <div className="float-info">
                  <span className="float-label">Teknologi</span>
                  <span className="float-value">Pose Detection</span>
                </div>
              </div>

              <div className="floating-card floating-card-2">
                <div className="float-icon float-icon-blue">
                  <TrendingUp size={18} />
                </div>
                <div className="float-info">
                  <span className="float-label">Kepatuhan Latihan</span>
                  <span className="float-value">Progress 78%</span>
                </div>
              </div>

              <div className="floating-card floating-card-3">
                <div className="float-icon float-icon-purple">
                  <UserCheck size={18} />
                </div>
                <div className="float-info">
                  <span className="float-label">Metode</span>
                  <span className="float-value">Latihan Terarah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         3. SECTION TENTANG APLIKASI
         ========================================== */}
      <section id="tentang" className="section">
        <div className="container">
          <div className="tentang-grid">
            {/* Left Column: Visual Stats Grid */}
            <div className="tentang-visual reveal">
              <div className="tentang-card-left">
                <div className="tentang-stats-card">
                  <div className="tentang-stats-header">
                    <div className="tentang-stats-icon">
                      <FileText size={20} />
                    </div>
                    <span className="tentang-stats-tag tag-cyan">Fase 1</span>
                  </div>
                  <div className="tentang-stats-body">
                    <h3>Asesmen Awal</h3>
                    <p>
                      Skrining kesiapan dan klasifikasi keluhan awal secara
                      personal sebelum memulai sesi.
                    </p>
                  </div>
                </div>

                <div className="tentang-stats-card">
                  <div className="tentang-stats-header">
                    <div className="tentang-stats-icon">
                      <Sparkles size={20} />
                    </div>
                    <span className="text-gradient tentang-stats-tag tag-blue">
                      Real-Time
                    </span>
                  </div>
                  <div className="tentang-stats-body">
                    <h3>Pose Estimation</h3>
                    <p>
                      Estimasi sudut sendi lutut/kaki secara langsung via kamera
                      perangkat Anda.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tentang-card-right">
                <div
                  className="tentang-stats-card"
                  style={{ marginTop: "20px" }}
                >
                  <div className="tentang-stats-header">
                    <div className="tentang-stats-icon">
                      <TrendingUp size={20} />
                    </div>
                    <span className="tentang-stats-tag tag-success">
                      Grafik
                    </span>
                  </div>
                  <div className="tentang-stats-body">
                    <h3>Progress Latihan</h3>
                    <p>
                      Statistik pemantauan kepatuhan gerak dan kurva progres
                      pemulihan Anda.
                    </p>

                    {/* Simulated Mini Chart Visual */}
                    <div className="sim-chart">
                      <div
                        className="sim-chart-bar"
                        style={{ height: "30%" }}
                      ></div>
                      <div
                        className="sim-chart-bar"
                        style={{ height: "50%" }}
                      ></div>
                      <div
                        className="sim-chart-bar"
                        style={{ height: "40%" }}
                      ></div>
                      <div
                        className="sim-chart-bar"
                        style={{ height: "75%" }}
                      ></div>
                      <div
                        className="sim-chart-bar"
                        style={{ height: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Explanations and Points */}
            <div className="tentang-content reveal">
              <span className="section-subtitle">TENTANG PHYSIOMOVE</span>
              <h2 className="section-title">
                Solusi Asisten Digital Pemulihan Latihan Mandiri
              </h2>
              <p className="section-desc" style={{ marginBottom: "20px" }}>
                PhysioMove adalah aplikasi Android yang dirancang khusus untuk
                memandu pengguna melakukan latihan mandiri rehabilitasi gangguan
                muskuloskeletal pada area ekstremitas bawah (kaki) secara
                terarah dan aman di rumah.
              </p>

              <div className="tentang-points">
                <div className="tentang-point-item">
                  <CheckCircle size={18} />
                  <span>Asesmen Kondisi Awal</span>
                </div>
                <div className="tentang-point-item">
                  <CheckCircle size={18} />
                  <span>Rekomendasi Latihan Personal</span>
                </div>
                <div className="tentang-point-item">
                  <CheckCircle size={18} />
                  <span>Deteksi Sudut Sendi Real-time</span>
                </div>
                <div className="tentang-point-item">
                  <CheckCircle size={18} />
                  <span>Pemantauan Progres Mandiri</span>
                </div>
              </div>

              {/* Warning Disclaimer Box */}
              <div className="disclaimer-card">
                <AlertTriangle className="disclaimer-icon" size={24} />
                <div className="disclaimer-text">
                  <strong>Pernyataan Batasan Penggunaan:</strong> Aplikasi ini
                  ditujukan murni sebagai{" "}
                  <strong>
                    pendamping latihan mandiri dan pemantau progres
                  </strong>
                  , bukan pengganti diagnosis medis, pemeriksaan klinis, atau
                  rencana terapi langsung dari dokter spesialis rehabilitasi
                  medis maupun fisioterapis berlisensi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         4. SECTION FITUR
         ========================================== */}
      <section
        id="fitur"
        className="section"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">FITUR UTAMA APLIKASI</span>
            <h2 className="section-title">
              Dirancang untuk Membantu Rehabilitasi Anda
            </h2>
            <p className="section-desc">
              Kumpulan fitur interaktif yang mendukung latihan mandiri yang
              lebih terstruktur, aman, dan dapat dipertanggungjawabkan dari
              rumah.
            </p>
          </div>

          <div className="fitur-grid">
            {features.map((fitur, index) => (
              <div
                key={index}
                className="fitur-card reveal"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="fitur-icon-wrapper">{fitur.icon}</div>
                <h3>{fitur.title}</h3>
                <p>{fitur.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         5. SECTION SASARAN PENGGUNA
         ========================================== */}
      <section id="sasaran" className="section section-dark">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">SASARAN PENGGUNA</span>
            <h2 className="section-title">
              Siapa yang Membutuhkan PhysioMove?
            </h2>
            <p className="section-desc">
              Aplikasi ini ideal bagi mereka yang memerlukan keteraturan dan
              akurasi saat melatih kebugaran atau memulihkan fungsi sendi
              ekstremitas bawah.
            </p>
          </div>

          <div className="sasaran-grid">
            {targets.map((target, index) => (
              <div
                key={index}
                className="sasaran-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="sasaran-icon-box">{target.icon}</div>
                <div className="sasaran-info">
                  <h3>{target.title}</h3>
                  <p>{target.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         6. SECTION CARA INSTALL
         ========================================== */}
      <section id="cara-install" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">PANDUAN PEMASANGAN</span>
            <h2 className="section-title">
              Bagaimana Cara Menginstal Aplikasi?
            </h2>
            <p className="section-desc">
              Ikuti langkah-langkah mudah di bawah ini untuk memasang PhysioMove
              secara manual pada smartphone Android Anda.
            </p>
          </div>

          <div className="cara-install-wrapper reveal">
            {/* Horizontal Timeline Connector for Desktop */}
            <div className="timeline-line">
              <div className="timeline-line-active"></div>
            </div>

            <div className="timeline-grid">
              {steps.map((step, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-step-circle">
                    {step.number}
                    <div className="timeline-icon-box">{step.icon}</div>
                  </div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         7. CALL TO ACTION (CTA)
         ========================================== */}
      <section className="section" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="cta-box reveal">
            <div className="cta-content">
              <h2 className="cta-title">Mulai Gunakan PhysioMove Sekarang</h2>
              <p className="cta-desc">
                Pantau progres latihan rehabilitasi mandiri ekstremitas bawah
                Anda secara gratis, bebas iklan, dan terarah dengan bantuan
                asisten berbasis AI.
              </p>
              <div className="cta-buttons">
                <a
                  href="/physiomove.apk"
                  download
                  className="btn btn-primary btn-pulse"
                  style={{ padding: "16px 36px", fontSize: "16px" }}
                >
                  <Download size={20} />
                  <span>Download APK (Versi 1.0)</span>
                </a>
                <span className="cta-meta">
                  Ukuran file: ~15 MB | Minimum Android 8.0 (Oreo)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         8. FOOTER
         ========================================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Info and Brand */}
            <div className="footer-info">
              <a
                href="#home"
                className="footer-logo"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("home");
                }}
              >
                <Activity size={26} />
                <span>
                  Physio<span style={{ color: "var(--color-cyan)" }}>Move</span>
                </span>
              </a>
              <p className="footer-desc">
                Aplikasi Android latihan mandiri rehabilitasi muskuloskeletal
                ekstremitas bawah berbasis kecerdasan buatan (pose estimation)
                yang interaktif, terukur, dan aman.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-links-col">
              <h4>Navigasi</h4>
              <div className="footer-links">
                <a
                  href="#home"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick("home");
                  }}
                >
                  Home
                </a>
                <a
                  href="#tentang"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick("tentang");
                  }}
                >
                  Tentang Aplikasi
                </a>
                <a
                  href="#fitur"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick("fitur");
                  }}
                >
                  Fitur Utama
                </a>
                <a
                  href="#sasaran"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick("sasaran");
                  }}
                >
                  Sasaran Pengguna
                </a>
                <a
                  href="#cara-install"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick("cara-install");
                  }}
                >
                  Cara Install
                </a>
              </div>
            </div>

            {/* Column 3: Contact & Info */}
            <div className="footer-links-col">
              <h4>Kontak & Informasi</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Mail size={16} />
                  <span>ardyrkm23@gmail.com</span>
                </div>
                <div className="footer-contact-item">
                  <Instagram size={16} />
                  <span>ardayrkm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} PhysioMove. Hak Cipta Dilindungi
              Undang-Undang.
            </div>
            <div className="footer-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:support@physiomove.id"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
