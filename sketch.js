var spot = {
  x:0,
  y:0
};

var color = {
  r:0,
  g:0,
  b:0
};

var rainDrop = 70,
    diameter,
    opacity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  spot.x = random(0,width); 
  spot.y = random(0,height);

  color.r = random(10,200);
  color.g = random(10,100);
  color.b = random(10,255);

  diameter = random(1,rainDrop);
  opacity = random(1,10);

  noStroke();
  fill(color.r,color.g,color.b,opacity);
  ellipse(spot.x,spot.y,diameter,diameter);
}