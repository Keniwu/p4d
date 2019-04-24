class mountain
{
    constructor()
  {
     this.c1 = color(239,160,127);
     this.c2 = color(247,188,159);

  }
  
   display()
  {
    noStroke();
    // mountain right1
    fill(99,81,85);
    beginShape();
    vertex(663,180);
    vertex(713,152);
    vertex(724,145);
    vertex(738,140);
    vertex(756,131);
    vertex(767,131);
    vertex(810,138);
    vertex(838,211);
    vertex(663,180);
    vertex(713,152);
    endShape();
  
    // mountain left 1
    fill(93,76,77);
    beginShape();
    vertex(0,118.5);
    vertex(49.5,147.5);
    vertex(77.5,174.5);
    vertex(104.5,164.5);
    vertex(117.5,177.5);
    vertex(133.5,190.5);
    vertex(141.5,200.5);
    vertex(162.5,219.5);
    vertex(187.5,233.5);
    vertex(219.5,275.5);
    vertex(0,271.5);
    endShape();
  
    // mountain left 2 
    fill(172,120,108);
    beginShape();
    vertex(280,280);
    vertex(311.57,263.58);
    vertex(333.03,257.26);
    vertex(339.35,256);
    vertex(429,302.72);
    vertex(311.57,311.56);
    endShape();
  
    // mountain left 3
    fill(131,99,97);
    beginShape();
    vertex(39.36,318.87);
    vertex(140.73,240.58);
    vertex(171.62,224.98);
    vertex(185.33,224.98);
    vertex(196.29,219.5);
    vertex(231.93,241.43);
    vertex(271.67,260.62);
    vertex(322.39,298.99);
    vertex(399.14,336);
    endShape();
  
    // mountain right2
    fill(61,53,58);
    beginShape();
    vertex(20,459);
    vertex(85,421);
    vertex(142.5,405.5);
    vertex(253.5,320.5);
    vertex(367.76,272.99);
    vertex(416.5,241.5);
    vertex(430.5,227.5);
    vertex(456.5,213.5);
    vertex(518.5,152.5);
    vertex(546.5,147.5);
    vertex(580.5,125.5);
    vertex(592.5,123.5);
    vertex(610.5,124.5);
    vertex(655.5,113.5);
    vertex(671.5,120.5);
    vertex(694.5,140.5);
    vertex(714.5,150.5);
    vertex(757.5,160.5);
    vertex(810.5,183.5);
    vertex(804,478);
    endShape();
  
    // mountan left4
    fill(62,58,64);
    beginShape();
    vertex(-147,480);
    vertex(-10,168);
    vertex(24,174);
    vertex(57,190);
    vertex(76,204);
    vertex(103,218);
    vertex(118,231);
    vertex(220,267);
    vertex(308,319);
    vertex(563,449);
    vertex(368,472);
    vertex(-147,460);
    endShape();
  }
    
  // use stroke to create gradient
  setGradient(x, y, w, h, c1, c2, axis)
 {
   noFill();
   // Top to bottom gradient
   for (let i = y; i <= y + h; i++) 
  {
    var inter = map(i, y, y + h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }

 }
}

