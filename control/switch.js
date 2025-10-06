const printResult = function (value) {
    switch (Math.floor(value)){
        case 10:
        case 9:
            console.log('Honor square')
            break
        case 8: case 7:
            console.log('Approved')
            break
        case 6: case 5: case 4:
            console.log('Catch-up')
            break
        case 3: case 2: case 1: case 0:
            console.log('Failed')
            break
        default:
            console.log('Invalid value')
    }
}

printResult(8.9)