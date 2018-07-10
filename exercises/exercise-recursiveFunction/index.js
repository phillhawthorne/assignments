const gameOfThree = (n, counter = 0) => {
 

if(n === 1) return counter;
// determine if n is divisible by 3

if (n % 3 === 0){
    return gameOfThree(n/3, counter + 1);

}else{
    if((n+1) % 3 === 0){
        return gameOfThree((n + 1)/3, counter +1);
    } else {
        return gameOfThree((n - 1)/3, counter +1);
    }
}
}
console.log(gameOfThree(15));