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
                                <a href="/dorms/swig-hall">Swig Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="/dorms/swig-hall/lobby">Lobby</a>
                                    </li>
                                    <li>    
                                        <a href="/dorms/swig-hall/dorm-room">Dorm Room</a>
                                    </li>
                                    <li>
                                        <a href="/dorms/swig-hall/floor-lounge">Floor Lounge</a>
                                    </li>
                                    <li>
                                        <a href="/dorms/swig-hall/sky-lounge">Sky Lounge</a>
                                    </li>
                                    <li>
                                        <a href="/dorms/swig-hall/basement">Basement</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <li class="menu-item-has-children">
                                    <a href="/dorms/graham-hall">Graham Hall <i class="fas fa-caret-down"></i></a>
                                    <ul class="sub-menu">
                                <li>
                                    <a href="https://my.treedis.com/tour/graham-lobby">Lobby</a>
                                </li>
                                <li>
                                    <a href="/dorms/graham-hall/lounge-1st-floor">Lounge 1st Floor</a>
                                </li>
                                <li>
                                    <a href="/dorms/graham-hall/lounge">Lounge</a>
                                </li>
                                <li>
                                    <a href="/dorms/graham-hall/movie-room">Movie Room</a>
                                </li>
                                <li>
                                    <a href="/dorms/graham-hall/dorm-room">Dorm Room</a>
                                </li>
                            </ul>
                        </li>
                            <li class="menu-item-has-children">
                                <a href="/dorms/campisi-hall">Campisi Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="/dorms/campisi-hall/lobby">Lobby</a></li>
                                    <li><a href="/dorms/campisi-hall/lounge">Lounge</a></li>
                                    <li><a href="/dorms/campisi-hall/dorm-room">Dorm Room</a></li>
                                </ul>
                            </li>

                            <li class="menu-item-has-children">
                                <a href="/dorms/finn-hall">Finn Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="/dorms/finn-hall/lobby">Lobby</a></li>
                                    <li><a href="/dorms/finn-hall/kitchen">Kitchen </a></li>
                                    <li><a href="/dorms/finn-hall/study-room">Study Room</a></li>
                                    <li><a href="/dorms/finn-hall/dorm-room">Dorm Room</a></li>
                                </ul>
                            </li>

                            <a href="#">Dunne Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                    <li>
                                        <a href="#">Kitchen</a>
                                    </li>
                                    <li>
                                        <a href="#">Study Room</a>
                                    </li>
                                    <li>
                                        <a href="#">Dorm Room</a>
                                    </li>
                                </ul> 
                            </li>
                            <li>
                            <a href="#">San Fillipo Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                    <li>
                                        <a href="#">Kitchen</a>
                                    </li>
                                    <li>
                                        <a href="#">Study Room</a>
                                    </li>
                                    <li>
                                        <a href="#">Dorm Room</a>
                                    </li>
                                </ul> 
                            </li>
                            <li>
                            <a href="#">Casa Italiana Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                    <li>
                                        <a href="#">Kitchen</a>
                                    </li>
                                    <li>
                                        <a href="#">Study Room</a>
                                    </li>
                                    <li>
                                        <a href="#">Dorm Room</a>
                                    </li>
                                </ul> 
                            </li>
                            <li>
                            <a href="#">Sobrato <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                    <li>
                                        <a href="#">Kitchen</a>
                                    </li>
                                    <li>
                                        <a href="#">Study Room</a>
                                    </li>
                                    <li>
                                        <a href="#">Dorm Room</a>
                                    </li>
                                </ul> 
                            </li>
                            <li>
                            <a href="#">McWalsh Hall <i class="fas fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Lobby</a>
                                    </li>
                                    <li>
                                        <a href="#">Lounge</a>
                                    </li>
                                    <li>
                                        <a href="#">Dorm Room</a>
                                    </li>
                                </ul> 
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