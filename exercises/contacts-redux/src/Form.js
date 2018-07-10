import React, {Component} from 'react';

import {connect} from 'react-redux';
import {addContact} from './redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name,value} =e.target;
        this.setState({
                [name]: value    
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addContact(this.state)
        // Dispatch the add action creator
    }
    render(){
        const {name,phone,email} = this.state;
        return(
            <form onSubmit= {this.handleSubmit} >
                <input value = {name}  onChange={this.handleChange} name = "name"type="text" placeholder="Enter Name" />
                <input value = {phone} onChange={this.handleChange} name = "phone" type="text" placeholder="Enter Phone" />
                <input value = {email} onChange={this.handleChange} name = "email" type="Email" placeholder="Enter Email" />
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null,{addContact}) (Form);