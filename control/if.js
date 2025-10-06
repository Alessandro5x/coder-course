function goodNews(value){
    if (value >= 7){
        console.log('Approved with ' + value)
    }
}

goodNews(8.1)
goodNews(6.1)

function ifTrueISay(value){
    if(value){
        console.log('Is true...' + value)
    }
}

ifTrueISay()
ifTrueISay(null)
ifTrueISay(undefined)
ifTrueISay(NaN)
ifTrueISay('')
ifTrueISay(0)
ifTrueISay(-1)
ifTrueISay(' ')
ifTrueISay('?')
ifTrueISay([])
ifTrueISay([1, 2])