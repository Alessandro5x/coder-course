Number.prototype.between = function (start, end) {
    return this >= start && this <= end
}

const printResult = function (value) {
    if (value.between(9, 10)) {
        console.log('Honor square!')
    } else if (value.between(7, 8.99)){
        console.log('Approved!')
    } else if (value.between(4, 6.99)){
        console.log('Catch-up!')
    } else if (value.between(0, 3.99)){
        console.log('Failed!')
    } else {
        console.log('Invalid value!')
    }
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)