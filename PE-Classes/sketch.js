var myBall;

function setup() {
  createCanvas(400, 400);
  myBall = new Ball();
}

function draw() {
  background(220);
  myBall.bounce();
  myBall.move();
  myBall.display();
}


