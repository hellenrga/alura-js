const cliente = {
    nome: "Hellen",
    idade: 32,
    cpf: "1122233345",
    email: "hellen@dominio.com",
}

console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
  );

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})