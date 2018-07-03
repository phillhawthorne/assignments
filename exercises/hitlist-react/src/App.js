import React, {Component} from 'react';
import Hitlist from './Hitlist';
import axios from 'axios';
// import Styles from './Styles.css';


class App extends Component {
    constructor(){
        super();

        this.state = {
            killList: []
        }
    }
    componentDidMount(){
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response =>{
            this.setState({killList:response.data})
            console.log(response.data)
        })
    }


    render(){
        return(
            <div>
                <Hitlist info =  {this.state.killList}/>
            </div>
        )
        
    }
}


export default App