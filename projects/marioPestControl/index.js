function calculate (){
    var input1 = document.getElementById('Goombas').value;
    var input2 = document.getElementById('Bob-ombs').value;
    var input3 = document.getElementById('Cheep-Cheeps').value;

    var total = parseFloat(input1)+parseFloat(input2)+parseFloat(input3);
    
    if(!isNaN(total)){
        document.getElementById('answer').innerHTML=" Total Baddies Caught " + total;
    }
}


