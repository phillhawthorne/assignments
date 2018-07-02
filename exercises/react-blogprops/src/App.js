import React, {Component} from 'react'



class App extends Component {
    constructor() {
     super()
     this.state = {counter: 0}
     this.up = this.up.bind(this);
     this.down =this.down.bind(this);
     
    }
    up(){
      
      this.setState((prevState)=>({counter: prevState.counter +1}))
    }
    down(){
        this.setState((prevState)=> ({counter: prevState.counter -1}))
    }
    render(){
        console.log(this.props)
        return (
            <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.up}>UP</button>
            <button onClick={this.down}>DOWN</button>
            </div>
        )
    }
    
  }





export default App;