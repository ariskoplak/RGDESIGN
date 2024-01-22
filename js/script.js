// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#pintasan-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar mav hilang
const pintasan = document.querySelector("#pintasan-menu");

document.addEventListener("click", function (e) {
  if (!pintasan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
