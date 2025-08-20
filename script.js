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

// Scroll-triggered animations
const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

function revealOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
