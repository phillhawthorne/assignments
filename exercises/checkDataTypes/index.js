
// const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
// checkTypes(multiD1)
// const multiD2 = [[true,false,true],[false,false,true]] 
// checkTypes(multiD2)

// const checkTypes = arr =>{
//     let answer;
//     for(let i = 0; i < arr.length - 1; i++){
        
//     }
// }

// checkTypes = (arr) => {  
//     let answer;
// for (let i = 0; i < arr.length -1; i++) {
//     if (typeof arr[i][1] === typeof arr[i+1][1]){
//         answer = true
//     } else {
//         answer = false
//     }
// }
// return answer;
// }


const checkTypes = arr => {
    const dataType = typeof arr[0][0];
    return arr.every(subArr => subArr.every(element => typeof element === dataType));
  }
  const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
  console.log(checkTypes(multiD1));
  // returns false (inner arrays aren't consistent with each other's data types)
  const multiD2 = [[true,false,true],[false,false,true]]
  console.log(checkTypes(multiD2));
  // returns true (each inner array contains the same data type as the others)

  