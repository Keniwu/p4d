// Keni Wu
// IGME-609 Project 3
// Interactive Scene - IGME.609.01
// March 17, 2019


var xLocation = 80; // fish x location
var yLocation = 139; // fish y location
var n = 0; // score
var yEllipse = -25; // ellipse y location
var m = 0; // move with fish
var flyY = 0; // control bubble y location
var t = 255; // background transparent

function setup() {
  createCanvas(1000, 1000);
}
 
function draw() {
  background(0); 
  noStroke();
  
  // make background changes
  backgroundChange()
  
  // draw fishFood
  fishFood();
  
  // make fishfood drop from the top and lop them
  fishfoodLoop();
  
  // draw sand
  sand();
  
  // draw rock
  rock();
   
  // draw fish
  // use xLocation and yLocation to control the fish location
  fish(xLocation,yLocation);
  
  // use "a" & "d" to control the x location of fish
  fishMove();
  
  
  // hidden rectangle behind the fish 
  // ( the area designed for calculating the score)
	 fill(0,0,0,0);	 // transparent 
  // variable m change the xlocation of rectangle
  // rectangle move with the fish
   rect(370+m,540,350,255); 
  
  // white text "score" at (60,80), text size 36
  fill(255);
  textSize(36);
  text("Score   " + n,60,80);
  
  // when green fishfood is completely within the hidden rectangle, score increases
  // rectangle represent the area of the fish
  scoreIncrease();
  
  // when red fishfood is within the hiddenrectangle, score decreases
  scoreDecrease();
  
  // bubble follow the mouse
  bubbleFollow();
  
  // game instruction
  // when frameCount<300, game instruction shows,white,a little transparent, size 18, under Score
  if(frameCount<300){
  fill(255,255,255,200);
  textSize(18);
  text("press ‘A’ and ‘D’ to move the fish and get score",62,120);
  text("press ‘W’ and ‘S’ to control the background color",62,150);
  }
  
  // mouse interaction instruction
  // size 30, a little transparent
  textSize(30);
  text("Put the mouse on the sand to emit bubbles",200,980);
  
  // when 880<mouseY<1000, emit bubbles 
  // draw bubble, move right 100
  bubble(100,0);
  // draw bubble, move left 100, delay 400
  bubble(-100,-400);
}

// background become darker when "S" is pressed
// background become lighter when "W" is pressed


function backgroundChange(){
  // draw a blue rectangle as the backgournd
  fill(47,117,242,t);
  rect(0,0,1000,1000);
  // press w to make the blue background not transparent
  // hidden the black background, become lighter
   if(keyIsPressed && key == 'w')
	{
  // when "w" is pressed, the opaqe of the blue background
  // + 20 pre frame
  t = t + 20;
  }
  // press s to make the background transparent
  // show the black, background become darker
   if(keyIsPressed && key == 's')
	{
  // when "s" is pressed, the opaqe of the blue background
  // - 20 pre frame
  t = t - 20;
  }
  // make the highest value of t is 255
  // when t is over 255, return to 255
   if(t > 255){
     t=255
   }
  // make the lowest value of t is 0
  // when t is below 0, return to 0
   if(t<0){
     t=0
   }
}

// use "d" and "a" to move the xlocation of fish
// make the hidden rectangle move with the fish
function fishMove(){
  // press "d" to make the fish move 1 step to the left
  if(keyIsPressed && key == 'd')
	{
  // xlocation of fish changes,+5 per frame
  xLocation = xLocation + 5; 
  // xlocation of the hidden rectangle changes, +5 per frame
  m = m + 5;
  }
  
  // press "a" to make the fish move 1 step to the right
  if(keyIsPressed && key == 'a')
	{
  // xlocation of fish changes,-5 per frame
  xLocation = xLocation - 5; 
  // xlocation of the hidden rectangle changes,-5 per frame
  m = m - 5;
  }
}


