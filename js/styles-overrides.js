const hamburger = document.querySelector(".hamburger");
const navBarListUl = document.querySelector(".navbar-list__list");
const navBarList = document.querySelector(".navbar__list");
const root = document.querySelector(":root");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  const oldWidth = getComputedStyle(navBarList).width;
  navBarList.classList.add("navbar__list--active");
  navBarListUl.classList.add("navbar-list__list--active");
  hamburger.classList.add("hamburger--inactive");
  setTimeout(() => {
    navBarList.classList.remove("navbar__list--active");
    navBarListUl.classList.remove("navbar-list__list--active");
    hamburger.classList.remove("hamburger--inactive");
  }, 5000);
});
