let segmento = 360;
let w = 800;
let h = 800;
let radio = 250;

function setup() {
  createCanvas(w, h);
  colorMode(HSB, 360, w, h)
  noStroke();
}

function draw() {
  background(0);
  let anguloDelta = 360 / segmento;
  beginShape(TRIANGLE_FAN);
  vertex(w/2, h/2);
  for (let angulo = 0; angulo <= 360; angulo += anguloDelta){
    let x = w/2 + cos(radians(angulo)) * radio;
    let y = h/2 + sin(radians(angulo)) * radio;
    vertex(x, y);
    fill(angulo, mouseX, mouseY)
  }
  endShape();
}

function keyPressed(){
  
  switch(key){
    case '1':
      segmento = 360;
      break;
    case '2':
      segmento  = 45;
      break;
    case '3':
      segmento = 24;
      break;
    case '4':
      segmento  = 12;
      break;   
    case '5':
      segmento = 6;
      break;
  }
}