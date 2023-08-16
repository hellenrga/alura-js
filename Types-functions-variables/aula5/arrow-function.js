function apresentar(nome) {
    return `Meu nome é ${nome}`
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2

// Arrow function com mais de uma linha

const somaNumPequenos = (numero1, numero2) => {
    if (numero1 || numero2 >= 10) {
        return "Erro. Somente números de 1 a 9"
    } else {
        return numero1 + numero2
    }
}

console.log(apresentar("HEllen"))

console.log(apresentarArrow("Hellen"))

console.log(soma(3, 4))

console.log(somaNumPequenos(4, 5))

// Hoisiting: arrow function se comporta como expressão

function verificaNumero(numero) {
    if (numero > 10) {
         return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}

console.log(verificaNumero(9))