import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/Logo/eyelogo.png'

const Header = () => {
    return (

        <div className='header' sticky='top'>
            <div className='header-logo'>

                <Link to='/home'>
                    <img src={logo} alt="" />
                    <span className='fs-4 fw-bold '> DEMO EYE CARE </span>
                </Link>

            </div>

            <div className='link-alignment'>
                <Link to='/home'>HOME</Link>
                <Link to='/about' >ABOUT</  Link>
                <Link to='/services' >SERVICES</Link>
                <Link to='/consultants'>CONSULTANTS</Link>
                <Link to='/login'> LOGIN</Link>
            </div>

        </div>
    );
};

export default Header;