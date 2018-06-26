const matchWords = str => {
   const noSpecial = str.replace(/[^a-z\s]/gi,"");
   const splitted = noSpecial.split("");
   const sorter = {};
   const output = [];
   splitted.forEach(word => {
       if(sorter.hasOwnProperty(word) && !output.includes(word)){
           output.push(word);
       }else {
           sorter[word] = true;
       }
       return output;
   });
  
}
matchWords("tes, teSt, test")

module.exports = matchWords;


 // get rid of special chars and caps
    // split string
    // loop through array
    // check object to see if it has a property with that string name
    // if so add to duplicates array
    // if not, set string as a key on the object
    // return duplicate array
