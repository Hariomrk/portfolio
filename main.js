const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  menuBtn.classList.toggle("active");
  
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );

  // Prevent scrolling when menu is open
  document.body.style.overflow = isOpen ? "hidden" : "auto";
});

// Close menu when clicking a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    document.body.style.overflow = "auto";
  }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    document.body.style.overflow = "auto";
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

// Certificate Modal Functionality
const modals = document.getElementsByClassName("certificate-modal");
const closeBtns = document.getElementsByClassName("close-modal");

function openCertificateModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Close modal when clicking the close buttons
Array.from(closeBtns).forEach(btn => {
  btn.onclick = function() {
    const modal = btn.closest('.certificate-modal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
});

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target.classList.contains('certificate-modal')) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
}

// Close modal with escape key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    Array.from(modals).forEach(modal => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }
    });
  }
});
