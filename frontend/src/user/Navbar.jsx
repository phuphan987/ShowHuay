import React, { useState, useEffect } from 'react';
import logo from '../assets/icon/logo.png';
import search from '../assets/icon/search.png';
import account from '../assets/account.png';
import shoppingCart from '../assets/shopping-cart.png';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
            const storedUsername = localStorage.getItem('username');
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        window.location.href = "/";
        localStorage.clear();
    };

    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#F44C0C' }}>
            <div className="container" style={{ maxWidth: '1170px' }}>
                <Link className="navbar-brand d-flex align-items-center" style={{ marginLeft: '27px' }} to='/'>
                    <img src={logo} alt="Logo" height="50" />
                    <span className="ms-1 mb-1 nav_logo-span">ShowHuay</span>
                </Link>

                <button
                    className="navbar-toggler toggler-button"
                    type="button"
                    onClick={handleToggle}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-between align-items-center ${isToggled ? 'show' : ''}`} id="navbarNav">
                    <div className="d-flex flex-grow-1 justify-content-center align-items-center mt-1 search-bar">
                        <div className="input-group">
                            <input
                                className="form-control py-2 border-end-0 border search-box"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                                style={{height:'42px'}}
                            />
                            <button className="btn btn-search" type="button">
                                <img src={search} alt="Search" height="20" className="img-search" />
                            </button>
                        </div>
                    </div>

                    <ul className="navbar-nav mt-2" style={{ marginRight: '27px' }}>
                        {isLoggedIn ? (
                            <>
                                {isToggled ? (
                                    <>
                                        <li className="nav-item" style={{ marginRight: '15px' }}>
                                            <Link className="nav-link" to='/Cart'>
                                                <span className="nav-link cart-profile">Cart</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle cart-profile" href="/" role="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>Profile</span>
                                            </span>
                                            <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                                                <li><Link className="dropdown-item" to="/Profile">My Account</Link></li>
                                                <li><Link className="dropdown-item" to="/Purchases">My Purchases</Link></li>
                                                <li><Link className="dropdown-item" to="/Shop">My Shop</Link></li>
                                                <li><Link className="dropdown-item" to="/Chat">Chats</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="/Login" onClick={handleLogout}>Logout</Link></li>
                                            </ul>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item" style={{ marginRight: '15px' }}>
                                            <Link className="nav-link" to='/Cart'>
                                                <img src={shoppingCart} alt="shopping-cart" height="25" />
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/" role="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={account} alt="account" height="25" style={{ marginRight: '5px', marginBottom: '1px' }} />
                                                <span>{username}</span>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                                                <li><Link className="dropdown-item" to="/Profile">My Account</Link></li>
                                                <li><Link className="dropdown-item" to="/Purchases">My Purchases</Link></li>
                                                <li><Link className="dropdown-item" to="/Shop">My Shop</Link></li>
                                                <li><Link className="dropdown-item" to="/Chat">Chats</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="/Login" onClick={handleLogout}>Logout</Link></li>
                                            </ul>
                                        </li>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <li className="nav-item nav-item2">
                                    <Link className="nav-link register-login" to='/Register'>Register</Link>
                                </li>
                                {!isToggled && (
                                    <>
                                        <li className="nav-item">
                                            <span className="nav-link register-login-sep">|</span>
                                        </li>
                                    </>
                                )}
                                <li className="nav-item">
                                    <Link className="nav-link register-login" to='/LogIn'>Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
