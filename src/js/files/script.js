// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function handleScroll() {
  const headerTop = document.querySelector(".top-head");
  const headerContainer = document.querySelector(".header__container");
  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const lastPart = parts[parts.length - 1].replace(".html", "");

  // Перевіряємо чи це головна сторінка (ваш умовний шлях до головної сторінки)
  if ((lastPart === "" || lastPart === "index") && window.innerWidth <= 768) {
    // Перевіряємо поточне положення прокрутки
    if (window.scrollY >= 40) {
      // Якщо прокрутка більше або рівна 40px, ховаємо елементи з плавним ефектом
      headerTop.style.transform = "translateY(-50%)";
      headerContainer.style.height = "40px";
      headerContainer.style.paddingBottom = "10px";
      headerContainer.style.paddingTop = "10px";
    } else {
      // Якщо прокрутка менше 40px, показуємо елементи з плавним ефектом
      headerTop.style.transform = "translateY(0)";
      headerContainer.style.height = "auto";
      headerContainer.style.paddingBottom = "none";
      headerContainer.style.paddingTop = "none";
    }
  }
}

// Додавання обробника подій "scroll" до вікна
window.addEventListener("scroll", handleScroll);

// Встановлення переходу (transition) для елементів для створення плавного ефекту
document.querySelector(".top-head").style.transition =
  "transform 0.3s, height 0.3s";

// animate in viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  animatedElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}

// Додавання обробника подій "scroll" до вікна
window.addEventListener("scroll", handleScrollAnimations);

// Виклик функції один раз для ініціалізації при завантаженні сторінки
handleScrollAnimations();

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
