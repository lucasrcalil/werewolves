var blocks = document.querySelectorAll(".block-vert");
var gameBlocks = document.querySelectorAll(".block");
var homeBlocks = document.querySelectorAll(".home-block");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    blocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.remove("inactive");
      }, (index + 1) * 200);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    gameBlocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.remove("inactive");
      }, (index + 1) * 200);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    homeBlocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.remove("inactive");
      }, (index + 1) * 200);
    });
  });
});
