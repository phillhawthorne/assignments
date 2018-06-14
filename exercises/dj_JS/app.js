var head = document.getElementById("Head");



var head = document.querySelector("h1");

head.addEventListener("mouseover",function() {
    test.style.color = "blue";
})

head.addEventListener("click",function() {
    head.style.color = 'red';
})

var head = document.querySelector("h1");

head.addEventListener("click",function() {
    this.style.color = 'green';
})