/*Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const insert = require('prompt-sync')({ sigint: true });

console.log("Implemente um programa que recebe uma nota de 0 a 10 e classifica como \"Aprovado\", \"Recuperação\", ou \"Reprovado\" utilizando if-else if. \n")
const nota = parseFloat((insert("Favor digite uma nota: ")).replace(',', '.'));

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("O valor da entrada deve ser um número entre 0 e 10");
} else if (nota < 5) {
    console.log("O aluno foi reprovado")
} else if (nota > 5 && nota < 7) {
    console.log("O aluno está de recuperação")
} else {
    console.log("O aluno foi aprovado")
}
