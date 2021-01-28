/* Javascript Shell */
// 'use strict';
const cl = console.log;

window.onload = function () {   // onload wrapper

var canvas;        // Global canvas object reference
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
    if (canvas === undefined) {         
        canvas = createCanvas();        
        context = canvas.getContext("2d");  
    }
    canvas.width  = innerWidth; 
    canvas.height = innerHeight; 
    drawScreen()     
}

addEventListener("resize", sizeCanvas); // Event listener

sizeCanvas();   // Begin the resize loop by creating canvas

// // // // // // // // // // // Evrything above here is responsive full-screen canvas - below is page-specific

function drawScreen() {

    intensity = 1.65                        // THe golden ratio is peaceful - this sharpens it
    let goldenRatio = .382 * intensity

    let width = innerWidth
    let height = innerHeight
    let backgroundColor = '#000000'

    context.fillStyle = backgroundColor             // set background color in case u want to use mask
    context.fillRect(0, 0, width, height)           // try a mask varient and compare performance

    const c = new Image()                   // draw foreground image
    c.src = "bostonSat.webp"   
    context.drawImage(c, 0, 0)

    xWidth = Math.round(width*goldenRatio)   //  make the triangle cutout (top) - set initial distance from corner
    yHeight = Math.round(height*goldenRatio)

    context.fillStyle = backgroundColor // draw top triangle
    context.beginPath()             
    context.moveTo(xWidth, 0)       // tr
    context.lineTo(0,0)             // corner
    context.lineTo(0, yHeight)      // bl
    context.fill()                  // last path is implicit

    context.beginPath()                     // draw bottom triangle
    context.moveTo(width - xWidth, height)  //bl
    context.lineTo(width,height)            // corner
    context.lineTo(width, height - yHeight) // tr
    context.fill()

    function dynamicFontSize (originalFontSize, originalCanvsSize = 1360) {
        
    }

    baseFontSize = 55       // What was the initial full screen desktop font at 1360px
    // cl(width)
    percentOfFullSize = width/1360 // ratio of current screen/full screen
    adjustedLinearFontSize = baseFontSize*percentOfFullSize       // linear scaling to the ratio // try to sow down
    
    adjustedNonlinearFontSize = baseFontSize /(1-Math.log(percentOfFullSize))   //Experimental

    cl(adjustedLinearFontSize, adjustedNonlinearFontSize)

    calculatedFont = (`${adjustedNonlinearFontSize}px Courier`)        //string creation
    cl(calculatedFont)

    context.font = calculatedFont                           // assign to the object
    context.fillStyle = "#7aa600"                           // green pulled from picture
    context.fillText('Luke Wilcox', 20, 80)


 

                                                            // write all this calculation as a function
}   //drawScreen function


}   //onload wrapper