import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'



const initialState = {
    dogs: null,
    loading: false
}


const reducer = (prevState = initialState, action) => {
    switch(action.type){
        case 'LOADING':
        return{
            ...prevState,
            loading: true
        }
        case 'GET_DOG':
        return{
            dogs: action.dogs,
            loading: false 
        }
        default:
        return prevState;
    }
}
export const getDogs = () => {
    return dispatch => {
        dispatch({type: 'LOADING'});
        axios.get('https://dog.ceo/api/breed/hound/images')
            .then(response => {
                dispatch({
                    type: 'GET_DOG',
                    dogs: response.data.value
                })
            })
    }
}



const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;