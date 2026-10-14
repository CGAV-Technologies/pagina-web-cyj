// Main Interactive Script for SYJ Technologies - Café Perú
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Bar Scroll Effect
  const navbar = document.querySelector('.main-navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.style.display = 'flex';
    } else {
      if (backToTopBtn) backToTopBtn.style.display = 'none';
    }
  });

  // 2. Back To Top Action
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 3. Hero Carousel Slider Implementation
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  if (nextBtn && prevBtn && slides.length > 0) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetTimer();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetTimer();
    });

    function startTimer() {
      slideInterval = setInterval(nextSlide, 6500);
    }

    function resetTimer() {
      clearInterval(slideInterval);
      startTimer();
    }

    startTimer();
  }

  // 4. Contact Form Submission simulation
  const contactForm = document.getElementById('coopContactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formSuccessAlert) {
      formSuccessAlert.classList.remove('d-none');
      contactForm.reset();
      setTimeout(() => {
        formSuccessAlert.classList.add('d-none');
      }, 6000);
    }
  });

  // 5. Whistleblowing / Denuncia modal feedback simulation
  const denunciaForm = document.getElementById('denunciaForm');
  const denunciaSuccessAlert = document.getElementById('denunciaSuccessAlert');

  denunciaForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (denunciaSuccessAlert) {
      denunciaSuccessAlert.classList.remove('d-none');
      denunciaForm.reset();
      setTimeout(() => {
        denunciaSuccessAlert.classList.add('d-none');
      }, 5000);
    }
  });

  // 6. Active nav links on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-custom');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
});
