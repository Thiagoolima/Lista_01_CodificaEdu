// /*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.*/
const insert = require('prompt-sync')({ sigint: true });

const horarios = [
    { origem: "Brasília", destino: "Goiânia", horario: "08:00", valor: 8000 },
    { origem: "Brasília", destino: "Goiânia", horario: "08:40", valor: 8000 },
    { origem: "Brasília", destino: "Goiânia", horario: "09:20", valor: 8000 },
    { origem: "Brasília", destino: "Goiânia", horario: "10:00", valor: 8000 },
    { origem: "Brasília", destino: "Goiânia", horario: "10:40", valor: 8000 },
    { origem: "Brasília", destino: "Goiânia", horario: "11:20", valor: 8000 },
    { origem: "Brasília", destino: "Cuiabá", horario: "14:30", valor: 35000 },
    { origem: "Brasília", destino: "Cuiabá", horario: "15:00", valor: 35000 },
    { origem: "Brasília", destino: "Cuiabá", horario: "16:00", valor: 35000 },
    { origem: "Brasília", destino: "Cuiabá", horario: "16:30", valor: 35000 },
    { origem: "Brasília", destino: "São Paulo", horario: "18:00", valor: 29000 },
    { origem: "Brasília", destino: "São Paulo", horario: "18:30", valor: 29000 },
    { origem: "Brasília", destino: "São Paulo", horario: "19:00", valor: 29000 },
    { origem: "Brasília", destino: "Fortaleza", horario: "21:30", valor: 42000 },
    { origem: "Brasília", destino: "Fortaleza", horario: "23:20", valor: 42000 }
];


console.log("\n=== Menu da Empresa de Ônibus ===");
console.log("1. Consultar Horários");
console.log("2. Comprar Passagem");
console.log("3. Sair");

const opcao = insert("Selecione uma opção: ");

switch (opcao) {
    case "1":
        const destinos = [...new Set(horarios.map((h) => {
            return h["destino"]
        }))]

        console.log("\n=== Destinos disponíveis ===");
        for (let i = 0; i < destinos.length; i++) {
            console.log(`${i + 1}. ${destinos[i]}`);
        }

        const destino = insert("Selecione um destino: ");
        const horariosFiltrados = horarios.filter((horario) => {
            return horario.destino === destinos[destino - 1]
        })
        console.table(horariosFiltrados)

    case "2":

}
