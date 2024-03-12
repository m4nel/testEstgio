let INDICE = 13
let SOMA = 0
let K = 0

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

///////////////////////////////////////////////////////

function isFibonacci(n, a = 0, b = 1) {
    if (n === a) {
        return true;
    } else if (n < a) {
        return false;
    } else {
        return isFibonacci(n, b, a + b);
    }
}

let numero = 21;
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

///////////////////////////////////////////////////////

// a 1, 3, 5, 7, ___ = 9

// b 2, 4, 8, 16, 32, 64, ____ = 128

// c 0, 1, 4, 9, 16, 25, 36, ____ = 49

// d 4, 16, 36, 64, ____ = 64

// e 1, 1, 2, 3, 5, 8, ____ = 13

// f 2,10, 12, 16, 17, 18, 19, ____ = 20

/////////////////////////////////////--------------------

/*
PRIMEIRA IDA
ligar um interruptor e deixar ligado por alguns minutos
desligar o interruptor que foi ligado e ligar outro interruptor que não foi ligado  
*/
/*
SEGUNDA IDA
a lampada que estiver acesa está conectada ao primeiro que foi ligado e desligou
encostar a lampada que ainda estiver quente, porque está conectada ao segundo interruptor que foi ligado por alguns minutos
a lampada restante é o ultimo interruptor   
*/

///////////////////////////////////////////////////

function functString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString = novaString + str[i];
    }
    return novaString;
}

let stringTest = 'Inverter isso aqui';
let stringInvertida = functString(stringTest);
console.log(stringInvertida);