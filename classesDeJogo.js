//  Desio de Lógica DIO. Escrevendo as classes de um Jogo

class Heroi {
    //construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // definindo o método 
    atacar() {
        let ataque = "";

        // Verificando o tipo de ataque. Utilizando switch case
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "atacou";
                break;
        }

        // mensagem de saída
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Instanciando um objeto da classe Heroi
let heroi = new Heroi("Aragorn", 30, "guerreiro");
heroi.atacar();
