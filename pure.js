var currentUser = 0,
users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

// var updateScore = function(newAmt) {
// users[currentUser].score += newAmt;
// };

var updateScore = function(score, newAmt) {
    let total = score + newAmt;
    return total;
};

// var returnUsers = function() {
// return users;
// };

// var updateTries = function() {
// users[currentUser].tries++;
// };

var updateTries = function(tries) {
    return tries + 1;
};

// var updateUser = function(newUser) {
//     currentUser = newUser;
// };

currentUser = 1;
users[currentUser].score = updateScore(users[currentUser].score, 10);
users[currentUser].tries = updateTries(users[currentUser].tries);

console.log(users);