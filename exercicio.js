// Escreva uma função em JavaScript que recebe um array de números inteiros e retorna a soma dos números pares do array 

const read = require('readline-sync');
let numeros = [];
let par = 0;


// só mudar o limite do i para aumentar ou diminuir o array!
for(let i = 0; i < 2; i++){
    numeros[i] = parseInt(read.question("Digite o " + (i+1) + " numero: "));
    if(numeros[i] % 2 === 0){
        console.log("Par!")
        par += numeros[i];
    } else {
        console.log("Número inválido!");
        numeros[i] = 0; 
    };
};

if (par != 0){
    for(let i = 0; i < 2; i++){
        console.log("O " + (i+1) + " par é: " + numeros[i])
    };
        console.log("A soma dos pares é: " + par);
} else {
        console.log("Não há números pares para somar.");
}


