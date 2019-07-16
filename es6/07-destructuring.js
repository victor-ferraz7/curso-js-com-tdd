const jogador = {
    nome: "Kobe",
    idade: 35,
    time: "Lakers",
    posicao: "Ala-Armador",
    contato : {
        email: "kobe@kobe.com",
        insta: "@BlackMamba",
    }
}

let {nome, time} = jogador
let {email} = jogador.contato
let {posicao: position} = jogador  // altera o nome da variável que será criada
let {liga = "NBA"} = jogador // define default

console.log(nome)
console.log(time)
console.log(email)
console.log(posicao) // posicao is not defined, pois o nome da variável foi alterado no destructuring
console.log(position)
console.log(liga)