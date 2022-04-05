const navLinks = document.querySelector(".navbar__links");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("navbar__links__active");
  burger.classList.toggle("navbar__links__active");
});
