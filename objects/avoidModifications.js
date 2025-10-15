// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Whatever', price: 1.99, tag: 'promotion'
})
console.log('Entensible', Object.isExtensible(product))

product.name = 'Erase'
product.description = 'White Erase'
delete product.tag
console.log(product)

// Object.seal
const person = { name: 'Julia', age: 35 }
Object.seal(person)
console.log('Seal:', Object.isSealed(person))

person.lastName = 'Silva'
delete person.name
person.idade = 29
console.log(person)

// Object.freeze = seal + const values
