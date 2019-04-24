class Sun
{
    constructor()
    {
        // set the defalut value for the sun and its shadow
        this.x = mouseX;
        this.y=150;
        this.s=60;
        this.shadowY = 650; // the y position of shadow
      
    }

    // the size become bigger
    // the color of the sun changes
    large()
    {
        this.s=this.s + 1;
        fill(252,231,190,200);
        ellipse(this.x,this.y,this.s,this.s);    
    }
    
    // the size become bigger
    // the opacity of the shadow changes
    large2()
    {
        this.s=this.s + 1;
        fill(250,250,250,random(10,60));
        ellipse(this.x,this.shadowY,this.s,this.s);
        
    }
    
    // display the sun and its shadow
    display()
    {   
        // restrict the x position
        // if the x is less than 30, reset the value to 30
        this.x = mouseX;
        if(this.x < 30){
            this.x = 30
        }
        
        // if the x is more than 770, reset the value to 770
        else if(this.x > 770){
            this.x = 770
        }
        
        noStroke();
        fill(252,90,0);
        ellipse(this.x,this.y,this.s,this.s);
        fill(250,250,250,50);
        ellipse(this.x,this.shadowY,this.s,this.s);
    }
    
    // restart sun
    restart()
    {
        this.s = 60;
        fill(252,90,0);
        ellipse(this.x,this.y,this.s,this.s);
        fill(250,250,250,50);
        ellipse(mouseX,this.shadowY,this.s,this.s);
    }

}
