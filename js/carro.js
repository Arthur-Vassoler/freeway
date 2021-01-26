let yCarros = [ 45, 96, 150, 210, 270, 318 ];
let xCarros = [ 600, 600, 600, 600, 600, 600 ];
let velocidadeCarros = [ 2, 2.5, 3.2, 5, 3.3, 2.3 ];
let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i = i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
    for (let i = 0; i <imagemCarros.length; i = i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < imagemCarros.length; i = i++){
        if(passouTodaATela(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < -50;
}