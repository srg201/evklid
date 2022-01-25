const burger = document.getElementById("burger");
const headerMenu = document.querySelector(".header__menu");
const navList = document.querySelector(".nav__list--adaptive");
const logo = document.querySelector(".header__logo");
const navLinks = document.querySelectorAll(".nav__link");
const tabsButtons = document.querySelectorAll(".work-nav__link");
const tabContent = document.querySelectorAll(".work-list-item");

burger.addEventListener("click", () => {
  headerMenu.classList.toggle("header__menu--active");

  navList.classList.toggle("nav-list--adaptive--open");
});

logo.addEventListener("click", () => {
  headerMenu.classList.remove("header__menu--active");
  navList.classList.remove("nav-list--adaptive--open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerMenu.classList.remove("header__menu--active");
    navList.classList.remove("nav-list--adaptive--open");
  });
});

tabsButtons.forEach((tabsBtn) => {
  tabsBtn.addEventListener("click", (event) => {
    const path = event.currentTarget.dataset.path;

    tabsButtons.forEach((element) => {
      element.classList.remove("work-nav__link--active");
    });

    tabContent.forEach(function (tabContent) {
      tabContent.classList.remove("work-list-item--active");
    });

    document.querySelector(`[data-target="${path}"]`).classList.add("work-list-item--active");

    event.currentTarget.classList.add("work-nav__link--active");
  });
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',
});

//JQuery
$(function () {
  $("#accordion").accordion();
});
