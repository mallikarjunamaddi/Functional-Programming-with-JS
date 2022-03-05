"use strict"; //It forces to return an error if any
let numArray = [10, 30, 40, 15];

Object.freeze(numArray); //prevents to change the properties/values of an object

let sortArray = function(inputArray){
    return inputArray.sort();
}

const cloneObj = function(inputArray){
    return JSON.parse(JSON.stringify(inputArray));
}

let inputArray = cloneObj(numArray); //Cloning the numArray.
let newArray = sortArray(inputArray);//Sorting the new array.

console.log("numArray", numArray);
console.log("newArray", newArray);