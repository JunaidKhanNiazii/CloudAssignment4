const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
const overlay = document.querySelector(".overlay");
const header = document.getElementById("header");

// Toggle menu
const toggleMenu = () => {
   menu.classList.toggle("is-active");
   overlay.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close menu when link clicked
document.querySelectorAll(".menu-link").forEach(link => {
   link.addEventListener("click", toggleMenu);
});

// Scroll effect
window.addEventListener("scroll", () => {
   if (window.scrollY > 50) {
      header.classList.add("on-scroll");
   } else {
      header.classList.remove("on-scroll");
   }
});