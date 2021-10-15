import React from 'react';
import logo from '../../img/logo.png'
import './Logo.css'

const Logo = () => {
    return (
        <div>
             <img className='logo-img' src={logo}alt="" />
        </div>
    );
};

export default Logo;