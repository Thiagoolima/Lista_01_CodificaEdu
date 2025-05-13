/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido,
utilizando uma estrutura de controle if-else.*/

const insert = require('prompt-sync')({ sigint: true });

console.log("2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else. \n")
const idade = parseInt(insert("Favor digite uma idade: "));

if (isNaN(idade)) {
    console.log("O valor da entrada deve ser um número inteiro");
} else if (idade >= 0 && idade <= 12) {
    console.log("A pessoa é uma criança")
} else if (idade > 12 && idade < 18) {
    console.log("A pessoa é um adolescente")
} else if (idade >= 18 && idade < 60) {
    console.log("A pessoa é um adulto")
} else {
    console.log("A pessoa é um idoso")
}