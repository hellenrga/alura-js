const cliente = {
    nome: "Joao",
    idade: 24,
    email: "bal@gmaio.com",
    telefone: ["24213423", "234234"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(30)
