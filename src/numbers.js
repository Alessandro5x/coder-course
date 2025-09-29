const weight = 1.0
const weight2 = Number('2.0')

console.log(weight, weight2)
console.log(Number.isInteger(weight))
console.log(Number.isInteger(weight2))
 
const assessment = 9.871
const assessment2 = 6.871

const total = assessment * weight + assessment2 * weight2
const average = total / (weight + weight2)

console.log(average.toFixed(2))
console.log(average.toString(2))
console.log(typeof average)
console.log(Number.isInteger(average))