const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in grades) {
    console.log(i, grades[i])
}

const person = {
    name: 'Ana',
    lastName: 'Silva',
    age: 29,
    weight: 64
}

for (attribute in person) {
    console.log(`${attribute} = ${person[attribute]}`)
}