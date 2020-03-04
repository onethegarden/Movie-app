import React from 'react';
import {Link} from 'react-router-dom';

function Naviation(){
    //link has to be inside router
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
    </div>
    );
}

export default Naviation;