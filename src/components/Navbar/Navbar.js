import './Navbar.css';
import React from 'react';

function Navbar() {
    return(
        <header>
        <div class="container">
            <nav>
                <div class="menu-icons">
                   <i class="fas fa-bars"></i>
                   <i class="fas fa-times"></i>
                </div>
                <a href="index.html" class="logo">SCU Dorm Tours</a>
                <ul class="nav-list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Dorms <i class="fas fa-caret-down"></i></a>
                        <ul class="sub-menu">
                            <li>
                                <a href="#">Swig Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Bedroom</a>
                                    </li>
                                    <li>
                                        <a href="#">Lounge</a>
                                    </li>
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                            <a href="#">Graham Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Bedroom</a>
                                    </li>
                                    <li>
                                        <a href="#">Lounge</a>
                                    </li>
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                </ul> 
                            </li>
                            <li>
                            <a href="#">Finn Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Bedroom</a>
                                    </li>
                                    <li>
                                        <a href="#">Lounge</a>
                                    </li>
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                </ul> 
                            </li>
                            <li>
                            <a href="#">McWalsh Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Bedroom</a>
                                    </li>
                                    <li>
                                        <a href="#">Lounge</a>
                                    </li>
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                </ul> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li class="move-right btn">
                        <a href="#">Learn More</a>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Navbar;