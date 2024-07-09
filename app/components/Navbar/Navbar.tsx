export default function Navbar() {

    return (
        <>
            <nav>
                <ul className="nav-container">
                    <li className="nav-item">
                        <a href="/what-we-do">What We Do</a>
                    </li>
                    <li className="nav-item">
                        <a href="#why-proficient">Why Proficient</a>
                    </li>
                    <li className="nav-item">
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">BIM</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">
                            <img className="nav-logo" src="/images/logo.png" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/our-team">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Lunch and Learns</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact-us">Contact Us</a>
                    </li>
                </ul>
                </nav>
        </>
    )
}