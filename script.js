'use strict';

let active = { x: 1, y: 0 }
const slides = document.getElementsByTagName("section");
const posts = document.getElementsByTagName("article")

function gotoView(x, y) {
  active = {x : x, y: y};
  updateView();
}

function updateView() {
  const r = 5;
  const h_delta = 10;
  const v_detla = 100 + (r * h_delta);
  const y = -v_detla * (active.y > 0 ? active.y + (r / 2) : 0);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "25%";
    switch (i - active.x) {
      case -2:
        slides[i].style.transform = "translate(" + String(-2 * (h_delta + 100)) + "%, " + String(y / r) + "%)";
        break;
      case -1:
        slides[i].style.transform = "translate(" + String(-1 * (h_delta + 100)) + "%, " + String(y / r) + "%)";
        break;
      case 0:
        slides[i].style.transform = "translate(0, " + String(y / r) + "%)";
        if (active.y == 0) {
          slides[i].style.opacity = "100%";
        }
        break;
      case 1:
        slides[i].style.transform = "translate(" + String(1 * (h_delta + 100)) + "%, " + String(y / r) + "%)";
        break;
      case 2:
        slides[i].style.transform = "translate(" + String(2 * (h_delta + 100)) + "%, " + String(y / r) + "%)";
        break;
    }
  }

  for (let j = 0; j < posts.length; j++) {
    let offset = v_detla * j
    posts[j].style.transform = "translate(" + String((1 - active.x) * (h_delta + 100)) + "%," + String(y + offset) + "%)";
    posts[j].style.opacity = "25%";
    if (j == active.y - 1) {
      posts[j].style.opacity = "1";
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 13 && active.y >= 1) {
    window.location.href = posts[active.y - 1].getAttribute("href");
    event.preventDefault();
  }
  else if (event.keyCode == 37 && active.y == 0 && active.x >= 1) {
    active.x--;
    event.preventDefault();
    updateView();
  } else if (event.keyCode == 38 && active.x == 1 && active.y >= 1) {
    active.y--
    event.preventDefault();
    updateView();
  } else if (event.keyCode == 39 && active.y == 0 && active.x <= 1) {
    active.x++
    event.preventDefault();
    updateView();
  } else if (event.keyCode == 40 && active.x == 1 && active.y < posts.length) {
    active.y++
    event.preventDefault();
    updateView();
  }
})
