let x = 100
let y = 100
let finalx = 500
let finaly = 400
let velx = 3
let vely = 5
let size = 10

function setup() {
  createCanvas(finalx, finaly);
}

function draw() {
  background(220);
  
  x = x + velx
  y = y + vely
  
  if (x >= finalx){
    velx = -velx
  }
  if (x <= 0){
    velx = -velx
  }
  if (y >= finaly){
    vely = -vely
  }
  if (y <= 0){
    vely = -vely
  }
  
  if (x > finalx/2 && y < finaly/2){
    fill(255,0,0);
    rect(finalx/2,0,finalx/2,finaly/2);
  }
  if (x > finalx/2 && y > finaly/2){
    fill(0,0,255);
    rect(finalx/2,finaly/2,finalx/2,finaly/2);

  }
  if (x < finalx/2 && y < finaly/2){
    fill(255,255,0);
    rect(0,0,finalx/2,finaly/2);

  }
  if (x < finalx/2 && y > finaly/2){
    fill(0,255,0);
    rect(0,finaly/2,finalx/2,finaly/2);

  }
  ellipse(x,y,size)
}
 
