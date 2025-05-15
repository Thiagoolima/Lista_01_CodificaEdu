// /*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.*/

const insert = require('prompt-sync')({ sigint: true });

const numero = Number(insert("Digite um valor para contagem regressiva: "));

for (i = numero; i >= 0; i--) {
    console.log(i);
}