"use strict";
//arrays
let names = ['John', 'Jane', 'Jack'];
let ages = [30, 25, 28];
names.push('Jake');
ages.push(24);
// type inference for arrays
let fruits = ['apple', 'banana', 'mango'];
fruits.push('grapes');
const f = fruits[3];
let things = ['car', 25, true];
const t = things[2];
//object literals
let user = {
    firstName: 'John',
    age: 30,
    isAdult: true
};
user.age = 31;
user.firstName = 'Jane';
user.isAdult = false;
//type inference for objects
let person = {
    name: 'Jack',
    age: 25,
    isAdult: true,
    score: 100
};
person.name = 'Jake';
person.age = 24;
person.isAdult = false;
const score = person.score;
