var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length, fullTxt = this.toRotate[i], delta = 170 - Math.random() * 100, that = this;

    if (this.isDeleting) this.txt = fullTxt.substring(0, this.txt.length - 1);
    else this.txt = fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = '<p class="write">' + this.txt + '</span>';

    if (this.isDeleting) {
        delta /= 2;
        if (this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 300;
        }
    }

    else if (this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    }

    setTimeout(function () { that.tick(); }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName('text-r');
    new TxtRotate(elements[0], JSON.parse('[" Hola-network"]'), 700);
};