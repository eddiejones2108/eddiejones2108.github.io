class Carousel {
  constructor(element) {
    this.element = element;
    this.links = Array.from(element.getElementsByTagName("a"));
    this.index = 0;
    this.length = 0;
    this.deleting = false;
    this.tick();
  }

  tick() {
    let link = this.links[this.index];

    this.element.innerHTML = '<a href="' + link.href + '">' + link.text.substr(0, this.length) + '</a>';

    if (this.deleting) {
      if (this.length == 0) {
        this.deleting = false;
        this.index = (this.index + 1) % this.links.length;
        setTimeout(() => this.tick(), 500);
      }
      else {
        this.length--;
        setTimeout(() => this.tick(), 50);
      }
    }
    else {
      if (this.length == link.text.length) {
        this.deleting = true;
        setTimeout(() => this.tick(), 1500);
      }
      else {
        this.length++;
        setTimeout(() => this.tick(), 100);
      }
    }
  }
}

window.onload = function () {
  var elements = document.getElementsByClassName('carousel');
  for (var i = 0; i < elements.length; i++) {
    new Carousel(elements[i]);
  }
};