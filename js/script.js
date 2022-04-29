const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".navbar__links a");
let loader = document.querySelector(".loader");

const backtoTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Burger link
burger.addEventListener("click", () => {
  navLinks.classList.toggle("navbar__links__active");
  burger.classList.toggle("navbar__links__active");
  if (body.classList.contains("hidden")) {
    body.classList.remove("hidden");
  } else {
    body.classList.add("hidden");
  }
});

window.onscroll = () => {
  // Highlight link
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      // console.log(current);
    }

    navLink.forEach((li) => {
      li.classList.remove("navbar__highlight");
      if (li.classList.contains(current)) {
        li.classList.add("navbar__highlight");
      }
      // console.log(li);
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
  body.classList.remove("hidden");
});

// Jquery
$(".owl-carousel").owlCarousel({
  margin: 12,
  loop: true,
  responsiveClass: true,
  responsive: {
    300: {
      items: 2,
      nav: false,
      autoWidth: true,
    },
    900: {
      items: 5,
      nav: false,
      loop: true,
      autoWidth: true,
    },
  },
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
