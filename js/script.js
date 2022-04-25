const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("navbar__links__active");
  burger.classList.toggle("navbar__links__active");

  if (body.classList.contains("hidden")) {
    body.classList.remove("hidden");
    body.classList.add("show");
  } else {
    body.classList.add("hidden");
    body.classList.remove("show");
  }
});

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
};
