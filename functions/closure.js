// Clore is a escope created when the function is declared
// This escope allow the functions to access and manipulate variables exxternal to the function

// Lexical contect in action

const x = 'Global'

function out() {
    const x = 'Local'
    function inside() {
        return x
    }
    return inside
}

const myFunction = out()
console.log(myFunction())