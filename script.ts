'use strict';

let active = { x: 1, y: 0 }
const slides = document.getElementsByTagName("section");
const posts = document.getElementsByTagName("article")

function updateView() {
  const y = -110 * (active.y > 0 ? active.y + (5 - 2.25) : 0);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "25%";
    switch (i - active.x) {
      case -2:
        slides[i].style.transform = "translate(-220%, " + String(y / 5) + "%)";
        break;
      case -1:
        slides[i].style.transform = "translate(-110%, " + String(y / 5) + "%)";
        break;
      case 0:
        slides[i].style.transform = "translate(0, " + String(y / 5) + "%)";
        if (active.y == 0) {
          slides[i].style.opacity = "100%";
        }
        break;
      case 1:
        slides[i].style.transform = "translate(110%, " + String(y / 5) + "%)";
        break;
      case 2:
        slides[i].style.transform = "translate(220%, " + String(y / 5) + "%)";
        break;
    }
  }

  for (let j = 0; j < posts.length; j++) {
    let offset = 110 * j
    posts[j].style.transform = "translate(" + String(110 * (1 - active.x)) + "%," + String(y + offset) + "%)";
    posts[j].style.opacity = "25%";
    if (j == active.y - 1) {
      posts[j].style.opacity = "1";
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 13 && active.y >= 1) {
    // posts[active.y].style.transition("transform 0.5s ease, opacity 0.5s ease");
    event.preventDefault();
    updateView();
  }
  else if (event.keyCode == 37 && active.y == 0 && active.x >= 1) {
    active.x--;
    event.preventDefault();
    updateView();
  } else if (event.keyCode == 38 && active.y >= 1) {
    active.y--
    event.preventDefault();
    updateView();
  } else if (event.keyCode == 39 && active.y == 0 && active.x <= 1) {
    active.x++
    event.preventDefault();
    updateView();
  } else if (event.keyCode == 40 && active.y < posts.length) {
    active.y++
    event.preventDefault();
    updateView();
  }
})