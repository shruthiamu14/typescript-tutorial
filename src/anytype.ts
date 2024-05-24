let aage: any
aage = 30
aage = 'thirty'

let title
title = 25
title ={
    name: 'John'
}

//any type in arrays
let mixed: any[] = ['apple', 25, true]
mixed.push({id: 1})
console.log(mixed)

//functions and any
function addTogether(value : any): any {
    return value + value
}

const resultOne  = addTogether(10)
const resultTwo = addTogether('hello')



