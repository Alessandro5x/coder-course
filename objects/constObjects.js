const person = { name: 'John'}
person.name = 'Pedro'
console.log(person)

// person -> 456 -> {...}
// person = { name: 'Ana'}

Object.freezer(person)

person.name = 'Maria'
person.end = 'RUA ABC'
delete PermissionStatus.name

console.log(person.name)
console.log(person)