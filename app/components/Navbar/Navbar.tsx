'use client'

import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleOpen = () => setIsNavOpen(prevState => !prevState);
    return (
        <>
            <nav>
                <ul className={`nav-container ${isNavOpen ? 'navbar-responsive' : ''}`}>
                    <li className="nav-item">
                        <a href="/what-we-do">What We Do</a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#why-proficient">Why Proficient</a>
                    </li> */}
                    <li className="nav-item">
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="/bim">BIM</a>
                    </li>
                    <li className="nav-item">
                        <a href="/our-team">Our Team</a>
                    </li>
                    <li className="nav-logo-container">
                        <a href="/">
                            <img className="nav-logo" src="/images/logo.png" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/lunch-learn">Lunch and Learns</a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#">Blogs</a>
                    </li> */}
                    <li className="nav-item">
                        <a href="/careers">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact-us">Contact Us</a>
                    </li>
                    
                </ul>
                        <button className='responsive-nav-btn' onClick={toggleOpen}>
                            {
                                !isNavOpen ? <AiOutlineMenu  /> : <AiOutlineClose />
                            }
                        </button>
                   
            </nav>
        </>
    )
}