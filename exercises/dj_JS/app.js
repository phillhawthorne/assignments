var test = document.getElementById("test");
test.addEventListener("mouseover",function() {
    test.style.color = "blue";
})


var head = document.querySelector("h1");

head.addEventListener("click",function() {
    head.style.color = 'red';
})

var head = document.querySelector("h1");

head.addEventListener("click",function() {
    this.style.color = 'green';
})