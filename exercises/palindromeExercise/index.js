function palindromeFinder(str){
    // var lowStr = str.toLowerCase().replace(/[^a-z]/g, "");
    // var revStr = lowStr.split(" ").reverse(" ").join("");
    // return revStr === lowStr;


    var lowStr = str.toLowerCase().replace(/[^a-z]/g, "");
    for(var i=0; i < lowStr.length  /2; i++){
        if(lowStr[i] !== lowStr[lowStr.length -1 - i]) return false;
    }
    return true;

}



module.exports = palindromeFinder;