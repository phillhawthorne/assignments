import React from 'react'
import {connect} from 'react-redux'
import {getDogs} from './redux'

function Searches(props) {
    return (
        <div>
            <h1>Pictures of Dogs</h1>
            <button onClick = {props.getDogs}>
            Go Fetch!
            </button>
        </div>
    )
}

export default connect(null, {getDogs}(Searches))