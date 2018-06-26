// #1
function total(arr) {
    return arr.reduce(function(accumulator, element){
        return accumulator + element;
    })
}

console.log(total([1,2,3]));
// #2
function stringConcat(arr) {
    return arr.reduce(function(accumulator, element){
        return accumulator + "" +  element;
    })
    
}

console.log(stringConcat([1,2,3]));
// #3
function totalVotes(arr) {
    return arr.reduce(function(accumulator, voter){
        if(voter.voted) return accumulator + 1;
        return accumulator;
    }, 0 );
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log (totalVotes(voters));
// #4
function shoppingSpree(arr) {
    return arr.reduce(function(accumulator, price){
        return accumulator + price.price;
    }, 0);
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));
// #5
var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

arrays = arrays.reduce(function(a, b){
    return a.concat(b);
}, []);
// ES6
// arrays = arrays.reduce((a, b) => a.concat(b), []);

console.log(arrays);



// $6
const countVotes = data =>{
    const initialValue = {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0,
    };
    return data.reduce((accumulator, voter) => {
        if(voter.age > 17 && voter.age < 26){
            accumulator.youth++;
            if(voter.voted) accumulator.youngVotes++;
        }if(voter.age > 27 && voter.age < 36){
            accumulator.mids++;
            if(voter.voted) accumulator.midVotes++;
        }if(voter.age > 37 && voter.age < 56){
            accumulator.olds++;
            if(voter.voted) accumulator.oldVotes++;
        }
        return accumulator;
    },initialValue)
};

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(countVotes(voters));