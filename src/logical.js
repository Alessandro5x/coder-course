function buy(job1, job2){
    const buyIceCream = job1 || job2
    const buyTV50 = job1 && job2
    const buyTV32 = job1 != job2
    const keepHealth = !buyIceCream //unit operator

    return {buyIceCream, buyTV50, buyTV32, keepHealth}
}

console.log(buy(true, true))
console.log(buy(true, false))
console.log(buy(false, true))
console.log(buy(false, false))