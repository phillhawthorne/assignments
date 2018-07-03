import React from 'react'

function Hitlist (props){
    const newList = props.info.map (hits => {
        return <div>
                <h1>{hits.name}</h1>
                <img src={hits.image} />
                      
        </div>
    })
    return(
        <div>
            {newList}
        </div>
    )

}


export default Hitlist