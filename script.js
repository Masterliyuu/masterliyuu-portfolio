// Typing effect
const heroText = document.getElementById("heroText");
const phrases = [
  "Process-driven creative",
  "Remote team leader",
  "Persona strategist",
  "Digital storyteller"
];
let phraseIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let pauseDelay = 1500;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    heroText.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, pauseDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    heroText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) setTimeout(type, pauseDelay);
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll spy
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
