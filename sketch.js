function setup() {
  createCanvas(800, 800);
  
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(209, 153, 0);
  noFill()
  stroke(255)
  
  translate( width / 2, height /2, )
  
  
  for (var i = 0; i < 200; i++) {
    push ()
    rotate(sin(frameCount + i * 4) * 100)
        rect( 0, 0,  600 - i * 3 , 600 - i * 3, 200 - i)
    pop()
      }

}