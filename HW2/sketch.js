/**
* Yourfirstand Lastname
* IGME-609: Assignment Name, m/d/18
* Summarization of sketch activity
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
var a=0; // ship1
var c=-500; //ship2
var b=-52; // sun position
var t=255; // background transparent
var t2=255; // sky transparent
var t3; // star transparent
var d=0 // bird x position
var e=0 // bird y position



function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke();
  background(0);
  
  // blue sky
  if(b>=250 && b<=401){
    t2=0
  }
  else if(b<=200 && b>=-52){
    t2=t2+4
  }
  fill(187,234,233,t2);
  rect(0,0,800,400);
  
  // orange sky
  fill(243,90,33,t);
  rect(0,0,800,400);
  if(b>=250 && b<=401){
    t=t-4;
  }
  else if(b<=200 && b>=-52){
   t=t+2;
}
  else{
    t=255
  }
  
   // bird
  bird(d,e);
  bird(d+100,e-30);
  bird(d-100,e-60);
  if (e <= 300){
    d--;
    e = e+0.5;
  }
  else {
    d=0;
    e=0;
  }
  
  //sunset
	if(b<=400){
  	b=b+0.5
}
  //sunset return
  else{
    b=-52
  }
  fill(255,186,118);
  ellipse(613,b,104);
  
  // lake
  fill(237,249,248);
  rect(0,400,800,400);
  
  mountain();
  
  // ship 1
  fill(0);
  ship(a,-10); //ship1
  if (a>-900){
    a=a-1;
  }
  else {
    a = -10
   }
  
  // ship 2
  ship(c,-100);
  if (c>-850){
    c=c-0.9;
  }
  else{ 
    c= 500
  }
  
 
  star(mouseX,mouseY);
  
  fill(255,208,11,t3);
	if(b>=300){
    t3=random(0,255)
  }
  else{
    t3=0
  }
  stars(mouseX+26,mouseY+29);
  stars(mouseX+80,mouseY+60);
  stars(mouseX+102,mouseY-58);
}



function star(x,y) {
  push();
  translate(x,y);
  fill(255,208,11);
  beginShape();
  vertex(-34.33,-0.17);
  vertex(-8.91,-9.58);
  vertex(0.5,-35);
  vertex(9.907,-9.578);
  vertex(35.33,-0.17);
  vertex(9.907,9.237);
  vertex(0.5,34.659);
  vertex(-8.907,9.037);
  vertex(-34.33,-0.17);
  vertex(-8.91,-9.58);
  endShape();
  pop();
}

function ship(x,y) {
  push();
  translate(x,y)
  //shadow
  fill(195,216,216);
  ellipse(667,704,266,18);
  fill(0);
  //top
  beginShape();
  vertex(671,654);
  vertex(716,654);
  vertex(720,674);
  vertex(667,673.5);
  endShape();
  // medium
  beginShape();
  vertex(530,665);
  vertex(794,665);
  vertex(730,674);
  vertex(600,674);
  endShape();
  //bottom
  fill(31,31,31);
  beginShape();
  vertex(531,665.5);
  vertex(601,671.5);
  vertex(730,674);
  vertex(794,665);
  vertex(773.5,682);
  vertex(743,696.5);
  vertex(600.5,696.5);
  vertex(557,682);
  endShape();
  pop();
}

function mountain() {
  // mountain5
  fill(15,52,80);
  beginShape();
  curveVertex(568.359,314.062);
  curveVertex(817.123,222.965);
  curveVertex(1160,339);
  curveVertex(953.768,378.881);
  curveVertex(573,342);
  curveVertex(568.359,314.062);
  curveVertex(817.123,222.965);
  endShape();
  // mountain4
  beginShape();
  curveVertex(-74,365);
  curveVertex(79,255);
  curveVertex(203,165);
  curveVertex(339,189);
  curveVertex(489,357);
  curveVertex(502,404);
  curveVertex(-74,365);
  curveVertex(79,255);
  endShape();
  //mountain3
  fill(33,80,129);
  beginShape();
  curveVertex(224,397);
  curveVertex(380,300);
  curveVertex(501,232);
  curveVertex(610,276);
  curveVertex(732,344);
  curveVertex(912,406);
  curveVertex(224,397);
  curveVertex(380,300);
  endShape();
  // mountain1
  fill(81,115,164);
  beginShape();
  curveVertex(580.222,494.139);
  curveVertex(663.931,445.585);
  curveVertex(774.275,397.032);
  curveVertex(845.047,423.599);
  curveVertex(970,510);
  curveVertex(794,507);
  curveVertex(661.951,504.312);
  curveVertex(580.222,494.139);
  curveVertex(663.931,445.585);
  endShape();
  // mountain2
  fill(63,100,165);
  beginShape();
  curveVertex(-123,428);
  curveVertex(32,356);
  curveVertex(125,327);
  curveVertex(270,380);
  curveVertex(380,433);
  curveVertex(-123,428);
  curveVertex(32,356);
  endShape();
 
}

function bird(x,y){
  push();
  translate(x,y);
  noFill();
  strokeWeight(4);
  stroke(0);
  arc(542.641,-38.484,34.25,34.25,-1.57,0.5,OPEN);
  arc(566.859,-14.266,34.25,34.25,-2.07,0,OPEN)
  pop();
}

function stars(x,y){
  push();
  translate(x,y);
  beginShape();
  vertex(-6.47,-0.17);
  vertex(-1.38,-2.05);
  vertex(0.5,-7.14);
  vertex(2.38,-2.05);
  vertex(7.47,-0.17);
  vertex(2.38,1.71);
  vertex(0.5,6.8);
  vertex(-1.38,1.7);
  vertex(-6.47,-0.17);
  vertex(-1.38,-2.05);
  endShape();
  pop();
}
