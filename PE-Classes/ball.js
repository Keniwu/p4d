class Ball{
  constructor()
  {
    // create a ball with a default x,y,size, and speed
    this.x = 25;
    this.y = 120;
    this.size = 50;
    this.speed = 5;
  }
  
  bounce(){
  if( this.x >= width-this.size/2 || this.x < this.size/2){
    this.speed = - this.speed;
  }
 }

  move(){
  this.x= this.x + this.speed;
 }

  display(){
  push();
  ellipse(this.x, this.y, this.size);
  pop();
 }
}


