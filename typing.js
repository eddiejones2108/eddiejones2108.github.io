class TxtRotate {
  constructor(el, toRotate) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<h1><a class="wrap">' + this.txt + '</a></h1>';

    var that = this;
    var delta = 100;

    if (this.isDeleting) { delta = 50; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}


window.onload = function () {
  var elements = document.getElementsByClassName('carousel');
  for (var i = 0; i < elements.length; i++) {
    new TxtRotate(elements[i], [ "Reto password managers", "Some other items" ]);
  }
};