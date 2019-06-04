var capture;
var circleX = 0;


function setup() {
  createCanvas(2000, 2000);

  capture = createCapture(VIDEO);
  capture.size(0, 0);

  noStroke();
 background(0);
}

function draw() {
    textSize(45);
    text('This is a video filter made by William Vivas ', 700, 520);
    textSize(45);
    text('Using P5.JS ', 700, 620);
    textSize(45);
    text('Use the mouse over the video to change it ', 700, 720);
    capture.loadPixels();
  var stepSize = 4;
  for (var x = 0; x < capture.width; x += stepSize) {
    for (var y = 0; y < capture.height; y += stepSize) {
      var index = ((y * capture.width) + x) * mouseY;
      var redVal = capture.pixels[index + mouseX];
      var greenVal = capture.pixels[index + mouseX];
      var blueVal = capture.pixels[index + circleX];
      fill(redVal * 4, greenVal, blueVal);
      rect(x, y, stepSize, stepSize);
    }
  }
  textSize(50);
  text('This is a edited video', 50, 300);
  fill(0, mouseX, mouseY);
  ellipse(mouseX, mouseY, 55, 55);


}