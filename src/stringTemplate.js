const personName = 'Rebeca'
const concat = 'Hello' + personName + '!'
const template = `
    Hello
    ${personName}!`
console.log(concat, template)

//expressions
console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()
console.log(`Hi...${up('take care')}`)