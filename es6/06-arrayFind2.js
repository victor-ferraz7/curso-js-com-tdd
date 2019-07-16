let personagem = [{
    nome: "Saitama",
    poder: "One Punch",
    usaMascara: false,

},{
    nome: "Batman",
    poder: "Ser Rico",
    usaMascara: true

},{
    nome: "Goku",
    poder: "Vish, vários",
    usaMascara: false,
}]

let saitama = personagem.find(persona => persona.nome == "Saitama")
let gokuIndex = personagem.findIndex(persona => persona.poder == "Vish, vários")

console.log(saitama)
console.log(gokuIndex)