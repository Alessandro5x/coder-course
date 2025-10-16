class Launch {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class FinancialCycle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.launchs = []
    }

    addLaunch(...launchs) {
        launchs.forEach(l => this.launchs.push(l))
    }

    summary() {
        let finalValue = 0
        this.launchs.forEach(l => {
            finalValue += l.value
        })
        return finalValue
    }
}

const salary = new Launch('Salary', 45000)
const lightBill = new Launch('Light', -220)

const bills =  new FinancialCycle(6, 2018)
bills.addLaunch(salary, lightBill)
console.log(bills.summary())