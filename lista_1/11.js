// /*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.*/

const insert = require('prompt-sync')({ sigint: true });

console.log("Digite uma sequencia de 5 números")
const numeros = [];

for (i = 0; i < 5; i++) {
    numeros[i] = Number(insert(`Digite o numero ${i + 1}: `));
}
const soma = numeros.reduce((acc, valor) => acc + valor);

console.log(`A soma de todos os valores é: ${soma}`)