let persoon: [string, number, boolean] = ['John', 30, true]

//tuples examples
let hsla : [number, string, string, number]
hsla = [200, '50%', '50%', 0.3]

let rgb : [number, number, number]
rgb = [255, 0, 0]

let xy: [number, number]
xy = [25, 50]

function useCoords(): [number, number] {
    const lat = 100;
    const long = 200;
    return [lat, long]
}
const [latitude, longitude] = useCoords()

console.log(latitude, longitude)

//named tuples
let useer: [name: string, age: number, isAdult: boolean] = ['John', 30, true]
console.log(useer[0])