function findMissingNo(arr){
    // sequence the arr
    var sortedArr = arr.sort(function(x,y){
        return x - y;
    });
    // check for gaps by looping through the array
    for( var i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] - sortedArr[i + 1] !== -1){
            return sortedArr[i] + 1;
        }
    }

    // return num that should fill gap
}

module.exports = findMissingNo;