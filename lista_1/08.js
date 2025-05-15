// /*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.*/

const insert = require('prompt-sync')({ sigint: true });

console.log("Escreva dois valores diferentes para ordenar em ordem crescente: ");

const valores = [parseFloat(insert("Escreve o valor 1: ")), parseFloat(insert("Escreve o valor 2: "))];


console.log(valores.sort((a, b) => a - b))