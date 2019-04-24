var n = 0; // number of ripple
var myRipple = [];
var myMountain;
var SunObject;
var SnowObject=[];
var number = 0; // counte the number of snow

function setup() 
{
    createCanvas(800,800);
    
    // create 10000 ripple
    for(var i = 0; i < 100000; i++)
  {
      myRipple[i]=new ripple();
  }
    
    // create mountain and sun
    myMountain = new mountain(); 
    SunObject=new Sun();
    
    // create 8 snow
    for(var i = 0; i < 8; i++)
  {
      SnowObject[i] = new Snow();
  }
}


function draw() 
{
    // set the background
    background(40,72,91);
    noStroke();
  

    // 2 ripple as a group
    // if the ripple is transparent
    // display the next group
    if (myRipple[n].fillOpacity == 0) 
  {
      n = n + 2;
  } 
    else 
  {
      myRipple[n].expand();
      myRipple[n].display();
      myRipple[n+1].expand();
      myRipple[n+1].display();
  }  
    
    // display the sky with gradient 
    myMountain.setGradient(0, 0, 800, 411, myMountain.c1, myMountain.c2, 1);
    // display the mountain
    myMountain.display();
    
    // display the sun and its shadow
  if ( mouseX >= 800) 
  {
      SunObject.x=800;
  }
    SunObject.display();
 
    // if the sun touches the snow
    // the size of sun and its shadow bigger
    // the color of the sun changes
    for(var i = 0; i < 8; i++)
  {
      if (dist(SunObject.x,SunObject.y, SnowObject[i].x, SnowObject[i].y)<= SunObject.s/2+SnowObject[i].s/2) 
      {
          SunObject.large();
      } 
    // if its shadow touches the snow
    // the size of sun and its shadow bigger
    // the opacity of the shadow changes
      if(dist(SunObject.x,SunObject.shadowY,SnowObject[i].x,SnowObject[i].y)<=SunObject.s/2+SnowObject[i].s/2) 
      {
          SunObject.large2();
      }
  }
   
    // display the snow
    // the array has 8 snow
    for (i = 0; i < 8; i++)
    {
         SnowObject[i].rise();
         SnowObject[i].display();    
    }
    
    // diaplay the text, size 22  
    // when the snow fall out of the canvas
    // number + 1
    fill(255,255,255);
    textSize (22);
    text("Score  " + number,645, 50);
    for(var i = 0; i < 8; i++)
    {
         if (SnowObject[i].y  >= height + SnowObject[i].s/2 - SnowObject[i].speed &&
            SunObject.s <= 400)
         {
             number = number + 1;
         }
    }
  
    // if the size of Sun is over 400
    // show the lose page
    if (SunObject.s >= 400)
    {
         // display the lose screen
         background(62,58,64);
         // show the score 
         number = number + 0;
         textSize(40)
         text("Score "+ number,300,330);
         // show you lose
         textSize(60);
         text("YOU  LOSE",215,250);
        
         // display the restart button
         fill(239,160,127);
         rect(275, 500, 200, 50, 20);
         fill(250,250,250,200);
         textSize(30);
         text("restart",329,535);
         // display the restart key information
         fill(239,160,127,150);
         textSize(20);
         text("press 'r' to restart at any time",233,600);
        
        // when click the restart button, restart all things
        if(mouseX>275 && mouseX<475 && mouseY>500 && mouseY<550 && mouseIsPressed && mouseButton==LEFT )  
    { 
         myMountain.display();//restart mountain
         SunObject.restart();//restart sun
         for(var i = 0; i < 8; i++)
         {
            SnowObject[i].restart();
         }//restart snow
         number = 0;//restart snow number
    }
    }
    
    // when press r, restart all things
    if(keyIsPressed && key == 'r')  
    { 
         SunObject.restart();//restart sun
         for(var i = 0; i < 8; i++)
         {
            SnowObject[i].restart();
         }//restart snow
         number = 0;//restart snow number
    }
}
        


    
    
