import css from '../styles/main.css';
import Icon from '../img/logo.png';

let img;

let index = function(p) {

    p.preload=function() {
        img = p.loadImage(Icon);
    }

    p.setup=function(){
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    }

    p.draw=function() {
        p.background(0);
        p.push();
        p.imageMode(p.CENTER);
        let time = p.millis();
        p.rotateX(time / 1000);
        p.rotateZ(time / 1234);
        p.image(img, 0,0);
        p.pop();
    }

    p.windowResized=function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}

const containerElement = document.getElementById('p5-container');
new p5(index, containerElement);
