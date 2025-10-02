const greeting = 'Hi' // Lexical context 1 

function exec(){
    const greeting = 'hello' //lexical context 2
    return greeting
}

//Objects are nested by name-value pairs
const client = {
    name: 'Peter',
    age: '32',
    weight: 90,
    address: {
        street: 'Somewhere',
        number: 2
    }
}

console.log(greeting)
console.log(exec())
console.log(client)