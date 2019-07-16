let nome = "Victor"
let amigos = ["Gabriel","Big","Gustavo","Cassio"]


console.log(...nome)
console.log({...nome}) // um Objeto a partir de uma String
console.log([...nome]) // cria um Array a partir de uma String
console.log(...amigos)
console.log({...amigos})
console.log([...amigos])

//console.log(`${(...nome)}`) // gera >> Unexpected token ...