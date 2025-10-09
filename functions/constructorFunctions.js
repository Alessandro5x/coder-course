function Car(maxSpeed = 200, diff = 5) {
    // private attribute
    let currentSpeed = 0

    // public method
    this.accelerate = function () {
        if (currentSpeed + diff <= maxSpeed){
            currentSpeed += diff
        } else {
            currentSpeed = maxSpeed
        }
    }

    // public method
    this.getCurrentSpeed = function () {
        return currentSpeed
    }
}

const uno = new Car
uno.accelerate()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.accelerate()
console.log(ferrari.getCurrentSpeed())
ferrari.accelerate()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof uno)