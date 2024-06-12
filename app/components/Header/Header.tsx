import Navbar from "@/app/components/Navbar/Navbar"

export default function Header() {

    return (
        <>
            <header>
                <Navbar />
                <div className="landing-hero">
                    <video className="hero-video" autoPlay loop muted>
                        <source src="/images/video-bg-1.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-content">
                        <div className="hero-content-container">
                        <h1 className="hero-content-heading">Welcome to Proficient Engineering</h1>
                        <p>At Proficient, we are your ultimate partner for comprehensive Mechanical, Electrical, and Plumbing (MEP)
                            engineering design services.</p>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}