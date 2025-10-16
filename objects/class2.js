const { captureOwnerStack } = require("react")

class GrandFather {
    constructor(lastName) {
        this.lastName = lastName
    }
}

class Father extends GrandFather {
    constructor(lastName, job = 'Teacher') {
        super(lastName)
        this.job = job
    }
}

class Son extends Father {
    constructor() {
        super('Silva')
    }
}

const son = new Son
console.log(son)