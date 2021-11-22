class Circulo {
  constructor(x, y, tam){
    this.x = x;
    this.y = y;
    this.tam = tam;
  }
  show(){
    fill('red');
    ellipse(this.x, this.y, this.tam,this.tam);
  }
  Moviendo(estado){
    this.estado = estado;
    return false;
  }
}

let Bola = [];

function setup() {
  createCanvas(400, 400);
  for (let index = 0; index < 5; index++) {
    Bola.push(new Circulo(index*70+50, 200,40));
    
  }

}

function draw() {
  background('white');
  noStroke();
  for (let index = 0; index < Bola.length; index++) {
    Bola[index].show();
    if(Bola[index].estado === true){
      Bola[index].y += 5;
    }
    if(Bola[index].tam < 60 && Bola[index].y > 430){
      Bola[index].y = 200;
      Bola[index].estado = false;
      Bola[index].tam = 40;
    }
    
  }
  mousePressed();
}

function mousePressed(){
  for (let index = 0; index < Bola.length; index++) {
    if(mouseIsPressed){
    if(dist(mouseX, mouseY, Bola[index].x, Bola[index].y)<20){
      Bola[index].estado = true;
      Bola[index].tam += 2;
    }
  } 
  }
}
function aumentarTamaño(){
  for (let index = 0; index < Bola.length; index++) {
    if(dist(mouseX, mouseY, Bola[index].x, Bola[index].y)<20){
      Bola[index].tam += 5;
    }
  }
}