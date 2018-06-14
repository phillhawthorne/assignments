// function filter (cb, arr) {
//     // cb is designed to take a single item from the array, and its index as arguments
//     // its also designed to return true or false
//     var output = [];
//     for (var i = 0; i < arr.length; i++){
//         var element = arr[i];
//         var passesTest = cb(element, i);
//         if(passesTest) output.push(element);
//     }
//     return output;
// }

var integ = [1,2,3,4,5,6,7,8,9,10];
// var misc = ["a", 4, true, false, {}, [], undefined];
// function testForEven(integ){
//     return integ % 2 ===0;

// }
// var evens = filter(testForEven, integ);
// console.log(evens);

// var odd = filter(testForOdd, integ);


// function testForOdd(integ) {
//     return integ % 2 !==0;
// }

// console.log(odd);


// testForOddIndex = function(thing, i){
//     return i% 2 !==0;
// }
// var oddIndexes = filter(testForOddIndex, misc);
// console.log(oddIndexes);

var names = ['Ben',"Maxx", "Taylor", "Chazz","Nicole"];
var shortNames = names.filter (function(name, i){
    return name.length < 3;
})
console.log(shortNames);


// // .map 

var lowCLtrs = ["a", "b","c", "d"];
var capLtrs = lowCLtrs.map(function(ltr){
    return ltr.toUpperCase();
})
console.log(capLtrs);


// .forEach()

var nums = [1,2,3,4,5,6,7,8,9,10];
var squares = [];
nums.forEach(function(num){
    squares.push(num * num);
})

console.log(squares);

//.sort()

var nums = [1,2,6,5,7,8,9,3,4];

var lowToHiNums = nums.sort(function(num1,num2){
    if(num1 - num2 > 0 ) return 1;
    if(num1 - num2 < 0) return -1;
    return 0;
})

console.log(lowToHiNums)

var alphabetizedReversed = names.sort(function(name1,name2){
    return name1.localeCompare(name2);
})
console.log(alphabetizedReversed)

var sum = nums.reduce(function(accumulator, num){
    return accumulator =+ num;

});
console.log(sum);
