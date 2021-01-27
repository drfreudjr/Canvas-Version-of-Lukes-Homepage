/* Javascript Shell */
// 'use strict';
let cl = console.log;

window.onload = function () {

elContext = document.querySelector("canvas")
context = elContext.getContext("2d");

initialize()

function initialize () {
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas()
}

function resizeCanvas() {
    elContext.width = window.innerWidth;
    elContext.height = window.innerHeight;
    drawScreen();
}

function drawScreen() {
    var c = new Image()
    c.src = "bostonSat.webp"   
    context.drawImage(c, 0, 0)



}





}   //end onload wrapper