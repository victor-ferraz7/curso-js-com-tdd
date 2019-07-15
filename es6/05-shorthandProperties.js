
let nome = "Zé"
let sobrenome = "Da Silva"
let idade = 59

const pessoa = {
    nome, // não precisa mais declarar nome: nome
    sobrenome,
    idade,

    falaOi(){     // também não há necessidade de se escrever falaOi: function(){}
        console.log("Oi !")
    }

}

console.log(pessoa.nome)

pessoa.falaOi()