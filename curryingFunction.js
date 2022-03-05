//Curry function
function curry(fn,arity = fn.length) {
    return (function nextCurried(prevArgs){
        return function curried(nextArg){
            var args = [ ...prevArgs, nextArg ];
            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
            }
        };
    })( [] );
}

//Pipe function
const pipe = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

const doubleNum = function(num){
    return num + num;
};
const totalIt = function(n1, n2, n3, n4){
    return n1 + n2 + n3 + n4;
}
const doArray = function(num1, num2){
    return [num1, num2];
}

//function Composition
// const newFunction = pipe(
//     doubleNum,
//     totalIt,
//     doArray
// ); 
//This will not work, totalIt(), doArray() are expecting
//more than 1 argument.

//To solve this we need to curry those 2 functions
const curriedTotalIt = curry(totalIt);
const curriedDoArray = curry(doArray);

const newFunction1 = pipe(
    doubleNum,
    curriedTotalIt(2)(3)(4),
    curriedDoArray(100)
);
let result1 = newFunction1(1); 

//or we can put curry function directly in the pipe.
const newFunction2 = pipe(
    doubleNum,
    curry(totalIt)(2)(3)(4),
    curry(doArray)(100)
);
let result2 = newFunction2(1);
console.log(result1, result2);
