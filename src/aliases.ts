//aliases

    //example 1 - tuple
type rgb = [number, number, number]

function getRandomColor(): rgb {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return [r, g, b]
}

const colorOne= getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

    //example 2 - object literal

 type User = {
        name: string
        age: number
        isAdult: boolean
    }
const userOne: User = {
    name: 'John',
    age: 30,
    isAdult: true
}
function formatUser(user: User): void {
  console.log(`${user.name} is ${user.age} years old`)
}
formatUser(userOne)
formatUser({name: 'Jane', age: 25, isAdult: true})


