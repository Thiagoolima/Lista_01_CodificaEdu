// /*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

const insert = require('prompt-sync')({ sigint: true });

const numero = Number(insert("Digite um número: "));

for (i = 0; i < 10; i++) {
    console.log(numero);
}