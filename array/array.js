console.log(typeof Array, typeof new Array, typeof [])

let approveds = new Array('Bia', 'Carlos', 'Ana')
console.log(approveds)

approveds = ['Bia', 'Carlos', 'Ana']
console.log(approveds[0])
console.log(approveds[1])
console.log(approveds[2])
console.log(approveds[3])

approveds[3] = 'Paulo'
approveds.push('Abia')
console.log(approveds.length)

approveds[9] = 'Rafael'
console.log(approveds.length)
console.log(approveds[8] === null)

console.log(approveds)
approveds.sort()
console.log(approveds)

delete approveds[1]
console.log(approveds[1])
console.log(approveds[2])

approveds = ['Bia', 'Carlos', 'Ana']
approveds.splice(1, 2, 'Element1', 'Element2')
console.log(approveds)