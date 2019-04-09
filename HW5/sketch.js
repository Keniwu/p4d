var bubbleXPos = [];
var bubbleYPos = [400];
var size = [];
var alpha = [];
var bubbleNumber = 100;

function setup() {
  createCanvas(400, 400);
  fillBubbleLocations();
  fillBubbleSize();
  fillBubbleAlpha();

}

function draw() {
  noStroke();
  background(0);
  bubbleRise();
  drawBubbles();
  
}

	function fillBubbleLocations(){
// iterate 100 times
// assign each element in the bubbleXPos,bubbleYPos arrays 
// a random starting value
  for( var i = 0; i < bubbleNumber; i++){
  bubbleXPos[i] = random (0,width);
  bubbleYPos[i] = random (-25,height+25);
  }
}

// iterate 100 times
// random bubble size 
function fillBubbleSize(){
  for( var i = 0; i < bubbleNumber; i++){
  size[i] = random (10,50);
  }
}

function fillBubbleAlpha(){
  for( var i = 0; i < bubbleNumber; i++){
  alpha[i] = random (0,255);
  }
}

// bubble rise, when the bubble reach the top, return to the bottom
function bubbleRise(){
  for( var i = 0; i < bubbleNumber; i++){
  	bubbleYPos[i]--
    if (bubbleYPos[i] < -25){
    bubbleYPos[i] = height+25
    }
  }
}
  
function drawBubbles(){
   for( var i = 0; i < bubbleNumber; i++){
     fill(73,137,252,alpha[i]);
     ellipse(bubbleXPos[i], bubbleYPos[i], size[i]);
   }
}