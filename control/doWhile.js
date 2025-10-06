const getRandomInt = function(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

do {
    option = getRandomInt(-1, 10)
    console.log(`Option selected was ${option}`)
} while (option != -1)

console.log('See you next time!')
