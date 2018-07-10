// Check all the combinations by looping through each index
// Find out if there is another value that equals int
    // if statement adding i & j and to compare to int and push results 
const twoSum = (arr, int) => {
    // let results = [];
     for (let i=0; i<arr.length; i++) {
      for (let j=i+1; j<arr.length; j++) {
        if (arr[i] + arr[j] === int ) {
        //   results.push(i);
        //   results.push(j);
        return [i,j];
        }
      }
    }
    // return results;
  }

console.log(twoSum([1,2,3], 4));

module.exports = twoSum;
