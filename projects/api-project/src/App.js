import React, {Component} from 'react';
import About from './About.js';
import Home from './Home.js';
import NavBar from './Navbar.js';
import Searches from './Searches.js';
import {Switch,Route} from 'react-router-dom';



class App extends Component {


    render() {
    return (
        <div>
        <NavBar />    
        <Switch>
                <Route exact path = '/' component= {Home}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/searches' component = {Searches}/>
            </Switch>
        </div>
    )
}
}


export default App
