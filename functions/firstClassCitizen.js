// Function inside JS it´s First-Class Object (Citizens)
// High-order function

// create literally
function fun1() { }

// Store functions inside variable
const fun2 = function () { }

//Store inside Array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Store inside attribute from object
const obj = {}
obj.speak = function () { return 'Hello'}
console.log(obj.speak())

// Pass a function as a parameter
function run(fun) {
    fun()
}

run(function () { console.log('Exec...')})

// One function could return/contain one function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(4)
const fiveMore = sum(2, 3)
fiveMore(4)