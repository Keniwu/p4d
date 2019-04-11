var myBubble = [];

function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < 100; i++){
      myBubble[i]=new bubble();
  }
}

function draw() {
  background(0);
  noStroke();
  for(var i = 0; i < 100; i++){
   myBubble[i].bubbleRise();
   myBubble[i].drawBubble();
  }
}


