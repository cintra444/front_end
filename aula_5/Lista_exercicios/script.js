function verificar() {
    const nota = parseFloat(document.getElementById('nota').value);

    if (nota > 7.0) {
        alert('Voce foi aprovado');
        
    }
    else {
        alert('Voce foi reprovado');
        
    }

}
function ParImpar() {
    const numero = parseFloat(document.getElementById('numero').value);

    if (numero % 2 ===0) {
        alert('O numero é par');
        
    }
    else {
        alert('O numero é impar');
        
    }

}
function maiorIdade() {
    const idade = parseFloat(document.getElementById('idade').value);

    if (idade >= 18) {
        alert('Acesso Liberado');
        
    }
    else {
        alert('Acesso Negado, você é menor de 18 anos');
        
    }

}