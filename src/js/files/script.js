// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function handleScroll() {
  const headerTop = document.querySelector(".top-head");
  const headerContainer = document.querySelector(".header__container");

  if (window.innerWidth <= 768) {
    if (window.scrollY >= 40) {
      headerTop.classList.add("hide-head");
      headerContainer.classList.add("hide-head");
    } else if (window.scrollY === 0) {
      headerTop.classList.remove("hide-head");
      headerContainer.classList.remove("hide-head");
    }
  }
}

window.addEventListener("scroll", handleScroll);

function addMenuActive() {
  const menuItems = document.querySelectorAll(".menu-head__item");
  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const lastPart = parts[parts.length - 1].replace(".html", "");

  menuItems.forEach((item) => {
    const dataMenuValue = item.getAttribute("data-menu");

    if (lastPart === dataMenuValue) {
      item.classList.add("ac-link");
    }
  });
}
addMenuActive();
