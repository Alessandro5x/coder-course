const person = {
    greeting: 'Hello!',
    speak() {
        console.log(this.greeting)
    }
}

person.speak()
const speak = person.speak
speak() //conflict between functional and OO

const speakAbout = person.speak.bind(person)
speakAbout()