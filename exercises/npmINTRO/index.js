var rs = require("readline-sync");

console.log(rs);

var userName = rs.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// var directions =["north", "south", "east", "west"];
// var direction = rs.keyInSelect(directions, "Which way do you want to go?");
// console.log(direction);

var favColor = rs.question("What is your favorite color?");
console.log(" so your favorite color is: " + favColor.toUpperCase() + "!");

var characters = rs.question(" Type something down ");
console.log(" You typed: " + characters + " which has " + characters.length + "  characters in it.");

var lN = "Hawthorne"
var lastName = rs.question(" What's your last name? ");
console.log(userName.concat(lN));



