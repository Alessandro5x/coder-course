let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'test'

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// creating one crazy variable
abc = 3
console.log(globalThis.abc)