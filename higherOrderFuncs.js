let arr = [1, 2, 3, 4, 5];

let total = arr.reduce((result, item) => result + item, 0); //2nd parameter is the initial value of result, by default its 0 
console.log("reduce", total);

let squareArr = arr.map((item) => item ** 2); //map func
console.log("map", squareArr);

let filteredArr = arr.filter((item) => item > 3); //filter func
console.log("filter", filteredArr);

console.log("arr", arr); //origninal array is intact