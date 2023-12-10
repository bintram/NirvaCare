

// toggle class active
const navbarMenu = document.querySelector(".navbar-menu");
// ketika hamburger belum di klik
document.querySelector("#HumbergerMenu").onclick = () => {
  navbarMenu.classList.toggle("active");
};


document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// Acordion
function toggleAccordion(accordionNumber) {
  var accordionContainer = document.getElementById('accordion' + accordionNumber);
  var accordionBox = accordionContainer.querySelector('.accordion-box');
  var accordionContent = accordionContainer.querySelector('.content');

  // Toggle the active class on the clicked accordion
  accordionBox.classList.toggle('active');

  // Hide all other accordion content
  var allAccordionContainers = document.querySelectorAll('.accordion-container');
  allAccordionContainers.forEach(function (container) {
      if (container !== accordionContainer) {
          container.querySelector('.accordion-box').classList.remove('active');
          container.querySelector('.content').classList.remove('active');
      }
  });

  // Toggle the active class on the clicked accordion content
  accordionContent.classList.toggle('active');
}


let currentPosition = 0;

function prevCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper');
  currentPosition = Math.max(currentPosition + 1, -1);
  updateTransform();
}

function nextCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper');
  const totalItems = document.querySelectorAll('.carousel-box').length;
  currentPosition = Math.min(currentPosition - 1, totalItems - 3);
  updateTransform();
}

function updateTransform() {
  const wrapper = document.querySelector('.carousel-wrapper');
  const boxWidth = document.querySelector('.carousel-box').offsetWidth;
  const translateXValue = -currentPosition * boxWidth + 'px';
  wrapper.style.transform = 'translateX(' + translateXValue + ')';
}



// Accordion bantuan
let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");
  };
});



// Accordian layanan
let layananList = document.querySelectorAll(".layanan-box .content-item .list");
layananList.forEach((layanan) => {
  layanan.onclick = () => {
    layanan.classList.toggle("active");
  };
});


