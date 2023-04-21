function apresentar(nome) {
    return `Meu nome é ${nome}`
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2

// Arrow function com mais de uma linha

const somaNumPequenos = (numero1, numero2) => {
    if (numero1 || numero2 > 10) {
        return "Erro. Somente números de 1 a 9"
    } else {
        return numero1 + numero2
    }
}

console.log(apresentar("HEllen"))

console.log(apresentarArrow("Hellen"))

console.log(soma(3, 4))

console.log(somaNumPequenos(2, 3))

// Hoisiting: arrow function se comporta como expressão