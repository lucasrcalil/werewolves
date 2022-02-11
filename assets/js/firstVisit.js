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
