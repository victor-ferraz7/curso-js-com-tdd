var car = "Ferrari"
console.log(`${car} - From Global Scope`)

{
    let car = "Fusca"
    console.log(`${car} - From Block Scope`)
}

console.log(`${car} - After passing through Both Scopes`)