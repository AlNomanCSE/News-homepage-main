const forNav = document.querySelector(".menumobile");
const navList = document.querySelector(".navbarListmobile");
const menu = document.querySelector(".menu");

let menuOpen = false;

forNav.addEventListener("click", () => {
  if (!menuOpen) {
    navList.classList.add("visible");
    document
      .querySelector(".backgroundOpacity")
      .classList.add("opacityControl");
    forNav.querySelector("img").src = "./images/icon-menu-close.svg";
    menuOpen = true;
  } else {
    navList.classList.remove("visible");
    document
      .querySelector(".backgroundOpacity")
      .classList.remove("opacityControl");
    forNav.querySelector("img").src = "./images/icon-menu.svg";
    menuOpen = false;
  }
});