// 5 bubbles follow the mouse
function bubbleFollow(){
  fill(255,255,255,50);
  stroke(255,255,255,100);
  
  // 5 bubbles follow the mouse
  // each bubble, the Y location decreases 60, 
  // the diameter increases 10
  for( var bubbleN=0; bubbleN < 5; bubbleN = bubbleN + 1){
  ellipse(mouseX,mouseY-bubbleN*60,10*(bubbleN+1));
  }
}


// draw fish food
function fishFood(){
   // fishfood small, green, score increase
  fill(29,216,91); // green
  
  // fishfood1 drop at the speed of +4
  ellipse(200,yEllipse,50);
  
  // fishfood2 drop, delay 900/4 frame, at faster speed
  ellipse(700,(yEllipse-900)/0.8,50);
  
  // fishfood3 drop, delay 100/4 frame, at slower speed
  ellipse(900,(yEllipse-100)/2.50,50);
  
  // fishfood4 drop, delay 900/4 frame, at faster speed
  ellipse(300,(yEllipse-900)/0.95,50);
  
  // fishfood big, red, score decrease
  fill(255,81,72); // red
  // fishfood5 drop, delay 300/4 frame, at slower speed
  ellipse(500,(yEllipse-300)/1.5,80);
}


// fish food drop and loop
function fishfoodLoop(){
    // fishfood drop when yEllipse < 2000
  if(yEllipse < 2000){
  yEllipse = yEllipse + 4
  }
  
  // fishfood y location return to the original number
  // loop the fish food
  else{
  yEllipse = -25;
  }
}


// draw sand
function sand(){
  fill(252,198,43); // dark yellow
  rect(0,880,1000,120);
  fill(249,218,88); // bright yellow
  ellipse(500,880,1000,124);
}

// draw rock
function rock(){
  // rock left
  fill(249,245,232); 
  ellipse(242,860,66,25);
  // rock middle
  fill(229,222,204);
  ellipse(483,885.5,35.5,25);
  //rock right1
  fill(249,245,232);
  ellipse(707,873,66,25);
  //rock right2
  fill(229,222,204);
  ellipse(759,891,102,33);
}


function scoreIncrease(){
  // if the fishfood is within the rectangle, score increase
  // if the fishfood1(200,yEllipse,50)
  // is within the rectangle, score continues + 1
   if(370+m<175 && 370+m+350>225 && yEllipse>=515 && yEllipse<=770){
    n = n + 1;
	}
  
  // if the fishfood2(700,(yEllipse-900)/0.8,50)
  // is within the rectangle, score continues + 1
  if(370+m<675 && 370+m+350>725 && (yEllipse-900)/0.8>=515 && (yEllipse-900)/0.8<=770){
    n = n + 1;
	}
  
  // if the fishfood3(900,(yEllipse-100)/2.5,50)
  // is within the rectangle, score continues + 1
  if(370+m<875 && 370+m+350>925 && (yEllipse-100)/2.50>=515 && (yEllipse-100)/2.5<=770){
    n = n + 1;
	}
  
  // if the fishfood4(300,(yEllipse-900)/0.95,50)
  // is within the rectangle, score continues + 1
   if(370+m<275 && 370+m+350>325 && (yEllipse-900)/0.95>=515 && (yEllipse-900)/0.95<=770){
    n = n + 1;
	}
}

function scoreDecrease(){
  // if the fishfood5(ellipse(500,(yEllipse-300)/1.5,80)
  // is within the rectangle, score continues + 2
   if(370+m<460 && 370+m+350>540 && (yEllipse-300)/1.5>=500 && (yEllipse-300)/1.5<=755){
    n = n - 2;
	}
}

