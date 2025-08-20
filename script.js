// Typing Effect
const text = "Turning Vision into Digital Magic";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("heroText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Dark Mode Toggle
document.getElementById("darkToggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
};

// Contact Form Alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! Leo will get back to you soon.");
  this.reset();
});
