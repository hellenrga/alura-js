// O 'Null' é um valor atribuido a uma variável que existe e foi iniciada. Já o 'undefined' se refere a um valor que não foi inicializado, quando nenhum valor foi atribuido a ela. Undefined é uma falta de valor inesperada, diferente do null. O null pode ser um campo não-obrigatório vazio de uma tabela.

let input = null
let input2;

console.log(input, input2)

console.log(null == undefined); // true
console.log(null === undefined); // false