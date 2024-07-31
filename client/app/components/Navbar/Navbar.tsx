'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleOpen = () => setIsNavOpen(prevState => !prevState);
    return (
        <>
            <nav>
                <ul className={`nav-container ${isNavOpen ? 'navbar-responsive' : ''}`}>
                    <li className="nav-item">
                        <Link href="/what-we-do">What We Do</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#why-proficient">Why Proficient</a>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/bim">BIM</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/our-team">Our Team</Link>
                    </li>
                    <li className="nav-logo-container">
                        <Link href="/">
                            <img className="nav-logo" src="/images/logo.png" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/lunch-learn">Lunch and Learns</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#">Blogs</a>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/careers">Careers</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact-us">Contact Us</Link>
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