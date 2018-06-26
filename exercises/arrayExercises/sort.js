// #1
var nums = [1, 3, 5, 2, 90, 20];

var leastToGreat = nums.sort(function(num1,num2){
    if (num1 - num2 > 0) return 1;
    if (num1 - num2 > 0) return -1;
    return 0; 
})
console.log(leastToGreat);

// #2
var greatToLeast = nums.sort(function(num1,num2){
    return num2 - num1;
})
console.log(greatToLeast);
// #3
var words = ["dog", "wolf", "by", "family", "eaten"];

var lengthShort = words.sort(function(words1,words2){
    return words1.length - words2.length;
    words1.localeCompare(words2);
    
})
console.log(lengthShort);

// #4
var alphabetical = words.sort(function(words1,words2){
    return words1.localeCompare(words2);
})
console.log(alphabetical);

// #5



var byAge = [  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
];

var ages = byAge.sort (function(obj1,obj2){
    return obj1.age > obj2.age;
});
console.log(ages);


