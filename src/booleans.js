let isActive = false
console.log(false)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive) // 2 denials = normal value

console.log('True values...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('False values...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log(!!('' || null || 0 || 'hi'))

let personName = ''
console.log(personName || 'Not found')