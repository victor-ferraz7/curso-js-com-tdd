let copo1 = "A bolinha não está aqui"
let copo2 = "A bolinha não está aqui também"
let copo3 = "A BOLINHA ESTÁ AQUI"

 function mudarBolinha(){
    [copo1,copo2,copo3] = [copo3, copo2, copo1]
    console.log("A bolinha foi mudada de lugar ...")
 }

console.log(`
Jogo da bolinha no copo:
A bolinha está no copo 1? ${copo1}
A bolinha está no copo 2? ${copo2}
A bolinha está no copo 3? ${copo3}
`)

mudarBolinha()

console.log(`
E agora, onde a bolinha está?
A bolinha está no copo 1? ${copo1}
A bolinha está no copo 2? ${copo2}
A bolinha está no copo 3? ${copo3}
`)
