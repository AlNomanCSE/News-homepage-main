const forNav = document.querySelector(".menumobile");
const navList = document.querySelector(".navbarListmobile");

// window.addEventListener("scroll", () => {
//   navList.classList.toggle('sticky',window.scrollY>0);
// });
forNav.addEventListener("click", () => {
  navList.classList.toggle("visible");
  document
    .querySelector(".backgroundOpacity")
    .classList.toggle("opacityControl");
});
