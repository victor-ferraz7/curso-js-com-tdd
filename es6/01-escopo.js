var animal = "Dog"

function sayAnimal (){
    var animal = "Cat"
    console.log(`The animal is ${animal} - Function Scope`)
}

sayAnimal()
console.log(`The animal is ${animal} - Global Scope`)
    

 