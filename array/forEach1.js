const approveds = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approveds.forEach(function(name, index, array) {
    console.log(`${index + 1}) ${name}`)
    console.log(array)
})

approveds.forEach(name => console.log(name))

const showApproveds = approveds => console.log(approveds)
approveds.forEach(showApproveds)