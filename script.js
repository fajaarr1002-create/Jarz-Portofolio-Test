// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Navbar scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Active link highlight on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Skill bar animation
const animateSkillBars = () => {
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      const level = card.getAttribute('data-level');
      const fillBar = card.querySelector('.skill-level-fill');
      if (fillBar && level) {
        fillBar.style.width = `${level}%`;
      }
    }
  });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Language Translations
const translations = {
  id: {
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_skills: 'Keahlian',
    nav_projects: 'Proyek',
    nav_contact: 'Kontak',
    nav_cta: 'Hubungi Saya',
    hero_badge: 'tentang saya',
    hero_sub: 'Frontend Developer & UI Designer. Menciptakan pengalaman web yang sempurna dan imersif dengan teknologi modern.',
    hero_cta1: 'Lihat Karyaku',
    hero_cta2: 'Hubungi Saya',
    scroll_hint: 'GULIR KE BAWAH',
    about_tag: 'Tentang Saya',
    about_heading: 'Frontend Developer & Penggemar UI',
    about_p1: 'Halo, saya Jarz Testdev — seorang frontend developer yang passionate dalam menciptakan aplikasi web yang indah, fungsional, dan ramah pengguna.',
    about_p2: 'Dengan keahlian di React, Next.js, dan framework CSS modern, saya membangun pengalaman pengguna yang mulus, tampak menakjubkan, dan berkinerja sempurna di semua perangkat.',
    stat1: 'Proyek Selesai',
    stat2: 'Tahun Pengalaman',
    stat3: 'Kepuasan',
    stat4: 'Kopi Habis',
    badge_open: 'Tersedia Bekerja',
    skills_tag: 'Keahlian',
    skills_title_hl: 'Keahlian',
    sk1_title: 'Ekosistem React',
    sk1_desc: 'Membangun antarmuka pengguna dinamis dengan React, Next.js, dan arsitektur hooks modern.',
    sk2_title: 'JavaScript & TypeScript',
    sk2_desc: 'Menulis kode yang bersih dan aman dengan fitur ES6+ modern dan integrasi TypeScript.',
    sk3_title: 'Styling & Animasi',
    sk3_desc: 'Membuat desain responsif yang indah dengan Tailwind, SCSS, dan animasi halus.',
    sk4_title: 'Desain Responsif',
    sk4_desc: 'Membangun pengalaman mobile-first yang berfungsi sempurna di semua perangkat.',
    sk5_title: 'UI/UX Design',
    sk5_desc: 'Merancang antarmuka intuitif di Figma dengan fokus pada pengalaman pengguna.',
    sk6_title: '3D & Grafis',
    sk6_desc: 'Menambahkan pengalaman 3D imersif dengan Three.js dan teknologi WebGL.',
    projects_tag: 'Proyek',
    projects_title_hl: 'Karya',
    contact_tag: 'Kontak',
    contact_title: 'Mari Membangun Sesuatu yang',
    contact_h2: 'Ada proyek dalam pikiran?',
    contact_p: 'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.',
    ci_email: 'Email',
    ci_loc: 'Lokasi',
    ci_resp: 'Waktu Respon',
    ci_resp_val: 'Dalam 24 jam',
    quick_contact: 'Kontak Cepat',
    avail_status: 'Siap berkolaborasi',
    send_email: 'Kirim Email',
    footer_made: 'Dibuat dengan',
    footer_coffee: 'dan banyak kopi',
    back_top: 'Kembali ke Atas'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_cta: "Let's Talk",
    hero_badge: 'about me',
    hero_sub: 'Frontend Developer & UI Designer. Crafting pixel-perfect, immersive web experiences with modern technologies.',
    hero_cta1: 'View My Work',
    hero_cta2: 'Get In Touch',
    scroll_hint: 'SCROLL DOWN',
    about_tag: 'About Me',
    about_heading: 'Frontend Developer & UI Enthusiast',
    about_p1: "Hi, I'm Jarz Testdev — a passionate frontend developer who loves creating beautiful, functional, and user-friendly web applications.",
    about_p2: 'With expertise in React, Next.js, and modern CSS frameworks, I build seamless user experiences that not only look amazing but also perform flawlessly across all devices.',
    stat1: 'Projects Done',
    stat2: 'Years Exp.',
    stat3: 'Satisfaction',
    stat4: 'Coffee Consumed',
    badge_open: 'Open to Work',
    skills_tag: 'Skills',
    skills_title_hl: 'Expertise',
    sk1_title: 'React Ecosystem',
    sk1_desc: 'Building dynamic user interfaces with React, Next.js, and modern hooks architecture.',
    sk2_title: 'JavaScript & TypeScript',
    sk2_desc: 'Writing clean, type-safe code with modern ES6+ features and TypeScript integration.',
    sk3_title: 'Styling & Animation',
    sk3_desc: 'Creating beautiful, responsive designs with Tailwind, SCSS, and smooth animations.',
    sk4_title: 'Responsive Design',
    sk4_desc: 'Building mobile-first experiences that work flawlessly across all devices.',
    sk5_title: 'UI/UX Design',
    sk5_desc: 'Designing intuitive interfaces in Figma with focus on user experience.',
    sk6_title: '3D & Graphics',
    sk6_desc: 'Adding immersive 3D experiences with Three.js and WebGL technologies.',
    projects_tag: 'Projects',
    projects_title_hl: 'Work',
    contact_tag: 'Contact',
    contact_title: "Let's Build Something",
    contact_h2: 'Have a project in mind?',
    contact_p: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    ci_email: 'Email',
    ci_loc: 'Location',
    ci_resp: 'Response Time',
    ci_resp_val: 'Within 24 hours',
    quick_contact: 'Quick Contact',
    avail_status: 'Ready to collaborate',
    send_email: 'Send Email',
    footer_made: 'Made with',
    footer_coffee: 'and lots of coffee',
    back_top: 'Back to Top'
  }
};

let currentLang = 'id';

const langBtn = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');

function updateLanguage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.innerText = translations[currentLang][key];
      }
    }
  });
  langLabel.innerText = currentLang.toUpperCase();
}

if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    updateLanguage();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initial language set
updateLanguage();

console.log('Portfolio Jarz Testdev loaded!');