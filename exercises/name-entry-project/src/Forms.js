import React, {Component} from 'react'

export default class Forms extends Component {
    constructor (){
        super()

        this.state = {
            input: '',
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
}
