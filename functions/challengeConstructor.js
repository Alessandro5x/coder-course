function Person(name) {
    this.name = name

    this.speak = function() {
        console.log(`My name is ${this.name}!`)
    }
}

const p1 = new Person('Jhon')
p1.speak()