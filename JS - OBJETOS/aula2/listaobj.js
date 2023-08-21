const cliente = {
    nome: "Joao",
    idade: 24,
    email: "bal@gmaio.com",
    telefone: ["24213423", "234234"],
}

cliente.enderecos = [
    {
        rua: "r bla bla",
        numero: 24,
        apartamento: false,
        complemento: "ap 1234",
    }
];

cliente.enderecos.push({
    rua: "R. Joseph ",
    numero: 404,
    apartamento: true,
    complemento: "ap 2134"
})

const listaApenasApto = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApto)