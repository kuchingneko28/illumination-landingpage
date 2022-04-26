const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".navbar__links a");
let loader = document.querySelector(".loader");

// Burger link
burger.addEventListener("click", () => {
  navLinks.classList.toggle("navbar__links__active");
  burger.classList.toggle("navbar__links__active");
});

window.onscroll = function () {
  // Highlight link
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      console.log(current);
    }

    navLink.forEach((li) => {
      console.log(li);
      li.classList.remove("navbar__highlight");
      if (li.classList.contains(current)) {
        li.classList.add("navbar__highlight");
      }
    });
  });

  // Shadow navbar
  if (window.pageYOffset > 10) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
};

// Loader animation
window.addEventListener("load", () => {
  loader.classList.add("disppear");
  body.classList.remove("overflow");
});
