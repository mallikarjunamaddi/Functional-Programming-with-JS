obj1 = {
    "name": "Ram",
    "age": 25,
    "score": 9.2,
    "other":{
        "college": "RVR",
        "major": "CSE"
    } 
}

obj2 = JSON.parse(JSON.stringify(obj1)); //Deep copy.

obj1.score = 9.8;

obj1.other.college = "R.V.R & J.C";

console.log("obj1", obj1);
console.log("obj2", obj2);
