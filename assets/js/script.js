'use strict';

// Fonction de bascule d'élément
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Variables pour la navigation des pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Ajouter un événement à chaque lien de navigation
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.dataset.target;
    console.log(`Navigating to: ${targetPage}`);  // Debug

    // Boucler à travers toutes les pages pour basculer leur état actif
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
      }
    });

    // Boucler à travers les liens de navigation pour basculer leur état actif
    navigationLinks.forEach(navLink => {
      if (navLink.dataset.target !== targetPage) {
        navLink.classList.remove("active");
      }
    });
  });
});
