// /*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.*/

const insert = require('prompt-sync')({ sigint: true });

const numero = Number(insert("Digite a quantidade de númeors que deseja exibir da sequência de Fibonacci: "));
const sequencia = [0, 1]
while (sequencia.length < numero) {
    console.log(sequencia[sequencia.length])
    const proximoValor = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(proximoValor)
}

console.log(sequencia)

