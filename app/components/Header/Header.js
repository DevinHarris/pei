'use client'

import { useRef, useEffect, useState } from 'react';
import Navbar from "@/app/components/Navbar/Navbar"

export default function Header() {

    const [vidPlayRate, setVidPlayRate] = useState(0.8);
    const videoRef = useRef();


    useEffect(() => {

        videoRef.current.playbackRate = vidPlayRate;

    }, [vidPlayRate])

    return (
        <>
            <header>
                <Navbar />
                <div className="landing-hero">
                    <video ref={videoRef} className="hero-video" autoPlay loop muted>
                        <source src="/images/bg-vid-3.mov" type="video/mp4" />
                    </video>
                    <div className="hero-content">
                        <div className="hero-content-container">
                        <h1 className="hero-content-heading">Welcome to Proficient Engineering</h1>
                        <p>At Proficient, we are your ultimate partner for comprehensive Mechanical, Electrical, and Plumbing (MEP)
                            engineering design, low voltage design, and BIM/VDC services.</p>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}