let x = 600



function setup() {
  createCanvas(900, 600);
  rectMode(CENTER)
}

function draw() {
  
  if(mouseX>500){
     background(173, 234, 237)
     }else{
       background(12, 23, 0)
     }
  
  
  
  point(300,400)
  line(300,400,500,350)
  
  fill(74,27,87)
  ellipse(mouseX,mouseY,100,100)
  
if(keyIsPressed == true){ background(8, 8, 8);
} else {
background(183, 247, 247);
}
  
  fill(3, 97, 30)
  ellipse(100,500,900,300)
  
  fill(3, 97, 30)
  ellipse(700,500,900,300)
  
  fill(227, 219, 59)
 ellipse(mouseX,mouseY,100,100)
  
  noStroke()
  
  
  fill(92, 83, 61)
  triangle (500,100,350,500,700,500)
  
  fill(242, 242, 240)
  triangle(500,100,425,300,600,300)
  
  fill(24, 70, 143)
  ellipse(150,900,400,800)
}