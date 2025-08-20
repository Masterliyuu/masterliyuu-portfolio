// Typing effect
const heroText = document.getElementById("heroText");
const phrases = [
  "Turning vision into digital clarity.",
  "Creative strategist & team builder.",
  "Persona-driven messaging expert.",
  "Remote operations specialist."
];
let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    heroText.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    heroText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) setTimeout(type, 1500);
});

// Scroll-triggered animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

fadeElements.forEach(el => observer.observe(el));

// Swiper carousels
const testimonialSwiper = new Swiper('.testimonialSwiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.testimonialSwiper .swiper-pagination',
    clickable: true,
  },
});

const projectSwiper = new Swiper('.projectSwiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.projectSwiper .swiper-pagination',
    clickable: true,
  },
});

// Blog tag filtering
const tags = document.querySelectorAll('.tag');
const blogCards = document.querySelectorAll('.blog-card');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');

    const selected = tag.dataset.tag;

    blogCards.forEach(card => {
      const cardTags = card.dataset.tags.split(" ");
      if (selected === 'all' || cardTags.includes(selected)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});
