const numArray = [10, 30, 40, 15];

let sortArray = function(inputArray){
    return inputArray.sort();
}

let newArray = sortArray(numArray);

console.log("numArray", numArray); //Still Mutates the Array
console.log("newArray", newArray);