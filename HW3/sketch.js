/**
* Yourfirstand Lastname
* IGME-609: Assignment Name, m/d/18
* Summarization of sketch activity
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
   background(220);
  fill(255,0,0); // red
  strokeWeight(5);
  fill(255,0,0);
  stroke(0,0,0);
  
  quad(270,200,390,200,440,300,190,300); // car top
  quad(160,300,500,300,500,400,100,400);// car body
  
  
  // car bottom
  fill(170,170,170);
  rect(98,403,402,40);
 
 
  fill(252,220,86);
  quad(136,340,180,340,180,400,100,400); // car light
  fill(222,248,252);
  rect(288,225,80,50); // car window
 
  // car door
  line(265,300,265,400); // left
  line(391,300,391,400); // right
  strokeWeight(5);
  
  fill(255,255,255);
  rect(340,330,30,10); 
  
  // ground
  line(0,500,640,500);
   
	// tire
  stroke(0,0,0);
  fill(255,206,0);
  ellipse(420,460,80); // tire right
  
  ellipse(420,460,50); // tire right inner
	point(420,460); // tire dot
  
  ellipse(220,460,80); // tire left
  ellipse(220,460,50); // tire left inner
  point(220,460); // tire dot
  
  arc(330,200,30,30,3.14,0,OPEN)
  
   
  fill(170,170,200); // red
  rect(500,350,25,40); // car back
  line(500,370,525,370) // car back seperate
  
}