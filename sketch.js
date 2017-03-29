var x = 0; 
var speed = 3;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
   
    if(mouseIsPressed){
        background(255,164,7);
    }
    
    stroke(0,0,255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(2,26,239);
    }
    else{
        noFill();
    }
    
    ellipse(x,200,100,100);
    
    if(x>width || x<0){
        console.log("CIRLCE IS OFF THE SCREEN!!!")
        speed = speed * -1;
    }
    x = x + speed; 
    console.log(x);
}