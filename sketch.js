var backgroundImage;
var database;

var form, player;
var playerCount;

var formulario;

var jogo;
var estadodejogo2;

var jogador;

var imagePista;

var carro1;
var carro2;

var imagCarro1;

var imagCarro2;

var matrizdoCarro;

function preload(){

  backgroundImage = loadImage("./assets/planodefundo.png");
  imagePista = loadImage("./assets/PISTA.png");
  imagCarro1 = loadImage("./assets/car1.png");
  imagCarro2 = loadImage("./assets/car2.png");


}

function setup(){

  createCanvas(windowWidth, windowHeight);
  // criando banco de dados
  database = firebase.database();
  jogo = new Jogo();
  jogo.ativarEstadodejogo();
  jogo.start();
}

function draw(){
  background(backgroundImage);
  // atualizando estado de jogo
  if(playerCount == 2){

    jogo.atualizarEstadodejogode(1)

  }
  if(estadodejogo2 == 1){

    jogo.play(); 
  }

}
// função de ajustar a tela 
function windowResized(){

  resizeCanvas(windowWidth, windowHeight)

}
