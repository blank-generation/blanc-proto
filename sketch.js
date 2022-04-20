
let ts, tp;
let tex1;
let canvas;
let tr, tb, tg;
let collar, resetRotate;
let curRotate, cr, dirX, dirY;

p5.disableFriendlyErrors = true;

function preload() {

    ts = loadModel('assets/T-shirt 3D-short sleeve.obj', true);
    tp = loadModel('assets/T-shirt Polo Short Sleeve.obj', true);

}



function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
    tr = 57;
    tb = 73;
    tg = 81;
    resetRotate = false;
    curRotate = 290;

}


function draw() {
    curRotate += 1;
    if (resetRotate) {
        curRotate = 290;
        resetRotate = false;
    }
    cr = curRotate * 0.01;
    background(255);
    dirX = (mouseX / width - 0.5) * 2;
    dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);

    ambientLight(95)

    scale(1.2);
    rotateX(3);
    rotateZ(0);

    translate(width / 6, -height / 16);
    noFill();
    stroke(100);
    strokeWeight(2)
    scale(1.4)

    rotateX(map(mouseY, 0, height, .5, -.2));
    rotateY(map(mouseX, 0, width, .5, -.2));
    rect(-125, -150, 250, 300);

    rotateY(cr);

    ambientMaterial(tr, tg, tb);
    noStroke()

    if (collar > 0) {
        model(tp);
    }
    else {
        model(ts);
    }


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function setColor(el) {

    // console.log(el.style['background-color'].toString().slice(4).replace(")", "").split(",")[0])
    tr = el.style['background-color'].toString().slice(4).replace(")", "").split(",")[0];
    tg = el.style['background-color'].toString().slice(4).replace(")", "").split(",")[1];
    tb = el.style['background-color'].toString().slice(4).replace(")", "").split(",")[2];
}

function setTee(el) {

    resetRotate = true;

    collar = el.getAttribute('data-collar');
    el.classList.add("active");

    if (collar > 0) {
        el.previousElementSibling.classList.remove("active");
        //    console.log( el.previousElementSibling.classList)

    } else {
        el.nextElementSibling.classList.remove("active");
        // console.log( el.nextElementSibling)
    }

}