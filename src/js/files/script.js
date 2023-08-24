// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll");

function checkIfInView() {
  animateOnScrollElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      element.classList.add("show");
    }
  });
}

// Initial check
checkIfInView("");

// Check on scroll
window.addEventListener("scroll", checkIfInView);

//-----------------------

function multyTab() {}
