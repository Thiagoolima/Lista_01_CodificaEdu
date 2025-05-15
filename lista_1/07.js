// /*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.*/

const insert = require('prompt-sync')({ sigint: true });

const qtdMacas = insert("Digite a quantidade de macas compradas: ");

if (qtdMacas < 12) {
    const valorMacaUnd = 30;
    console.log(`Você comprou ${qtdMacas} Macas, no valor de R$ ${(valorMacaUnd / 100).toFixed(2)} e deu o total de: R$ ${((valorMacaUnd * qtdMacas) / 100).toFixed(2)}`)
} else {
    const valorMacaUnd = 25;
    console.log(`Você comprou ${qtdMacas} Macas, no valor de R$ ${(valorMacaUnd / 100).toFixed(2)} e deu o total de: R$ ${((valorMacaUnd * qtdMacas) / 100).toFixed(2)}`)
}