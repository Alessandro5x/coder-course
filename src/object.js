const prod1 = {}
prod1.name = 'Special Cellphone'
prod1.price = 4998.90
prod1['Nice discount'] = 0.40 // avoid values with space

console.log(prod1)

const prod2 = {
    name: 'White T-Shirt',
    price: 79.90,
    obj: {
        something: 1,
        obj: {
            something: 2
        }
    }
}

// '{"name": "T-shirt", "price": 79.90' JSON

console.log(prod2)