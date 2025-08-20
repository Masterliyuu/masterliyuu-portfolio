// Typing effect
new Typed("#typed", {
  strings: ["Hi, I'm Leo.", "Creative Specialist.", "Operations Leader."],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});

// Swiper setup
new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

// GSAP scroll animation
gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
  });
});

// Tag filtering
document.querySelectorAll(".tags button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tag = btn.dataset.tag;
    document.querySelectorAll(".tool").forEach((tool) => {
      tool.style.display =
        tag === "all" || tool.dataset.tags.includes(tag) ? "inline-block" : "none";
    });
  });
});
