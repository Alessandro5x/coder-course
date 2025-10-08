let compareWith = function (param) {
    console.log(this === param)
}

compareWith(global)

const obj = {}
compareWith = compareWith.bind(obj)
compareWith(global)
compareWith(obj)

let compareWithArrow = param => console.log(this === param)
compareWithArrow(global)
compareWithArrow(module.exports)

compareWithArrow = compareWithArrow.bind(obj)
compareWithArrow(obj)
compareWithArrow(module.exports)