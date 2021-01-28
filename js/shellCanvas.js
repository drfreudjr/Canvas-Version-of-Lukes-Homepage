/* Javascript Shell */
// 'use strict';
let cl = console.log;

window.onload = function () {   // onload wrapper

var canvas;    // Global canvas object reference
var context;       // Global 2D context reference

function createCanvas () {                
    const canvas = document.createElement("canvas"); 
    canvas.style.position = "absolute"; 
    canvas.style.left     = "0px";      
    canvas.style.top      = "0px";
    // canvas.style.zIndex   = 1;        
    document.body.appendChild(canvas);  // Add to document
    return canvas;
}

function sizeCanvas () {                // Create or resize 
    if (canvas === undefined) {         // Check for global canvas reference
        canvas = createCanvas();        // Create a new canvas element
        context = canvas.getContext("2d");  // Get the 2D context
    }
    canvas.width  = innerWidth;         // Set the canvas resolution to fill the page
    canvas.height = innerHeight;   
    drawScreen()     
}

addEventListener("resize", sizeCanvas); // Event listener

sizeCanvas();   // Begin the resize loop by creating canvas

// // // // // // // // // // // Evrything above here is responsive full-screen canvas - below is page-specific

function drawScreen() {

    intensity = 1.2             // THe golden ratio is peaceful - this sharpens it
    let goldenRatio = .382 * intensity

    let width = innerWidth
    let height = innerHeight
    let backgroundColor = 'black'

    context.fillStyle = backgroundColor             // set background color
    context.fillRect(0, 0, width, height)

    const c = new Image()                   // draw foreground image
    c.src = "bostonSat.webp"   
    context.drawImage(c, 0, 0)

    xWidth = Math.round(width*goldenRatio)   //  make the triangle cutout (top)
    yHeight = Math.round(height*goldenRatio)

    context.fillStyle = backgroundColor
    context.beginPath()             // draw top triangle
    context.moveTo(xWidth, 0)       // tr
    context.lineTo(0,0)             // corner
    context.lineTo(0, yHeight)      // bl
    context.fill()                  

    context.beginPath()             // draw bottom triangle
    context.moveTo(width - xWidth, height)  //bl
    context.lineTo(width,height)    // corner
    context.lineTo(width, height - yHeight) // tr
    context.fill()


    baseFontSize = 35       // This is for full screen desktop (1360 wide)
    cl(width)
    percentOfFullSize = width/1360 // percent of full screen
    adjustedFontSize = baseFontSize*percentOfFullSize
    calculatedFont = (`${adjustedFontSize}px serif`)
    cl(calculatedFont)

    context.font = calculatedFont
    context.fillStyle = "#7aa600"
    context.fillText('Luke Wilcox', 20, 40)

    k = .6  // this constant scales to the above calculated font
    context.font =  (`${adjustedFontSize*k}px serif`)
    context.fillStyle = "#7aa600"
    context.fillText('About Me', 20, 80)

}


}   //onload wrapper