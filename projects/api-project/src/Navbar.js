import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) =>{
    return(
        <div className = 'nav'>
            <Link to = '/'>Home</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/Searches'>Searches</Link>
        </div>
    )
}



export default Navbar