const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Qual a segunda rua mais famora do Brasil? ",
        alternativas: [
            {
                texto: "A) Rua Oscar Freire - São Paulo, SP ",
                afirmacao: "1) Errou "
            },
            {
                texto: "B) Avenida Presidente Vargas - Rio de Janeiro, RJ",
                afirmacao: "1) Acertou"
            },
            {
                texto: "C) Avenida Atlântica - Balneário Camboriú, SC",
                afirmacao: "2) Errou"
            },
            {
                texto: "D) Avenida Getúlio Vargas - Belo Horizonte, MG",
                afirmacao: "2) Errou"
            }
        ]
    },
    {
        enunciado: "2. Qual o maior prédio do mundo?",
        alternativas: [
            {
                texto: "A) Burj Khalifa- Emirados Árabes",
                afirmacao: "2) Acertou"
            },
            {
                texto: "B) Merdeka 118-Malásia",
                afirmacao: "2) Errou"
            },
            {
                texto: "C) Shanghai Tower-China",
                afirmacao: "3) Errou"
            },
            {
                texto: "D)One World Trade Center-EUA",
                afirmacao: "2) Errou"
            }
        ]
    },
    {
        enunciado: "Quantos elementos há na Tabela Periódica?",
        alternativas: [
            {
                texto: "A)118",
                afirmacao: "3) Acertou"
            },
            {
                texto: "B)112",
                afirmacao: "3) Errou"
            },
            {
                texto: "C)120",
                afirmacao: "3) Errou"
            },
            {
                texto: ")98",
                afirmacao: "3) Errou"
            }
        ]
    },
    {
        enunciado: "Qual foi a moeda mais recente utiliada no Brasil?",
        alternativas: [
            {
                texto: "A) Real brasileiro",
                afirmacao: "4) Errou"
            },
            {
                texto: "B) Cruzeiro real",
                afirmacao: "4) Acertou"
            },
            {
                texto: "C) Cruzado Novo",
                afirmacao: "4) Errou"
            },
            {
                texto: "D) Cruzeiro Novo",
                afirmacao: "4) Errou"
            }
        ]
    },
    {
        enunciado: "Quantas bombas atômicas eistem atualmente no mundo?",
        alternativas: [
            {
                texto: "12.586",
                afirmacao: "5) Acertou"
            },
            {
                texto: "12.599",
                afirmacao: "5) Errou"
            },
            {
                texto: "C) 12.000",
                afirmacao: "2) Errou"
            },
            {
                texto: "D) 12.575",
                afirmacao: "2) Errou"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Gabarito";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
