
//atribuindo variaveis para altura e largura e vidas e tempo
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;

var nivel =  window.location.search // capturando so o que esta a direita do ? no link
nivel = nivel.replace('?' , '') // substituindo o ? por vazio

//condições para verificar o nivel de dificuldade
if (nivel === 'normal') {
    criaMosquitoTempo = 1500;
} else if (nivel === 'medio') {
    criaMosquitoTempo = 1000;
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 700;
}

// função para ajustar o tamnho da tela

function ajustaTmanhoPalcoJogo(){ 
altura = innerHeight
largura = innerWidth

console.log(largura , altura)
}

ajustaTmanhoPalcoJogo()

var cronometro = setInterval(function(){ // setInterval para cronometro
    
tempo -= 1 // drecrementando -1

    if (tempo < 0) {
        clearInterval(cronometro) //limpando a variavel cronometro no fim do jogo
        clearInterval(clearMosca) // limpando a varival mosca no fim
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo; // Doom para mostrar o cronometro no span
    }
    
},1000)

function posicaoRandomica(){ // função para criar posições randomicas

    //condicional para remover o mosquito quando for clicado
    if(document.getElementById('mosquito')){ // recuperando id do mosquito
    document.getElementById('mosquito').remove(); // removendo
    
    //condicional para verificar se morrer mais de tres vezes é game over
    if (vidas > 3 ) {
       window.location.href = 'fim_jogo.html'
    }else{
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png' // recuperando coração vazio para sobrepor os cheios
    }
    vidas++ // adicionando mais um 
    }

var posicaoX = Math.floor(Math.random() * largura) - 90; // arredondando para baixo e subtraindo 90 para nõa haver estouro de tela
var posicaoY = Math.floor(Math.random() * altura) - 90;

// condicão para imagem não sumir da tela com possiveis valores negativos
if (posicaoX < 0) {
    posicaoX = 0
}else{
    posicaoX = posicaoX
}

if (posicaoY < 0) {
    posicaoY = 0
}else{
    posicaoY = posicaoY
}

console.log(posicaoX, posicaoY)

//criando elemnto html

var mosquito = document.createElement('img') // acessando elemento html img
mosquito.src = 'imagens/mosca.png' // selecionando imagem
mosquito.className = tamanho()+  ' ' +lado() // concatenando funções de tamanho e lado randomicas
mosquito.style.left = posicaoX + 'px' // atribuindo as variveis randomicas da tela
mosquito.style.top = posicaoY + 'px' // atribuindo as variveis randomicas da tela
mosquito.style.position = 'absolute' // definido posição absoluta
mosquito.id = 'mosquito'
mosquito.onclick = function() { // atribuindo onclick no mosquito
    this.remove(); // removendo ao seer clicado
    
}

document.body.appendChild(mosquito); // chamando o body e elemento filho 
console.log(lado())

}
// função para definir tamanhos randomicos da imagem
function tamanho(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
        return 'mosquito1';

        case 1:
            return 'mosquito2';
        
        case 2:
            return 'mosquito3';    
    }
  

}
//função para definir para que lado o mosquito olha
function lado(){

    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
        return 'ladoA';

        case 1:
            return 'ladoB';

           
    }
}