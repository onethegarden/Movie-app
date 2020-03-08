import React from 'react';
import {Link} from 'react-router-dom';

function Naviation(){
    //link has to be inside router
    return (
    <div className="navigation">
        <Link className="nav" to="/">Home</Link>
        <span> | </span>
        <Link className="nav" to="/about">About</Link>
    </div>
    );
}

export default Naviation;