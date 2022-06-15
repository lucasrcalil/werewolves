var blocks = document.querySelectorAll(".block-vert");
var gameBlocks = document.querySelectorAll(".block");
var homeBlocks = document.querySelectorAll(".home-block");
var titleBlocks = document.querySelectorAll(".block-vert-titles");
var streamersBlocks = document.querySelectorAll(".block-vert-streamers");
var partnerBlocks = document.querySelectorAll(".block-vert-partners");
var shopBlocks = document.querySelectorAll(".block-vert-shop");

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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    titleBlocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.remove("inactive");
      }, (index + 1) * 200);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    streamersBlocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.remove("inactive");
      }, (index + 1) * 200);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    partnerBlocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.remove("inactive");
      }, (index + 1) * 200);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    shopBlocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.remove("inactive");
      }, (index + 1) * 200);
    });
  });
});
