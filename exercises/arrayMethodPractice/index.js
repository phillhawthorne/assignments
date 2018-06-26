function sortedDogOwners(arr) {
    // sort through the array by age
    var sortedByAge = arr.sort(function(person1,person2){
        return person1.age - person2.age;
    });
    // filter sorted array for dogs
    return sortedByAge.filter(function(person){
        return person.pets.includes("dog"); 
    })
}

function arbitraryPractice(arr){
    // check for persons age
    var filteredByAge = arr.filter(function(person){
        return person.age > 20;
    });
    // Reduce everything into an array ???
    return filteredByAge.reduce(function(accumulator, person){
        // check for dogs  nicknames
        var hasNickNames = person.pet.every(function(pet){
            return pet.nickNames.length;
        });
        var hasADog = person.pets.some(function(pet){
            return pet.type === "dog";
        });
        if(hasNickNames && hasADog){
            // get names and convert them to li's
            var liTags = person.pets.map(function(pet){
                return "<li>" + pet.names + "<li>";
            });
            return accumulator.concat(liTags);
        } else {
            return accumulator;
        }
    },[])
}

module.exports = {
    sortedDogOwners: sortedDogOwners,
    arbitraryPractice: arbitraryPractice
};