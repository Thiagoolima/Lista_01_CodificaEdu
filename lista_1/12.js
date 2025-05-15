// /*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.*/

const insert = require('prompt-sync')({ sigint: true });

const numero = Number(insert("Digite um número para ver a tabuada: "));

console.log(`\nTabuada de ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
console.log("\n *********************************** \n")

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} + ${i} = ${numero + i}`);
}
