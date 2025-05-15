// /*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.*/

const insert = require('prompt-sync')({ sigint: true });

const valor = Number(insert("Digite um número para calcular o fatorial: "));
let resultado = 1

for (let i = 1; i <= valor; i++) {
    resultado *= i;
}

console.log(`Fatorial de ${valor} é ${resultado}`);

