let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 315];
let velocidadeCarros = [2.5, 4, 3, 5, 4.5, 3];
let comprimentoCarro = 35;
let alturaCarro = 35;



function mostraCarro(){
  for(let i = 0;  i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    
  }
 
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
  
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
    
  }
}

function passouTodaTela(xCarro){
   return xCarro < -30;
}

  