import React, {Component} from 'react';
import Display from './Display'

export default class Forms extends Component{
    constructor(){
        super()

        this.state = {
            input: '',
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e =>{
        e.preventDefault()
        const value = e.target.value
        this.setState({input: value})
        
    }
    handleSubmit = e =>{
        e.preventDefault()
        this.setState(prevState =>  {
            return{
            names: [...prevState.names,this.state.input],
            input: ''
            }
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                placeholder ='Enter Name'
                value={this.state.input}
                onChange ={this.handleChange}
                name='input' />
            <button>Submit</button>
            </form>
            <Display 
            input={this.state.input}
            names={this.state.names} />
        </div>
        )
    }
}