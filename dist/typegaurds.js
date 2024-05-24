"use strict";
function swapIdType(id) {
    if (typeof id === 'number') {
        return id.toString();
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
