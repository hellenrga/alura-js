/* const lista = [1, 2, 3, 4, 5]

for (let indice = 0; indice < lista.length; indice++) {
    console.log(lista[indice])
} */

/* const lista = [1, 2, 3, 4, 5]

for (let i = 0, j = 0; i < lista.length; i++, j++) {
    console.log(lista[i] + j)
} */

/* const lista = [1,2,3,4,5];
let soma = 0;

for (let elemento of lista) {
    soma += elemento;
}

console.log(soma) */


/* const nome = ["Alura"]

const nomeUpper = nome.map((alura) => {
    return alura.toUpperCase();
})

console.log(nomeUpper)  

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) */

const num = [1,2,3,4]

function xDez(num) {
    return num * 10
}

const arraySomada = num.map(xDez)

console.log(arraySomada)