/*try {
  
    x + y

}
catch(err) {
    console.log(err.message);
}
*/
// function sum(x , y){
//     if (typeof x !== "number" || typeof y !== "number"){
//         throw new TypeError ("inputs must be numbers");
//     }
//     return x  + y;
// }
// try {
//     sum("1", "2");
// }
// catch(err) {
//     console.log(err.message);
// }

var user = {username: "sam", password:"123abc"};
function login(username,password){
    if(username !== "sam" || password !== "123abc"){
        throw new TypeError ("wrong username or password");
    }else{
        console.log("login successful!");
    }
}
try{
    
    login("sam","123abc");
}
catch(err){
    console.log(err.message);
}