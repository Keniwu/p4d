class ripple
{
   constructor()
  {
    // set the default value for the circle of ripple
    // random x, y,size and opacity
    this.x = random(0,width-30);
    this.y = random(height/2+100,height-30);
    this.size = random(10,30);
    this.fillOpacity = random(0,99);
  }
  
   expand()
  {
    // expand the size of each circle of ripple
    // the speed is size/12
    this.size = this.size + this.size/12;
  
    // decrease the opacity of each circle
    // the speed is size/20
    this.fillOpacity = this.fillOpacity - this.size/20
  }

   display()
  {
    push();
    // draw 5 ellipse
    // opacity decreases, step is 20
    // the step of the width is one size
    // the height is 1/4 width
    for (var i = 0; i < 5; i++)
    {
      fill(152,217,249,this.fillOpacity-20*i);
      ellipse(this.x,this.y,this.size*(i+1),this.size*(i+1)/4);
    }
     
    // use the opacity value to control the time of display
    // if the opacity is <-15000
    // set the opacity value to 0
    if (this.fillOpacity < -15000)
    {
      this.fillOpacity = 0
    }

    pop();
    }
}

