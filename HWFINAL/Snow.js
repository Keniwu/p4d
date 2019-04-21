class Snow
{
    constructor()
    {
        // set the default value for the snow
        this.x=random(30, 770);
        this.y= random(-800,-30);
        this.s=random(10,30); // size
        this.a=random(100,200); // transparent
        this.speed = 1; // speed
    }

    // snow fall of the canvas
    rise()
    {
        this.y = this.speed + this.y;
        // if the snow fall out of the canvas
        // make it fall again in random X
        // the speed of the snow increase
        if (this.y >= 800 + this.s/2)
        {
          this.y = -30;
          this.x = random(30,770);
          this.speed = this.speed + 0.5;
        }
    }
    
    // display the snow
    display()
    {
        noStroke();
        fill(250,250,250,this.a);
        ellipse(this.x,this.y,this.s,this.s);
     
    }
    // restart the snow
    restart()
    {   
        this.x=random(30, 770);
        this.y= random(-800,-30);
        this.s=random(10,30); // size
        this.a=random(100,200); // transparent
        this.speed = 1;        
    }

}
