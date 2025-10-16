const pilots = ['Hamilton', 'Verstappen', 'Massa', 'Bortoleto']
pilots.pop()
console.log(pilots)

pilots.push('Kimi')
console.log(pilots)

pilots.shift() // remove the first
console.log(pilots)

pilots.unshift('Vettel')
console.log(pilots)

// splice can add or remove

// add
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// remove
pilots.splice(3, 1)
console.log(pilots)

const somePilots1 = pilots.splice(2) // new array
console.log(somePilots1)

const somePilots2 = pilots.splice(1, 4)
console.log(somePilots2)