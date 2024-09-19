let x = 600
let backgroundBool = false
let ellipseBool = false




function setup() {
	createCanvas(900, 600);
	rectMode(CENTER)
}

function draw() {

	if (backgroundBool == true){
		
		dayTime()
	}
	

	

	if (ellipseBool == true){
		nightTime()

	}

	

}

function nightTime(){
	background(8, 8, 8);
	point(300,400)
	line(300,400,500,350)

	fill(8,8,8)
	ellipse(100,100,100,100)


	fill(31, 64, 33)
	ellipse(100,500,900,300)

	fill(31, 64, 33)
	ellipse(700,500,900,300)

	fill(227, 219, 59)
	ellipse(100,100,100,100)



	noStroke()


	fill(92, 83, 61)
	triangle (500,100,350,500,700,500)

	fill(242, 242, 240)
	triangle(500,100,425,300,600,300)

	fill(24, 70, 143)
	ellipse(150,900,400,800)
}

function dayTime(){
	background(183, 247, 247)
	point(300,400)
	line(300,400,500,350)

	fill(74,27,87)
	ellipse(100,100,100,100)


	fill(158, 219, 162)
	ellipse(100,500,900,300)

	fill(158, 219, 162
	ellipse(700,500,900,300)

	fill(227, 219, 59)
	ellipse(100,100,100,100)



	noStroke()


	fill(92, 83, 61)
	triangle (500,100,350,500,700,500)

	fill(242, 242, 240)
	triangle(500,100,425,300,600,300)

	fill(24, 70, 143)
	ellipse(150,900,400,800)

}


function keyPressed(){
	if (key === 'a'){
		backgroundBool = true
		ellipseBool = false
		//background(183, 247, 247) = false
	}

	if(key ==='l'){

		ellipseBool = true
		backgroundBool = false
	}

}














