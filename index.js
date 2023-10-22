//#Desafio Classificador de nível de Herói

// Declarando as variaveis nomes e valores do personagem
let heroi = {
    nome: "Capitão",
    xp: 1000
};

let nomeHeroi = heroi.nome;
let xpHeroi = heroi.xp;
let nivel;

// Utilizando operadores e laço de repertição na estrutura switch case
switch (true) {
    case xpHeroi <= 1000:
        nivel = "ferro";
        break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        nivel = "bronze";
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivel = "prata";
        break;
    case xpHeroi >= 6001 && xpHeroi <= 7000:
        nivel = "ouro";
        break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        nivel = "platina";
        break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        nivel = "ascendente";
        break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        nivel = "imortal";
        break;
    case xpHeroi === 10001:
        nivel = "radiante";
        break;
    default:
        nivel = "nível não determinado";
        break;
}

// Saída: mensagem de saída
console.log(`O herói de nome ${nomeHeroi} está no nível correspondente ao XP escolhido: ${nivel}`);
