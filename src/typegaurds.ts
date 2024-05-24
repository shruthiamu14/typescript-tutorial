//typegaurds
type id = number | string

function swapIdType(id: id){
    if(typeof id === 'number'){
        return id.toString()
    }else{
        return id.toString()
    }
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')
console.log(idOne, idTwo)

//tagged interface

interface Useer {
    type: 'user'
    username: string
    email: string
    id: id
}
interface Person {
    type: 'person'
    firstname: string
    age: number
    id: id
}

function logDetails(value: Useer | Person) : void
{
    if(value.type === 'user'){
        console.log(value.username, value.email)
    }
    else if(value.type === 'person'){ // Add type guard here
        console.log(value.firstname, value.age)
    }
}


