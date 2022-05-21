var bouncingObject = document.querySelector("#bouncingObject");

// x and y are the coordinates of the circle
// vx and vy are the respective speeds
var bouncingObjectWidth = bouncingObject.offsetWidth;
var bouncingObjectHeight = bouncingObject.offsetHeight;

var x = Math.floor(Math.random() * (window.innerWidth - bouncingObjectWidth));
var y = Math.floor(Math.random() * (window.innerHeight - bouncingObjectHeight));
var vx = Math.floor(Math.random() * 2 + 2);
var vy = Math.floor(Math.random() * 2 + 2);

move();

// This function will do the animation
function move() {
    requestAnimationFrame(move);

    bouncingObject.style.top = y.toString()+'px';
    bouncingObject.style.left = x.toString()+'px';

    // Conditions so that the ball bounces
    // from the edges
    if (bouncingObjectWidth + x > window.innerWidth) {
        vx = -Math.abs(vx);
    }
    if (x < 0) {
        vx = Math.abs(vx);
    }
    if (y + bouncingObjectHeight > window.innerHeight) {
        vy = -Math.abs(vy);
    }
    if (y < 0) {
        vy = Math.abs(vy);
    }
    x = x + vx;
    y = y + vy;

}