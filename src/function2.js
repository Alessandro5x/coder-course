// Store one function in one variable
const printSum = function (a,b) {
    console.log(a + b)
}

printSum(2,3)

// Store one function arrow in one variable
const sum = (a, b) => {
    return a + b
}

console.log(sum(2,3))

// Implicit reutrn
const decrease = (a,b) => a -b
console.log(decrease(2,3))