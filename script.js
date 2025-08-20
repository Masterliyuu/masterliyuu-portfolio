document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! Leo will get back to you soon.");
  this.reset();
});

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
