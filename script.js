// Typing effect
const heroText = "Creative. Strategic. Human.";
let i = 0;
function typeWriter() {
  if (i < heroText.length) {
    document.getElementById("heroText").innerHTML += heroText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Dark mode toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Animated counters
const counters = document.querySelectorAll(".counter");
const speed = 100;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Testimonials slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);
