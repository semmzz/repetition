import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link to={'/about'} className='nav-item'>About</Link>
            <Link to={'/posts'} className='nav-item'>Posts</Link>
        </div>
    );
};

export default NavBar;