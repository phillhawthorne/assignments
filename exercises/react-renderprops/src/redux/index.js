import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'


// Action Creators
export const getTodos = () =>{
    return dispatch =>{
        axios.get('https://api.vschool.io/phillh/todo/').then(response =>{
            dispatch({
                type:'GET_TODOS',
                todos: response.data
            })
        })
       .catch(err=>{
           console.log(err)
       })
    }
}

export const addTodo = newTodo => {
    return dispatch => {
        axios.post('https://api.vschool.io/phillh/todo/', newTodo)
        .then(response => {
            dispatch({
                type:'ADD_TODO',
                newTodo: response.data
            })
        }).catch(err=>{
            console.log(err)
        })
    }
}

const initialState = {
    todos: []
}


// Reducer

const reducer = (state =initialState , action) => {
    switch (action.type) {
        case 'GET_TODOS':
        return {
            todos: action.todos
        }
        case 'ADD_TODO':
        return{
            todos: [...state.todos, action.newTodo]
        }
        default:
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))