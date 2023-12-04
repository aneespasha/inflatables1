import React from 'react';
import Pictures from '../Pic';
import { Link } from 'react-router-dom'
import './Header.css'
    function Header() {
       return (
<header>
    <div className='headerRight'>
    <img src={Pictures.logo} className='logo' alt='' />
    </div>
    
    <div className='headerRight'>
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">AboutUs</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
    </ul>
    </nav>
    </div>
    
</header>
);
}

export default Header;
