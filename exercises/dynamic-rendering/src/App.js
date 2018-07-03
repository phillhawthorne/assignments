import React from 'react';

const App = props => {
    let chosenPhrase;
    switch (props.phrase){
        case 'greeting':
         chosenPhrase = <h1>Hello</h1>
            break
        case 'bye':
        chosenPhrase = <h1>Bye</h1>
            break
        default: 
        return null
    }

    return (
        <div>
        { chosenPhrase }
        </div>
    )

}

export default App

