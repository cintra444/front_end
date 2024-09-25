//1. AND (&&); 

const a = 10;
const b = 20;

if(a > 5 && b < 10){
    console.log('Vedadeira')
}
else{
    console.log('Falsa');
}

//2. OR (||)
const temperatura = 30;


if( temperatura < 15 || temperatura > 25){
    console.log('quente')
}
else{
    console.log('fria');
}

//NOT (!)

let lojaAberta = true;

if(!lojaAberta){
    console.log('Fechada');
}
else{
    console.log('Aberta')
}