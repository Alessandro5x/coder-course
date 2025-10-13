const sequence = {
    _value: 1, // convention
    get value() { return this._value++ },
    set value(value) {
        if (value > this._value){
            this._value = value
        }
    }
}

console.log(sequence.value, sequence.value)
sequence.value = 10000
console.log(sequence.value, sequence.value)
sequence.value = 900
console.log(sequence.value, sequence.value)