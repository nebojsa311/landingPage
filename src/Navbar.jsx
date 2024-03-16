import React from 'react';
import './Navbar.css';
import logo from './assets/converseLogo.png';

function Navbar() {
    return(
        <nav>
            <a href="#"><img src={logo} alt="Picture of  converse logo" className="logoInNav"/></a>
            <ul>
                <a href=""><li>Home</li></a>
                <a href=""><li>About Us</li></a>
                <a href=""><li>Products</li></a>
                <a href=""><li>Contact Us</li></a>
            </ul>
        </nav>
    )
}

export default Navbar