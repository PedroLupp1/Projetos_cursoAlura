//ator
let yAtor = 366;
let xAtor = 250;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  
  image(imagemDoAtor, xAtor, yAtor, 30, 30 );
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function verificaColisao(){
 for(let i = 0; i < imagemCarros.length; i++){
   
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25)
   if(colisao ){
     voltaAtorInicio();
     somColisao.play();
     if(pontosMaiorQueZero()){
     meusPontos -= 1;
     }
   }
 }
  
}

function voltaAtorInicio(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 0, 0))
  text(meusPontos, 150, 25);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    somPontos.play();
    voltaAtorInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}

