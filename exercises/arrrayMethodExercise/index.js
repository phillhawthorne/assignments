var fruit = ["banana", "apple", "orange", "watermelon"];  
var veg = ["carrot", "tomato", "pepper", "lettuce"];  

var pop = veg.pop();
var shift = fruit.shift();
var index = fruit.indexOf("orange");
fruit.push(1);
// console.log(veg.length);
veg.push(3);
var food = fruit.concat(veg);
food.splice(4,2);
food.reverse();
console.log(food);