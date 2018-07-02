const  genMultTable = () =>{
    // start w/ empty array
    const output = [];
    for(let i = 1; i < 6;i++){
        const row = [];
        for(let j = 1; j < 6; j++){
            row.push(j * i);
        }
        output.push(row);
    }
    return output;
    // repeat 5 times
    // push 5 nums into  array
    // add to parent array
}  





module.exports = genMultTable;