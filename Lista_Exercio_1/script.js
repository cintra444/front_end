let resposta = window.document.getElementById('button1');
let nClick = window.document.getElementById('dop');
let ncurtidas = 0;

//exercicio 4
let botao = window.document.getElementById('botaoTrocar');
botao.addEventListener('click', function(){
    botao.setHTMLUnsafe('Seja bem vindo');
})

//exercico 1
function msg() {
    resposta.innerHTML += '<p>Olá Mundo!</p>'
}

//exercicio 2
function nCurtir() {

    ncurtidas ++;
    nClick.innerHTML = ncurtidas;

}

function nDescurtir(){
    ncurtidas --;
    nClick.innerHTML = ncurtidas;
}
//exercicio 3
document.getElementById('boasVindas').addEventListener('click', function() {
    alert('Seja bem vindo!')  
});


