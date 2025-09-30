let value // not initialized
console.log(value)
// console.log(value2) // Error not defined

value = null // without value
console.log(value)
// console.log(value.toString()) TypeError cannot read properties of null

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.5
console.log(product)

product.price =  undefined // not recommended
console.log(!!product.price)
// delete product.price
console.log(product)

product.price = null // without price
console.log(!!product.price)
console.log(product)