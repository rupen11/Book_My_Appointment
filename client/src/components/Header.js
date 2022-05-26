import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../services/actions/index";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHumberger = () => document.querySelector('#navbar').classList.toggle('active');

    const currUserData = useSelector((state) => state.userData);
    const currUserAuth = useSelector((state) => state.userAuth);

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logOut(false));
        navigate("/");
    }

    return (
        <nav id="navbar" >
            <div className="navbarLeft">
                <img src="images/logo.png" alt="logo" className="logo" />
            </div>
            <div className="navbarRight">
                <div className="menubar">
                    <div className="hamburger-menu" onClick={handleHumberger}>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li><Link to="/" className="nav__link">Home</Link></li>
                        <li><Link to="/bookanappointment" className="nav__link">Book An Appointment</Link></li>
                        <li><Link to="/appointments" className="nav__link">My Appointment</Link></li>
                        {
                            currUserAuth ? <li><Link to="/" className="nav__link" onClick={handleLogout}>Logout</Link></li> : <>
                                <li><Link to="/login" className="nav__link">Login</Link></li>
                                <li><Link to="/signup" className="nav__link">Signup</Link></li>
                            </>
                        }
                        <li><Link to="/appointments" className="nav__link">{currUserAuth && currUserData.name}</Link></li>
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Header