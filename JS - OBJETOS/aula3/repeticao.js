const cliente = {
    nome: "Joao",
    idade: 24,
    email: "bal@gmaio.com",
    telefone: ["24213423", "234234"],
}


//um array que tem um objeto dentro
cliente.enderecos = [
    {
        rua: "r bla bla",
        numero: 24,
        apartamento: false,
        complemento: "ap 1234",
    }
];

for (let chave in cliente){
    let tipo = typeof cliente[chave]

    if (tipo !== 'object' && tipo !== 'function')
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}