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

//========================================================================================================================================================
function fadeInElementsOnScroll() {
  // Отримуємо всі елементи, які ви хочете анімувати (наприклад, з класом "animate-on-scroll")
  const elements = document.querySelectorAll(".animate-on-scroll");

  // Функція, яка перевіряє, чи елемент з'явився на видимому екрані
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Функція, яка перевіряє, чи елементи повинні анімуватися при прокручуванні
  function checkElements() {
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("visible"); // Додати клас "visible" для анімації
      } else {
        element.classList.remove("visible"); // Видалити клас "visible", якщо елемент виходить з видимого екрану
      }
    });
  }

  // Викликаємо функцію при завантаженні сторінки та при прокрутці
  window.addEventListener("load", checkElements);
  window.addEventListener("scroll", checkElements);
}

// Викличте цю функцію, коли сторінка завантажується
fadeInElementsOnScroll();
