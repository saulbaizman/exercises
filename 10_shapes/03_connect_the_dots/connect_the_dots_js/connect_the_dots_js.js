var xData = [
  81, 83, 83, 83, 83, 82, 79, 77, 80, 83, 
  84, 85, 84, 90, 94, 94, 89, 85, 83, 75, 
  71, 63, 59, 60, 44, 37, 33, 21, 15, 12, 
  14, 19, 22, 27, 32, 35, 40, 41, 38, 37, 
  36, 36, 37, 43, 50, 59, 67, 71];
var yData = [
  10, 17, 22, 27, 33, 41, 49, 53, 67, 76, 
  93, 103, 110, 112, 114, 118, 119, 118, 121, 121, 
  118, 119, 119, 122, 122, 118, 113, 108, 100, 92, 
  88, 90, 95, 99, 101, 80, 62, 56, 43, 32, 
  24, 19, 13, 16, 23, 22, 24, 20];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(253);

  push(); 
  scale(5);
  translate(23, 9);

  fill(229); 
  stroke(0); 
  strokeJoin(MITER); 
  strokeWeight(6.0/5);


  beginShape();
  for (var i=0; i<xData.length; i++) {
    var px = xData[i];
    var py = yData[i];
    vertex(px, py);
  }
  endShape(CLOSE);

  fill(0);
  noStroke();
  for (var i=0; i<xData.length; i++) {
    ellipse (xData[i], yData[i], 3.6, 3.6);
  }

  pop();
}
