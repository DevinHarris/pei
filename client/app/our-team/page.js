
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profileData from '../../data/bios.json';

export default function OurTeam() {
        
        const [locations, setLocatons] = useState(['All', 'Atlanta, GA', 'Denver, CO', 'Dallas, TX', 'Knoxville, TN', 'Alabama']);
        const [currentLocation, setCurrentLocation] = useState('All');
        const [filteredProfiles, setFilteredProfiles] = useState([]);

        const handleOnChange =  (e) => {
            setCurrentLocation(e.target.value);
        }

        useEffect(() => {

                const filteredData = currentLocation === 'All' ?  profileData : profileData.filter(profile => profile.location.toLowerCase() === currentLocation.toLowerCase());
                setFilteredProfiles(filteredData);

        }, [currentLocation])

        return (
            <div className="our-team-page">
                <div className="portfolio-page">
                    <header className="portfolio-page__header">
                        <div className="portfolio-page__header--content">
                                <h1 className="portfolio-page__header--title">Meet our Team</h1>
                                <p className="portfolio-page__header--text">Our employees love to work here and our top priority is to help you succeed, bar none. From the first phone call to finished project, we take ownership and are incredibly easy to work with, resulting in reliable work without hand holding. We work hard to make it easy for you.</p>
                                <p className="portfolio-page__header--text mt-3">With a combined 200+ years of Proficient Excellence!</p>
                        </div>
                    </header>
                 </div>

                 <main className="our-team-page__main">
                    
                    <div className="portfolio-page__project-selection pl-20 mb-20">
                    <select className="project-type" name="location" id="location" value={currentLocation} onChange={handleOnChange}>
                            {
                                locations.map((location, index) => {
                                    return (
                                        <option value={location} key={`${location}-${index}`}>{location}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                
                    <div className="our-team-page__grid">
    

                        {
                            filteredProfiles  && (

                                filteredProfiles.map(profile => (
                                    <div className="our-team-page__profile" key={profile.id}>
                                        <div className="our-team-page__img">
                                            <Link href={`/bios${profile.slug}`}>
                                                <Image src={profile.image} alt={`${profile.name}'s photo`} width={0} height={0} unoptimized/>
                                            </Link>
                                        </div>
                                        <h2 className="our-team-page__name">{`${profile.name} | ${profile.title}`}</h2>
                                    </div>
                                ))
                            )
                        }
                    </div>
                 </main>
            </div>
            
        )
}