import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super();
        this.state = {
            color: 'orange',
            width: '200px'
        }
    }

    componentDidMount(){
        window.addEventListener('keypress',(e) =>{
            if(e.key === 'a'){
                this.setState({
                    color: 'dodgerblue'
                })
            } else if(e.key ==='b'){
                this.setState(prevState => ({
                    width: prevState.width === '200px' ? '100px' : '150px'
                }))
            }
        })
    }

    componentWillUnmount(){
        window.removeEventListener('keypress')
    }

    render (){
        return (
            <div style={{
                backgroundColor: this.state.color,
                color: 'white',
                width: this.state.width}} >
                Hello
            </div>
        )
    }
}

export default App