"use strict";
let persoon = ['John', 30, true];
//tuples examples
let hsla;
hsla = [200, '50%', '50%', 0.3];
let rgb;
rgb = [255, 0, 0];
let xy;
xy = [25, 50];
function useCoords() {
    const lat = 100;
    const long = 200;
    return [lat, long];
}
const [latitude, longitude] = useCoords();
console.log(latitude, longitude);
//named tuples
let useer = ['John', 30, true];
console.log(useer[0]);
