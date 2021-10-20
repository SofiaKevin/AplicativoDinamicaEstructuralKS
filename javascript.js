// Adapted from Dan Shiffman, natureofcode.com

angleMode = "radians";

var period = 120;     // length of one period in frames
var amplitude = 100;  // in pixels
stroke(0, 0, 0);
strokeWeight(2);
fill(127);
    
draw = function() {
    background(255);
    
    // Calculating horizontal location according to
    //  formula for simple harmonic motion
    var x = amplitude * sin(TWO_PI * frameCount / period);
    pushMatrix();
    translate(width/2, height/2);
    line(0, 0, x, 0);
    ellipse(x, 0, 48, 48);
    popMatrix();
};