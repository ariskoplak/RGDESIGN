// Toggle class active u/ katalog
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#pintasan-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#keranjang-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik diluar side bar mav hilang
const pintasan = document.querySelector("#pintasan-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#keranjang-button");
document.addEventListener("click", function (e) {
  if (!pintasan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box

const itemdetailmodal = document.querySelector("#item-detail-modal");
const itemdetailbuttons = document.querySelectorAll(".item-detail-button");

itemdetailbuttons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailmodal.style.display = "flex";
    e.preventDefault();
  };
});

// klil tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailmodal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemdetailmodal) {
    itemdetailmodal.style.display = "none";
  }
};
