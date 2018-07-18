// var people =[  
//   {
//     firstName: "Sarah",
//     lastName: "Palin",
//     age: 47
//   },{
//     firstName: "Frank",
//     lastName: "Zappa",
//     age: 12
//   },{
//     firstName: "Rick",
//     lastName: "Sanchez",
//     age: 78
//   },{
//     firstName: "Morty",
//     lastName: "Smith",
//     age: 13
//   },{
//     firstName: "Kyle",
//     lastName: "Mooney",
//     age: 27
//   }
// ]; 

// function sortByLNameFilterByage(arr){
// var sorted = arr.sort(function(person1,person2){
//      person1.lastName.localeCompare(person2.lastName);
// })

// var filterAndSorted = sorted.filter(function(person){
//     return person.age >= 18
// })
//     return filterAndSorted
// }
// console.log(sortByLNameFilterByage(people));

// var people = people.sort(function(person1,person2){
//         return person1.age < person2.age;
//     });
//     console.log(sortByLNameFilterByage(people));
    

// const Animal = function(name){
//   this.name =name;
//   this.hasCellWall = false;
// }

// VALIDATE IP ADDRESS



//  const validateIP = (str) => {
//     if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str));
//     {
//         return (true)
//     } 
//     alert("You have entered an invalid IP address!")
//         return (false)
    
// }

// console.log(validateIP('aa.io.p30.0'));
// console.log(validateIP('3.89.230.0'));
// console.log(validateIP('0.30.90'));

// const validateIP = (str) =>{
//     splitAddress = str.split(".")
//     let answer = true;
//     if (splitAddress.length < 4){
//         answer = false
//     } else {
//         for (let i = 0; i < splitAddress.length; i++) {
//             if (Number(splitAddress[i]) <= 255 && Number(splitAddress[i] >= 0)) {
//                 answer = true
//             } else {
//                 answer = false
//                 break
//             };
//         }
//     }
//     return answer;
// }

// console.log(validateIP('0.30.90'));




// module.exports = validateIP;

// FINDING THE HIGHEST NUMBER IN AN ARRAY SIMPLEST EQUATION

let nums = [4, 5, 1, 3, 10, 14, 22, 39, 7, 49, 52, 76, 87, 101] 

let arr = Math.max(...nums);
console.log(arr)