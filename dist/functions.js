"use strict";
//functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
add(10, 5);
subtract(10, 5);
function addAllNumbers(items) {
    const total = items.reduce((a, b) => a + b, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 4, 5]);
//return type inference
function multiply(a, b) {
    return a * b;
}
const result = multiply(10, 5);
console.log(result);
function formalGreeting(name, greeting) {
    return `${greeting}, Hello ${name}`;
}
const res = formalGreeting('John', 'Hi');
console.log(res);
