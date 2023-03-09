
// Resposta questão 1.
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE){
    K++;
    SOMA += K;
}
console.log(SOMA)
//91.


// Resposta questão 2.
const fibonacci = (numero) => {
    const sequenciaDeFibo = [0,1]
    let mensagem = '';
    for(let i = 0; sequenciaDeFibo[i] <= numero; i++){
        if(numero === sequenciaDeFibo[i]){
            mensagem = `O número ${numero} pertence a sequência de fibonacci.`
            break;
        }
        const proximoNumero = sequenciaDeFibo[i] + sequenciaDeFibo[i+1] 
        sequenciaDeFibo.push(proximoNumero)
    }
    if(!mensagem){
        mensagem = `O número ${numero}, não pertence a sequência de fibonacci.`
    } 
    return console.log(mensagem);
}

fibonacci(34) //O numero 34 pertence a sequência de fibonacci.
fibonacci(100) //O numero 100, não pertence a sequência de fibonacci.



// Resposta questão 3.
const perguntasERespostas = [
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
const perguntas = ["a","b","c","d","e","f"]
const AtribuindoAsRespostas = perguntas.map((e, i) => {
    return {[e]:perguntasERespostas[i].resposta}
})
console.log(AtribuindoAsRespostas)




// Resposta questão 4.
const distanciaEntreCidades = 100
const velocidadeDoCarro = 110
const velocidadeDoCaminhão = 80

// const RESPOSTA = distanciaCamihãoRibeirãoPreto + Caminhão.length

/*
Resposta = Após se cruzarem, o caminhão estará mais próximo da cidade de Ribeirão Preto,
pois o carro está indo na direção contrária, ou seja,  exatamente após o cruzamento
a distância entre Ribeirão preto e o carro seria:
Distância Do Caminhão Até Ribeirão Preto + Comprimento Do Caminhão.
*/



// Resposta questão 5.
const inverterString = (frase) => {
    const caracteresSeparados = frase.split('');
    const stringAoContrario = []
    caracteresSeparados.map(e => {
       return stringAoContrario.unshift(e)
    })
    return stringAoContrario.join('')
}

console.log(inverterString("Fiz sem usar o reverse, foi mais facil do que eu pensei."))
// .iesnep ue euq od licaf siam iof ,esrever o rasu mes ziF