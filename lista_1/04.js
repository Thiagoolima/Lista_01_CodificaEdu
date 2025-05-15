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
