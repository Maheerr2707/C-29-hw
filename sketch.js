var box1,box2,box3
var box4,box5,box6,box7

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

box1 = new Box (330,335,30,40);
box2 = new Box (360,335,30,40);
box3 = new Box (390,335,30,40);
box4 = new Box (420,335,30,40);
box5 = new Box (450,335,30,40);
box6 = new Box (480,335,30,40);
box7 = new Box (510,335,30,40);


box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
