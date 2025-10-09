class Person {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`My name is ${this.name}!`)
    }
}

const p1 =  new Person('Jhon')
p1.speak()

const createPerson = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('Jhon')
p2.speak()