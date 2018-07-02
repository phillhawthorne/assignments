// #1
var originalNumbers = [2, 5, 100];

var newNumbers = originalNumbers.map(function(element){
    return element * 2;
});

console.log(originalNumbers);
console.log(newNumbers);

// #2

console.log(originalNumbers.toString());

// #3
var capitalizeNames =["john", "JACOB", "jinGleHeimer", "schmidt"]

var newCaps = capitalizeNames.map(function(element){
    return element.toUpperCase();
});
console.log(capitalizeNames);
console.log(newCaps)

// #4


onlyHumans = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

var people = onlyHumans.map(function(onlyHuman){
    return onlyHuman["name"];
})

console.log(people);
