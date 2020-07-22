
function updateView(event) {
  for (let sec of document.getElementsByTagName("section")) {
    let rec = sec.getBoundingClientRect();

    // Height of the section not in the window
    let off = (Math.max(rec.bottom - window.innerHeight, 0) - Math.min(rec.top, 0)) / (1.5 * rec.height);
    console.log(off, rec.height);

    if ((rec.top <= 0 && rec.bottom >= window.innerHeight) || off < 0.25) {
      // The section is greater than the window size or 75% of box is showing
      sec.style.opacity = 1;
    }
    else {
      sec.style.opacity = Math.pow(1 - off, 2);
    }
  }
}