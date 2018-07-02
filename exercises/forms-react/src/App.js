import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super()

        this.state = {
            name:'',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    handleSubmit = e =>{
        e.preventDefault()
        alert(`Hello my name is ${this.state.name}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text'placeholder='name' value={this.state.name} name='name' onChange={this.handleChange}  />
                <input type='number' placeholder='age' value={this.state.age} name='age' onChange={this.handleChange}  />
                <button>Submit</button>
            </form>
        )
    }
}

export default App;