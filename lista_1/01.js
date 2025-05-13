/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

const insert = require('prompt-sync')({ sigint: true });

console.log("1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. \n")
const numero = parseInt(insert("Favor digite um número inteiro: "));

if (isNaN(numero)) {
    console.log("O valor da entrada deve ser um número inteiro");
} else if (numero % 2 === 0) {
    console.log(`Foi digitado ${numero} e esse é um valor par`);
} else {
    console.log(`Foi digitado ${numero} e esse é um valor impar`);
}