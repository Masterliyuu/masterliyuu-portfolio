document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! Leo will get back to you soon.");
    form.reset();
  });
});
