var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function song(){
   var newsong = lyrics.join(" ");
    console.log(newsong);
}              

song();

function reverseLyrics(){
    var songReverse = lyrics.reverse (" ");
        console.log(songReverse);
}

reverseLyrics();


var reverseEveryOther = function(arr){
    var copy = arr.slice();
    for(var i = 0; i < copy.length; i += 2){
        var first = copy[i - 1];
        var second = copy[i];
        copy[i] = first;
        copy[i - 1] = second;
         }
         return copy.join (" ");
}
console.log(reverseEveryOther(lyrics));

