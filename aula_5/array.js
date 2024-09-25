let series = ['House','Braking bad', 'Game of Thrones','Fringe', 'Chaves', 'The Walkind Dad', 'Chapolin','The office', 'Ted Lasso']

console.log(series[4]);
console.log(series[0]);
console.log(series[2]);

console.log('array:', series.length);

let deletarIndice = series.pop();
console.log(series);
console.log(deletarIndice);

let adicionarItem = series.push('Dexter')
console.log(series);


//filtra elementos no array
let numeros = [1,2,3,4,5,6];

let numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
})
console.log ('filter', numerosPares)

//map retorna novo array multiplicado
let multiplos = numeros.map(function(numeros){
    return numeros *2;
});

console.log(multiplos);

//diferente do map, ele tranforme o array
let foreachArray = numeros.forEach(function(numeros){
    console.log(numeros*3);
});