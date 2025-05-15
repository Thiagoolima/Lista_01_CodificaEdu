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


// /*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.*/
const insert = require('prompt-sync')({ sigint: true });

const horarios = [
    { origem: "Brasilia", destino: "Goiania", horario: "08:00", valor: 8000 },
    { origem: "Brasilia", destino: "Goiania", horario: "08:40", valor: 8000 },
    { origem: "Brasilia", destino: "Goiania", horario: "09:20", valor: 8000 },
    { origem: "Brasilia", destino: "Goiania", horario: "10:00", valor: 8000 },
    { origem: "Brasilia", destino: "Goiania", horario: "10:40", valor: 8000 },
    { origem: "Brasilia", destino: "Goiania", horario: "11:20", valor: 8000 },
    { origem: "Brasilia", destino: "Cuiaba", horario: "14:30", valor: 35000 },
    { origem: "Brasilia", destino: "Cuiaba", horario: "15:00", valor: 35000 },
    { origem: "Brasilia", destino: "Cuiaba", horario: "16:00", valor: 35000 },
    { origem: "Brasilia", destino: "Cuiaba", horario: "16:30", valor: 35000 },
    { origem: "Brasilia", destino: "Sao Paulo", horario: "18:00", valor: 29000 },
    { origem: "Brasilia", destino: "Sao Paulo", horario: "18:30", valor: 29000 },
    { origem: "Brasilia", destino: "Sao Paulo", horario: "19:00", valor: 29000 },
    { origem: "Brasilia", destino: "Fortaleza", horario: "21:30", valor: 42000 },
    { origem: "Brasilia", destino: "Fortaleza", horario: "23:20", valor: 42000 }
];

const listarDestinos = (hs) => {
    const destinos = [...new Set(hs.map((h) => {
        return h["destino"]
    }))]

    console.log("\n=== Destinos disponíveis ===");
    for (let i = 0; i < destinos.length; i++) {
        console.log(`${i + 1}. ${destinos[i]}`);
    }
    return destinos;
}

console.log("\n=== Menu da Empresa de Ônibus ===");
console.log("1. Consultar Horários");
console.log("2. Comprar Passagem");
console.log("3. Sair");

const opcao = insert("Selecione uma opção: ");

switch (opcao) {
    case "1":
        {
            const destinos = listarDestinos(horarios);
            const destino = insert("Selecione um destino: ");
            const horariosFiltrados = horarios.filter((horario) => {
                return horario.destino === destinos[destino - 1]
            })
            console.table(horariosFiltrados)
            break;
        };

    case "2":
        {
            console.log("Bem vindo ao sistema de vendas de passagens: ");
            const destinos = listarDestinos(horarios);
            const destinoEscolhido = insert("Selecione um destino: ");
            const destino = destinos[destinoEscolhido - 1];

            const horariosDisponiveis = horarios.filter(h => h.destino === destino);

            console.log("\n=== Horários disponíveis ===");
            for (let i = 0; i < horariosDisponiveis.length; i++) {
                console.log(`${i + 1}. ${horariosDisponiveis[i].horario}`);
            }

            const horarioEscolhido = insert("Selecione um horário: ");
            const qtdPassagens = insert("Digite quantas passagens deseja comprar: ");

            const horarioSelecionado = horariosDisponiveis[horarioEscolhido - 1];

            if (horarioSelecionado) {
                const valorTotal = horarioSelecionado.valor * Number(qtdPassagens);

                console.log("\n===== CUPOM DE COMPRA =====");
                console.log(`Origem:         ${horarioSelecionado.origem}`);
                console.log(`Destino:        ${horarioSelecionado.destino}`);
                console.log(`Horário:        ${horarioSelecionado.horario}`);
                console.log(`Qtd Passagens:  ${qtdPassagens}`);
                console.log(`Valor Unitário: R$ ${(horarioSelecionado.valor / 100).toFixed(2)}`);
                console.log(`Valor Total:    R$ ${(valorTotal / 100).toFixed(2)}`);
                console.log("============================\n");
            } else {
                console.log("Horário inválido selecionado.");
            }

            break;
        };

    case "3":
        {
            console.log("Agradecemos a visita!");
            break
        }
}



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


// /*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.*/

const insert = require('prompt-sync')({ sigint: true });

console.log("Escreva dois valores diferentes para ordenar em ordem crescente: ");

const valores = [parseFloat(insert("Escreve o valor 1: ")), parseFloat(insert("Escreve o valor 2: "))];


console.log(valores.sort((a, b) => a - b))



// /*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.*/

const insert = require('prompt-sync')({ sigint: true });

const numero = Number(insert("Digite um valor para contagem regressiva: "));

for (i = numero; i >= 0; i--) {
    console.log(i);
}



// /*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

const insert = require('prompt-sync')({ sigint: true });

const numero = Number(insert("Digite um número: "));

for (i = 0; i < 10; i++) {
    console.log(numero);
}



// /*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.*/

const insert = require('prompt-sync')({ sigint: true });

console.log("Digite uma sequencia de 5 números")
const numeros = [];

for (i = 0; i < 5; i++) {
    numeros[i] = Number(insert(`Digite o numero ${i + 1}: `));
}
const soma = numeros.reduce((acc, valor) => acc + valor);

console.log(`A soma de todos os valores é: ${soma}`);



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



// /*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.*/

const insert = require('prompt-sync')({ sigint: true });

const valor = Number(insert("Digite um número para calcular o fatorial: "));
let resultado = 1

for (let i = 1; i <= valor; i++) {
    resultado *= i;
}

console.log(`Fatorial de ${valor} é ${resultado}`);


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

