import React from 'react';
import {Link} from 'react-router-dom';
import "./Navigation.css";

function Naviation(){
    //link has to be inside router
    return (
    <div class="navigation">
        <Link class="nav" to="/">Home</Link>
        <span> | </span>
        <Link class="nav" to="/about">About</Link>
    </div>
    );
}

export default Naviation;