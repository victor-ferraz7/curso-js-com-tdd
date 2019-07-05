const bola = {  
    marca: "Nike",
    cor: "Preta"
}
Object.freeze(bola) // Tornar o Objeto Imutável : Congelado

console.log(bola) // Antes de alterar as propriedades

bola.marca = "Adidas"
bola.cor = "Azul"

console.log(bola) // Após alterar as propriedades