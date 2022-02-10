let intro = document.querySelector(".intro");
let tooth = document.querySelector(".tooth");
let werewolves = document.querySelector(".werewolves");

if (sessionStorage.getItem("firstVisit") == null) {
  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      tooth.classList.add("display-none");
    }, 1500);
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      werewolves.classList.remove("display-none");
    }, 1500);
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      werewolves.classList.add("display-none");
    }, 3700);
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      intro.classList.add("display-none");
    }, 3800);
  });
  sessionStorage.setItem("firstVisit", "true");
} else {
  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      tooth.classList.add("display-none");
    }, 0);
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      intro.classList.add("ready");
    }, 0);
  });
}

// document.getElementsByClassName("hamburguer-button")[0].onclick = function () {
//   var element = document.querySelector(".menu-container");
//   element.classList.remove("inactive");
// };

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
