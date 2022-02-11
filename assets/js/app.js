document.getElementsByClassName("hamburguer-button").onclick = function () {
  var menu = document.getElementsByClassName("menu-container");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};

const btnMobile = document.getElementsByClassName("hamburguer-button");

function toggleMenu() {
  const nav = document.querySelector(".menu-container");
  nav.classList.toggle("active");
  const body = document.querySelector(".relative-position");
  body.classList.toggle("fixed-position");
}

btnMobile.addEventListener("click", toggleMenu);
