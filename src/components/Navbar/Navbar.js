import './Navbar.css';
import React from 'react';

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
                        <div className="logo-top">SCU Virtual Housing Tours</div>
                    </div>
                    <ul class="nav-list">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#">Dorms <i class="fas fa-caret-down"></i></a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/dorms/swig-hall">Swig Hall </a>
                                </li>
                                <li>
                                   <a href="/dorms/graham-hall">Graham Hall </a>
                                </li>
                                <li>
                                    <a href="/dorms/campisi-hall">Campisi Hall </a>
                                </li>
                                <li>
                                    <a href="/dorms/finn-hall">Finn Hall </a>
                                </li>
                                <li>
                                    <a href="#">Dunne Hall</a>
                                </li>
                                <li>
                                    <a href="#">San Fillipo Hall</a>
                                </li>
                                <li>
                                    <a href="#">Casa Italiana Hall</a>
                                </li>
                            </ul>
                        </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Learn More</a>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Navbar;


