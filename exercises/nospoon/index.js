var phone = {
    color: "white",
    price: 800,
    isAndroid: false,
    write: function() {
        console.log(" This is a " + this.color + " phone that costs $ " + this.price)
    }
}

var cup = {
    color: "white",
    isHot: true,
    contents: "coffee",
    write: function() {
        console.log(" This is a " + this.color + " cup of " + this.contents)
    }
}

var person = {
    name: "Chazz",
    age: 29,
    gender: "male",
    write: function() {
        console.log(" This is " + this.name + " he is " + this.age )
    }   
}

var fruit = {
    type: "orange",
    isFresh: false,
    color: "brown",
    write: function() {
        console.log(" The " + this.type + " is " + this.color)
    }
}

var headhpones = {
    color: "black",
    price: 15,
    isWireless: false,
    write: function() {
        console.log(" My headphones are " + this.color + " and costs $ " + this.price)
    }
}

var shoe = {
    price: 200,
    color: "black",
    isAdidas: true,
    write: function() {
        console.log(" My shoes are " + this.color + " And costs $ " + this.price)
    }
}

var pillow = {
    color: "gray",
    hasFeathers: false,
    isHard: false,
    write: function() {
        console.log(" This pillow is " + this.color)
    }
}

var light = {
    color: "blue and red",
    isBright: true,
    isCop: true,
    write: function() {
        console.log(" The lights on the car are " + this.color)
    }
}

var table = {
    type: "wood",
    color: "brown",
    isSturdy: true,
    write: function() {
        console.log(" The table is made of " + this.type)
    }
}

var window = {
    type: "Glass",
    isSturdy: false,
    isTransparent: true,
    write: function() {
        console.log( this.type + " Breaks really easy " )
    }
}