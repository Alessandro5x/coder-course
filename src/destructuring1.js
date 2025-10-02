// resource from ES2015

const person = {
    name: 'Ana',
    age: 5,
    address: {
        street: 'ABC street',
        number: 1000
    }
}

const { name, age } = person
console.log(name, age)

const { name: n, age: i} =  person
console.log(n, i)

const { lastname, smiling = true} = person
console.log(lastname, smiling)

const { address: { street, number, zip}} = person
console.log(address, number, zip)