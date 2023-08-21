const paciente = {
    nome: "James T. ",
    idade: 30,
    email: "jt@email.com",
    identicacao: "alpha91q921939",
    funcao: "comandante",
    peso: 80.1,
    altura: 1.80,
    calcularIMC: function() {
        return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto: function() {
        console.log(this.nome)
    }
}

for (let info in paciente) {
    console.log(info)
}