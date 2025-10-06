function handleError(error){
    // throw new Error("...")
    // throw true
    // throw 10
    throw error

}

function printName(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        handleError(e)
    } finally {
        console.log('end')
    }
}

const obj = {nme: 'Roberto'}
printName(obj)