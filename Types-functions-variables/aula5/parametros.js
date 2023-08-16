// parametros de funcao



function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(2, 2))
console.log(soma(70, 85))
console.log(soma(102, -54852))
console.log(soma(989999, 4))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(18, "Hellen"))

function multiplica(num1 = 1, num2 = 2) {
    return num1 * num2
}

console.log( multiplica( soma(4, 5) ))