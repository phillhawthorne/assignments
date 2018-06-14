var rs = require ("readline-sync");
var name = rs.question("Hey! What's your name buddy?");

var win = false;
var lose =false;

var player = function(){
    name = "";
    hp = 100;
    items = [];
}

var Enemy = function(name, hp, attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

function lookForEnemy(){

}

while(true){
    var isWalking = rs.question("Press 'W' to start walking");
    // look for enemy
    // if true generate enemy
    // choose run or fight
    // is run die and lose
    // if fight start fighting deal damage
    // check player and enemy hp to see who wins
    

}