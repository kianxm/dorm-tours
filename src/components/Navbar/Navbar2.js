import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css'


const Navbar2 = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        SCU Dorm Tours
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link to='' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                            {/* <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Dorms
                            </Link> */}
                            <a href="#" className='nav-links'>
                                Dorms <i className="fas fa-caret-down" />
                            </a>
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
                            </ul>
                        </li>
                        <li className='nav-item'>
                        <Link to='/learnmore' className='nav-links' onClick={closeMobileMenu}>
                            Learn More
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar2