class bubble{
  constructor()
  {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(10,50);
    this.speed = random(1,10);
    this.fillOpacity = random(0,255);
  }
  
 bubbleRise(){
  this.y = this.y - this.speed;
  if(this.y < -this.size){
      this.y = height + this.size;
  }
 }

  drawBubble(){
  push();
  fill(73,137,252,this.fillOpacity);
  ellipse(this.x,this.y,this.size);
  pop();
 }
}

