let basico = [1,4,-6,-1,9,29,-23,45,-78,287]

let menorQueZero = basico.find(x => x < 0) // retorna o primeiro valor que retorna dessa condição
let menorQueZeroIndice = basico.findIndex(x => x < 0) // retorna o índice do valor retornado 

console.log(`O valor no array ${basico} que é menor que zero é ${menorQueZero} que está no índice ${menorQueZeroIndice}`)