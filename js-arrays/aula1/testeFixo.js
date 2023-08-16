/* const lista = [1, 2, 3, 4, 5]

for (let indice = 0; indice < lista.length; indice++) {
    console.log(lista[indice])
} */

/* const lista = [1, 2, 3, 4, 5]

for (let i = 0, j = 0; i < lista.length; i++, j++) {
    console.log(lista[i] + j)
} */

const lista = [1,2,3,4,5];
let soma = 0;

for (let elemento of lista) {
    soma += elemento;
}

console.log(soma)