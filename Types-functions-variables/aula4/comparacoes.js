// == (comparaçao implicita)

//Aqui nesse caso, o terminal retorna TRUE, pois fez a conversão ímplicita antes de comparar os valores.

const numero = 5
const texto = "5"

console.log(numero == texto)
console.log(typeof numero, typeof texto)

// === (comparação implicita)
// Nesse caso, o terminal retorna FALSE, pois o === compara os tipos de dado e não apenas os valores.

const numero2 = 6
const texto2 = "6"

console.log(numero === texto)
