// /*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso(baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.*/

const insert = require('prompt-sync')({ sigint: true });

const peso = parseInt(insert("Digite seu peso em kg (sem pontos e/ou virgula): "));
const altura = parseFloat(insert("Diggite sua altura em cm: "));
const imc = (peso / (altura / 100) ** 2).toFixed(2)

if (imc > 0 && imc < 18.5) {
    console.log(`Seu imc é: ${imc}, e está na categoria: Baixo Peso`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu imc é: ${imc}, e está na categoria: Peso Normal`)
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu imc é: ${imc}, e está na categoria: Sobrepeso`)
} else {
    console.log(`Seu imc é: ${imc}, e está na categoria: Obesidade`)
}



