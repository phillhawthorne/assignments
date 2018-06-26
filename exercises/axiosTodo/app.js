// import Axios from "axios";

// get all element you need and store them as variables

var section = document.querySelector("section");
var form = document.querySelector("form");

var url = "https://api.vschool.io/ben/todo";

var displayTodo = (function(todo){
    var wrapper = document.createElement("div");
       var h3 = document.createElement("h3");
       
       h3.innerHTML = todo.title;
       // make description
       var descP = document.createElement("p");
       descP.innerHTML =todo.description;
       // make price
       var priceP = document.createElement("p");
       priceP.innerHTML =todo.price;
       // make checkbox
       var label = document.createElement("label");
       label.innerHTML = "Completed";

       var input = document.createElement("input");
       input.type ="checkbox";
       label.appendChild(input)
       // append all the things to the wrapper
       wrapper.appendChild(h3);
       wrapper.appendChild(descP);
       wrapper.appendChild(priceP);
       wrapper.appendChild(label);

       section.appendChild(wrapper);
   })
  

axios.get(url)
    .then(function(response){
        // convert data into html elements 
        var todos = response.data;
        todos.forEach(displayTodo)
    })
    .catch(function(error){
        console.log(error);
    });

    form.addEventListener("submit", function(e){
        // store input values in todo object
        // post the todo using axios
        // 
    })
