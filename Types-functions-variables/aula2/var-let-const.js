//var

/* var altura = 5;
var comprimento = 7;

area = altura * comprimento
console.log(area)
var area; */

//let

/* let forma = 'rectangle'
let altura = 5
let comprimento = 7

let area;

if (forma === 'rectangle') {
    area = (altura * comprimento)
} else {
    area = (altura * comprimento) / 2
}

console.log(area) */

// Não se declara com const valores que não serão CONSTANTES, que por exemplo, serão alterados

const forma = 'quadrado'

const altura = 5
const comprimento = 7
let area;

if (forma === 'quadrado') {
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}

console.log(area)


// a let é a mais recomendada a ser usada mas o valor da variável sempre tem que ser declarada antes, diferente do var que pode ser declada em qualquer ponto da aplicação, e a const é utilizada para valores fixos, onde não serão posteriormente alterados, é uma "Variável constante"
