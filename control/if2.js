function test(num) {
    if(num > 7)
        console.log(num)
    console.log('End')
}

test(6)
test(8)

function test2(num) {
    if(num > 7); { //take care about semicolons and control structures
        console.log(num)
    }
}

test2(6)
test2(8)