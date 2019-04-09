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
  createCanvas(600,433);
}

function draw() {
  background(255,255,255);
  fill(200,200,200);
  noStroke();
  
  // back circle
  fill(232,192,179,40);
  ellipse(298,236,460);
  
  // hair
  fill(58,46,49);
  beginShape();
  curveVertex(170,523);
  curveVertex(145,454);
  curveVertex(159,348);
  curveVertex(164,238);
  curveVertex(169,159);
  curveVertex(208,80);
  curveVertex(296.5,39.5);
  curveVertex(331.5,57.5);
  curveVertex(332.5,58.5);
  curveVertex(344.5,54.5);
  curveVertex(365,62);
  curveVertex(410,110);
  curveVertex(431,187);
  curveVertex(436,266);
  curveVertex(458,374);
  curveVertex(475,466);
  curveVertex(464,502);
  curveVertex(432,516);
  curveVertex(307,516);
  curveVertex(170,523);
  curveVertex(145,454);
  curveVertex(159,348);
  endShape();
  
  // body
  fill(226,46,67);
  arc(300,433.25,275,146.5,-3.14,0,OPEN)
  
  // neck
  fill(244,205,190,250);
  beginShape();
  curveVertex(256.5,375.5);
  curveVertex(266.5,354.5);
  curveVertex(266.5,325.5);
  curveVertex(300.5,323.5);
  curveVertex(333.5,325.5);
  curveVertex(333.5,354.5);
  curveVertex(343.5,375.5);
  curveVertex(299.5,388.5);
  curveVertex(256.5,375.5);
  curveVertex(266.5,354.5);
  curveVertex(266.5,325.5);
  endShape();
  
  // face
  fill(244,211,193);
  arc(300.5,194,173,173,-3.14,0,OPEN);
  rect(213.831,192.5,173,57.05);
  arc(300.5,248,173,173,0,3.14,OPEN);
  
  // mouth
  fill(251,88,104);
  arc(300,279,58,58,0,3.14,OPEN);
  
  // eye right
  // white eye
  fill(255,255,255);
  beginShape();
  curveVertex(325.46,228.842);
  curveVertex(332.975,210.994);
  curveVertex(354.581,202.54);
  curveVertex(375.247,211.933);
  curveVertex(376,224.327);
  curveVertex(355.52,233.539);
  curveVertex(325.46,228.842);
  curveVertex(332.975,210.994);
  curveVertex(354.581,202.54);
  endShape();
  // brown eye1
  fill(106,88,75);
  ellipse(349.789,219.518,31.035);
  // brown eye2
  fill(146,122,109);
  ellipse(349.789,218,26);
  // black eye
  fill(0,0,0)
  ellipse(349.109,219.132,17.834);
  // highlight
  fill(255,255,255);
  ellipse(342.903,214.26,5.945);
  // eyebrow
  fill(58,46,49);
  beginShape();
  curveVertex(325.5,189.5);
  curveVertex(337.5,177.5);
  curveVertex(354.5,173.5);
  curveVertex(378.5,184.5);
  curveVertex(379.5,186.5);
  curveVertex(377.5,189.5);
  curveVertex(374.5,187.5);
  curveVertex(356.5,182.5);
  curveVertex(334.5,186.5);
  curveVertex(326.5,190.5);
  curveVertex(325.5,189.5);
  curveVertex(337.5,177.5);
  curveVertex(354.5,173.5);
  curveVertex(378.5,184.5);
  endShape();
  
  
  // eye left
  // white eye
  fill(255,255,255);
  beginShape();
  curveVertex(274.54,228.842);
  curveVertex(267.02,210.994);
  curveVertex(245.419,202.54);
  curveVertex(224.753,211.933);
  curveVertex(223,224.327);
  curveVertex(244.48,233.539);
  curveVertex(274.54,228.842);
  curveVertex(267.02,210.994);
  curveVertex(245.419,202.54);
  endShape();
  // brown eye1
  fill(106,88,75);
  ellipse(250.211,219.518,31.035);
  // brown eye2
  fill(146,122,109);
  ellipse(250.211,218,26);
  // black eye
  fill(0,0,0)
  ellipse(250.891,219.132,17.834);
  // highlight
  fill(255,255,255);
  ellipse(244.097,214.26,5.945);
  // eyebrow
  fill(58,46,49); 
  beginShape();
  curveVertex(274.5,189.5);
  curveVertex(262.5,177.5);
  curveVertex(245.5,173.5);
  curveVertex(221.5,184.5);
  curveVertex(220.5,186.5);
  curveVertex(222.5,189.5);
  curveVertex(225.5,187.5);
  curveVertex(243.5,182.5);
  curveVertex(265,186.5);
  curveVertex(273,190.5);
  curveVertex(274.5,189.5);
  curveVertex(262.5,177.5);
  curveVertex(245.5,173.5);
  curveVertex(221.5,184.5);
  endShape();
  
  // star 
  fill(255,255,255,30) //white
  beginShape();
  vertex(351.467,409.953);
  vertex(361.932,409.953);
  vertex(365.166,400);
  vertex(368.4,409.953);
  vertex(378.66,409.953);
  vertex(370.399,416.105);
  vertex(373.633,426.058);
  vertex(365.166,419.906);
  vertex(356.699,426.058);
  vertex(359.933,416.105);
  vertex(351.467,409.953);
  vertex(361.932,409.953);
  endShape();
  
  
  
}