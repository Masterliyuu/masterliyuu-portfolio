document.addEventListener("DOMContentLoaded", () => {
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
    if (!heroText) return;
    if (charIndex < phrases[phraseIndex].length) {
      heroText.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (!heroText) return;
    if (charIndex > 0) {
      heroText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

  type();

  new Swiper(".project-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const tags = document.querySelectorAll(".tag");
  const blogCards = document.querySelectorAll(".blog-card");

  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      tags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");
      const selected = tag.dataset.tag;

      blogCards.forEach(card => {
        const cardTags = card.dataset.tags.split(" ");
        if (selected === "all" || cardTags.includes(selected)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
```
