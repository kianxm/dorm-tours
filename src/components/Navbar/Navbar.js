import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="menu-icons">
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="logo">
                        <Link to="/" className="logo-top">SCU Virtual Housing Tours</Link>
                    </div>
                    <ul class="nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="#">Dorms <i class="fas fa-caret-down"></i></Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/dorms/campisi-hall">Campisi Hall </Link>
                                </li>
                                <li>
                                    <Link to="#">Casa Italiana Hall</Link>
                                </li>
                                <li>
                                    <Link to="#">Dunne Hall</Link>
                                </li>
                                <li>
                                    <Link to="/dorms/finn-hall">Finn Hall </Link>
                                </li>
                                <li>
                                   <Link to="/dorms/graham-hall">Graham Hall </Link>
                                </li>
                                <li>
                                    <Link to="#">McWalsh Hall</Link>
                                </li>
                                <li>
                                    <Link to="#">San Fillipo Hall</Link>
                                </li>
                                <li>
                                    <Link to="#">Sobrato Hall</Link>
                                </li>
                                <li>
                                    <Link to="/dorms/swig-hall">Swig Hall </Link>
                                </li>
                            </ul>
                        </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/LearnMore">Learn More</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Navbar;
