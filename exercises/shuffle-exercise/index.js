// While there are elements in the array
// Pick a random index
// Decrease the cnt by 1
// And swap the last elements with it
const shuffle = arr1 => {
        let cnt = arr1.length;
        let temp;
        let index;
        while (cnt > 0) {
            index = Math.floor(Math.random()*cnt);
            cnt--;
            temp = arr1[cnt];
            arr1[cnt] = arr1[index];
            arr1[index] = temp;
        }
        return arr1;
    }
const newArr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(newArr1);
console.log(shuffle(newArr1));

const unsort =  arr => {
    return arr.sort((a,b)=> Math.floor(Math.random()*3)-1);
}
console.log(unsort(newArr1));

