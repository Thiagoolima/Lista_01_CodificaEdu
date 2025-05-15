// /*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.*/

const insert = require('prompt-sync')({ sigint: true });

const numeros = []
let continuar = true
let media = 0
console.log("Digite os valores para calcular a média aritimética, a qualquer momento digite \"0\" para encerrar e exibir o resultado")
while (continuar) {
    const numero = parseFloat(insert("Digite um novo valor para calcular a média: "))
    if (numero === 0) {
        continuar = false
    } else {
        numeros.push(numero)
    }
}
media = numeros.reduce((acc, valor) => acc + valor) / numeros.length;
console.log(`Você digitou ${numeros.length + 1} numeros: ${numeros.join(',')}`)
console.log(`A média aritimética dos números é igual: ${media}`)
