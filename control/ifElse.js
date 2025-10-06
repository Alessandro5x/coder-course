const printResult = function(value) {
    if(value >= 7){
        console.log('Approved!')
    } else {
        console.log('Failed!')
    }
}

printResult(10)
printResult(4)
printResult('Ops!') // take care