function fish(x,y){
  push()
  translate(x,y);
  fill(249,115,25); // dark orange
  
  // fish tail
  beginShape();
  curveVertex(269.567,437.826);
  curveVertex(334.333,455.259);
  curveVertex(377.917,517.195);
  curveVertex(378.376,542.428);
  curveVertex(328.369,535.546);
  curveVertex(300.842,511.23);
  curveVertex(289.37,463.98);
  curveVertex(269.567,437.826);
  curveVertex(334.333,455.259);
  curveVertex(377.917,517.195);
  curveVertex(378.376,542.428);
  endShape();
  beginShape();
  curveVertex(269.567,628.488);
  curveVertex(289.372,602.337);
  curveVertex(300.842,555.083);
  curveVertex(328.369,530.767);
  curveVertex(378.376,523.886);
  curveVertex(377.917,549.118);
  curveVertex(334.333,611.054);
  curveVertex(269.567,628.488);
  curveVertex(289.372,602.337);
  curveVertex(300.842,555.083);
  curveVertex(328.369,530.767);
  endShape();
  
  // fish body
  ellipse(493.318,533.157,265.706,235);
  
  // fish fin up
  beginShape();
  curveVertex(443.848,388.142);
  curveVertex(476.102,408.849);
  curveVertex(503.748,436.496);
  curveVertex(479.393,446.369);
  curveVertex(441.512,454.926);
  curveVertex(430.683,443.736);
  curveVertex(435.949,416.09);
  curveVertex(443.848,388.142);
  curveVertex(476.102,408.849);
  curveVertex(503.748,436.496);
  endShape();
  
  // fish fin down
  beginShape();
  curveVertex(393.409,661.619);
  curveVertex(413.363,626.788);
  curveVertex(448.284,608.406);
  curveVertex(466.576,618.384);
  curveVertex(462.835,641.249);
  curveVertex(435.202,656.512);
  curveVertex(393.409,661.619);
  curveVertex(413.363,626.788);
  curveVertex(448.284,608.406);
  curveVertex(466.576,618.384);
  endShape()
  
  // fish face
  fill(251,169,68); // light orange
  ellipse(539.821,530.837,172.701,184.605);
  
  // fish eye
  fill(252,120,31); // dark orange
  ellipse(558.565,497.918,65,65);
  fill(255); // white
  ellipse(565.732,500.07,60.716,60.716);
  fill(0);// black
  ellipse(561.746,505.619,47);
  fill(255); // white
  ellipse(564.232,496.771,12.726);
  
  // fish mouth
  fill(244,208,37);
  beginShape();
  curveVertex(596.269,551.628);
  curveVertex(616.699,545.386);
  curveVertex(635.454,552.315);
  curveVertex(638.417,562.971);
  curveVertex(628.58,569.845);
  curveVertex(614.487,562.971);
  curveVertex(596.269,551.628);
  curveVertex(616.699,545.386);
  curveVertex(635.454,552.315);
  endShape();
  fill(255,227,48);
  beginShape();
  curveVertex(596.102,550.537);
  curveVertex(617.411,537.269);
  curveVertex(633.896,529.228);
  curveVertex(645.402,537.269);
  curveVertex(641.937,549.732);
  curveVertex(619.999,557.837);
  curveVertex(596.102,550.537);
  curveVertex(617.411,537.269);
  curveVertex(633.896,529.228);
  curveVertex(645.402,537.269);
  endShape();
  pop();
}

// when 880<mouseY<1000, bubbles emit
function bubble(x,y){
	push();
  translate(x,y);
  // when 880<mouseY<1000, bubbles show and fly, diameter increases
  if(mouseY > 880 && mouseY < 1000 && flyY<=1500){
    fill(255,255,255,255-flyY/10);
    // 1st bubble
    ellipse(500,1000-flyY,10+flyY/80);
    // 2nd bubble, delay 100
    ellipse(500,1100-flyY,10+flyY/80);
    // 3rd bubble, delay 300
    ellipse(500,1300-flyY,10+flyY/80);
    // 4th bubble, delay 600
    ellipse(500,1600-flyY,10+flyY/80);
    flyY = flyY + 8
  }
  // when the y location of first bubble at -500, loop bubbles
  else if(flyY>1500){
    flyY=0
  }
  pop();
}
