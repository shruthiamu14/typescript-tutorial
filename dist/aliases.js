"use strict";
//aliases
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = {
    name: 'John',
    age: 30,
    isAdult: true
};
function formatUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}
formatUser(userOne);
formatUser({ name: 'Jane', age: 25, isAdult: true });
