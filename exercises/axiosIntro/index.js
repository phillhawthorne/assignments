var axios = require("axios");

// http requests are: get, post, put, delete

// Get request
var url = "https://api.vschool.io/ben/todo/";
function getTodos() {
    axios.get(url)
        .then(function(response){
            console.log(response);
        // do stuff with the request as needed 
    })
        .catch(function(error){
            console.log(error);
        // handle the error as needed
    })
}

// Post request
function addTodo(todoItem){
    axios.post(url,todoItem)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(errorr){
        console.log(error);
    })

}
// addTodo({
//     title: "teach axios",
//     description: "this"
// });


function getTodoById(id){
    axios.get(url + id)
        .then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
}

getTodoById("5b27e86deec94d291400b513");

// Delete request

function deleteTodoById(id){
    axios.delete(url + id)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    })
}

deleteTodoById("5b27e86deec94d291400b513");

// Put request -- same as post request just needs an id

function editTodoById(id, editedTodo){
    axios.put(url + id, editedTodo)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    })
}

editTodoById("5ad62f1ceec94d291400b230", {completed: true, price: 15000})