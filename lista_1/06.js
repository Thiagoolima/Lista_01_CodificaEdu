// /*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.*/
const insert = require('prompt-sync')({ sigint: true });

console.log("Digite os 3 valores do lado de um triângulo:");
const ladoA = parseInt(insert("Digite o valor do lado A: "));
const ladoB = parseInt(insert("Digite o valor do lado B: "));
const ladoC = parseInt(insert("Digite o valor do lado C: "));

const triangulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA;

if (!triangulo) {
    console.log("Não é um Triangulo")
} else {
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("É um triângulo Isosceles")
    } else if (ladoA === ladoB && ladoB === ladoC) {
        console.log("É um triângulo Equilátero")
    } else {
        console.log("É um triângulo Escaleno")
    }
}