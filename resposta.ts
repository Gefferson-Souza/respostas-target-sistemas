/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
*/

const indice:number = 13;
let soma:number =0;
let k:number = 0;

while (k < indice){
    k++;
    soma += k;
}
console.log(soma)
//91.

/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

const calculoFibonacci = (numero:number): void =>{
    const sequenciaDeFibo:number[] = [0,1];
    let mensagem:string = '';
    for(let i = 0; sequenciaDeFibo[i] < numero; i++){
        if(numero === sequenciaDeFibo[i]){
            mensagem = `O número ${numero} pertence a sequência de fibonacci.`;
            break;
        }
        const proximoNumero:number = sequenciaDeFibo[i] + sequenciaDeFibo[i+1] ;
        sequenciaDeFibo.push(proximoNumero);
    }
    if(!mensagem){
        mensagem = `O número ${numero}, não pertence a sequência de fibonacci.`;
    } 
    return console.log(mensagem);
}
calculoFibonacci(34) //O numero 34 pertence a sequência de fibonacci.
calculoFibonacci(100) //O numero 100, não pertence a sequência de fibonacci.



/*
3) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, _9__
Resposta =  9.

b) 2, 4, 8, 16, 32, 64, __128__
Resposta = 128.

c) 0, 1, 4, 9, 16, 25, 36, __49__
Resposta = 49.

d) 4, 16, 36, 64, __100__
Resposta = 100.

e) 1, 1, 2, 3, 5, 8, __13__
Resposta = 13.

f) 2, 10, 12, 16, 17, 18, 19, __200__
Resposta = 200.

*/

const perguntasRespostas:{'pergunta': number[]; resposta: number}[] = [
    {
        "pergunta":[1,3,4,5,7],
        resposta: 9
    },
    {
        "pergunta":[2, 4, 8, 16, 32, 64],
        resposta: 128
    },
    {
        "pergunta":[0, 1, 4, 9, 16, 25, 36],
        resposta: 49
    },
    {
        "pergunta":[4, 16, 36, 64],
        resposta: 100
    },
    {
        "pergunta":[1, 1, 2, 3, 5, 8],
        resposta: 13
    },
    {
        "pergunta":[2, 10, 12, 16, 17, 18, 19],
        resposta: 200
    }
]
const Perguntas:string[] = ["a","b","c","d","e","f"]

const atribuindoAsRespostas = Perguntas.map((e, i) => {
    return {[e]:perguntasERespostas[i].resposta}
})
console.log(AtribuindoAsRespostas)
    

/*
4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia.
O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca
em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia,
qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro
possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.
*/

// Resposta questão 4.
const distanciaEntreCidades:number = 100;
const velocidadeDoCarro:number = 110;
const velocidadeDoCaminhão:number = 80;

const RESPOSTA:undefined = distanciaCaminhãoRibeirãoPreto + Caminhão.length;

/*
Resposta = Após se cruzarem, o caminhão estará mais próximo da cidade de Ribeirão Preto,
pois o carro está indo na direção contrária, ou seja,  exatamente após o cruzamento
a distância entre Ribeirão preto e o carro seria:
Distância Do Caminhão Até Ribeirão Preto + Comprimento Do Caminhão.
*/




// Resposta questão 5.
const inverterString = (frase:string) :string => {
    const caracteresSeparados = frase.split('');
    const stringAoContrario:string[] = []
    caracteresSeparados.map(e => {
        return stringAoContrario.unshift(e);
    })
    return stringAoContrario.join('')
}

console.log(inverterString("Fiz sem usar o reverse, foi mais facil do que eu pensei."))
// .iesnep ue euq od licaf siam iof ,esrever o rasu mes ziF
