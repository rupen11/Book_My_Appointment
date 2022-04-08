import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav id="navbar" >
            <div className="navbarLeft">
                <img src="images/logo.png" alt="logo" className="logo" />
            </div>
            <div className="navbarRight">
                <div className="menubar">
                    <div className="hamburger-menu">
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li><Link to="/" className="nav__link">Home</Link></li>
                        <li><Link to="/bookanappointment" className="nav__link">Book An Appointment</Link></li>
                        <li><Link to="/appointments" className="nav__link">My Appointment</Link></li>
                        <li><Link to="/login" className="nav__link">Login</Link></li>
                        <li><Link to="/signup" className="nav__link">Signup</Link></li>
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Header