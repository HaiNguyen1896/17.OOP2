/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
            this.left += 50;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= 50;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
            this.top += 50;
        console.log('ok: ' + this.top);
    }
    this.moveUp = function () {
        this.top -= 50;
        console.log('ok: ' + this.top);
    }

}

var hero = new Hero('https://kit168.com/wp-content/uploads/2022/12/Uzumaki-Naruto-ver-2-kit168.com_.jpg', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size&&hero.top==20) {
        hero.moveRight();
    }else if (hero.left > window.innerWidth - hero.size && window.innerHeight - hero.size > hero.top){
        hero.moveDown();
    }else if (window.innerHeight - hero.size < hero.top){
        hero.moveLeft();
    }
    if (hero.left < 30){
        hero.moveUp()
    }
    //hero.moveDown();

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();