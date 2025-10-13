// literal notation
const obj1 = {}
console.log(obj1)

// Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Builder functions
function Product(name, price, disc) {
    this.name = name
    this.getPriceWithDiscount = () => {
        return price * (1 - disc)
    }
}

const p1 = new Product('Pencil', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.99, 0.25)
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount())

// Function Factory
function createEmployee(name, baseSalary, foults) {
    return {
        name,
        baseSalary,
        foults,
        getSalary() {
            return (this.baseSalary / 30) * (30 - foults)
        }
    }
}

const f1 = createEmployee('Joao', 7980, 4)
const f2 = createEmployee('Maria', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

// Object.create
const child = Object.create(null)
child.name = 'Ana'
console.log(child)

// One function that returns Object ...
const fromJSON = JSON.parse({"info": "I'm JSON"})
console.log(fromJSON.info)