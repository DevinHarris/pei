"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import data from '../../../data/bios.json';
import projectData from '../../../data/projects.json';

interface Profile {
    id: string,
    slug: string,
    name: string,
    tagline: string,
    title: string,
    tasks: string[],
    year_started: string,
    location: string,
    hobbies: string[],
    image: string,
    pe_registrations?: string[],
    memberships?: string[],
    education?: string[],
    bio: string[],
    featured_projects?: string[]
}

interface FeaturedProject {
    id: string,
    name: string,
    images: string[]
}

/* clean up endings lastIndex substring "/" */

export default function BioPage() {

    const [currentProfile, setCurrentProfile] = useState<Profile | undefined>();
    const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[] | undefined>();
    const { id } = useParams<{ id: string }>();


    useEffect(() => {

        const profileData = data.find(profile => profile.slug === `/${id}`);
        const projects = currentProfile?.featured_projects?.map(id => {
            return projectData.filter(project => project.id === id);
        })

        // setFeaturedProjects(projects);


        setCurrentProfile(profileData);
    }, [currentProfile, featuredProjects])


    return (
        <>
            <div className="project-page bio-page">
            <header className="project-page__header">
                <div className="project-page__header--hero">
                    <img className="project-page__header--img" src={currentProfile?.image} alt="project-image" />
                    <div className="project-page__header--content">
                        <h1 className="project-title">{currentProfile?.name} | {currentProfile?.title}</h1>
                    </div>
                </div>
            </header>
            <main className="project-page__main">
                <section className="bio-page__callout ">
                    <h2 className="project-page__callout-text">{currentProfile?.tagline}</h2>
                </section>
                <section className="project-page__meta">
                    <div className="project-page__meta-grid">
                        <div className="project-page__meta-grid-col project-page__meta-grid-about">
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">What I Do</b>

                                <span className="project-page__meta-value">{
                                                currentProfile?.tasks?.map((task, index) => task).join(', ')
                                            }</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Year Started</b>
                                <span className="project-page__meta-value">{currentProfile?.year_started}</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">My Location</b>
                                <span className="project-page__meta-value">{currentProfile?.location}</span>
                            </div>
                            
                            {
                                currentProfile?.education?.length !== 0 ? (
                                    <div className="project-page__meta-desc">
                                        <b className="project-page__meta-title">My Education</b>
                        
                            {
                                            

                                            <span className="project-page__meta-value">{
                                                currentProfile?.education?.map((degree, index) => degree).join(' | ')
                                            }</span>
                                        }
                                    </div>
                                ) : null
                            }

{
                             currentProfile?.memberships?.length !== 0 ? (
                                    <div className="project-page__meta-desc">
                                        <b className="project-page__meta-title">Memberships</b>
                                        {
                                            

                                            <span className="project-page__meta-value">{
                                                currentProfile?.memberships?.map((membership, index) => membership).join(', ')
                                            }</span>
                                        }
                                    </div>
                                ) : null
                            }

{
                                currentProfile?.pe_registrations?.length !== 0 ? (
                                    <div className="project-page__meta-desc">
                                        <b className="project-page__meta-title">PE Registrations</b>
                                        <span className="project-page__meta-value">{
                                                currentProfile?.pe_registrations?.map((registration, index) => registration).join(', ')
                                            }</span>
                                    </div>
                                ) : null
                            }
                        </div>
                        <div className="project-page__meta-grid-col project-page__meta-grid-text">
                        <h3 className="bio-page__about-heading">About {currentProfile?.name.split(" ")[0]}</h3>
                                
                                {
                                    currentProfile?.bio.length !== 0 ? (
                                        currentProfile?.bio.map(paragraph => <p className="project-page__meta-text">{paragraph}</p> )
                                    ) : 
                                    <h2 className='font-light'>{currentProfile.name.split(" ")[0]}'s bio is currently empty.</h2>
                                }
                               
                                
                        </div>
                    </div>
                </section>
                {/* <section className="bio-page__projects-container">
                    <h3 className="bio-page__projects-heading">Featured Projects and Accomplishments</h3>
                    {
                        currentProfile?.featured_projects?.length !== 0 ? (
                            <div className="bio-page__projects-grid" style={{ gridTemplateColumns: `repeat(${currentProfile?.featured_projects.length}, 1fr)` }}>
                                {
                                    currentProfile?.featured_projects?.map(project => (
                                        <div className="bio-page__project">
                                            <div className="bio-page__project-img">
                                                 <a href="/portfolio/3242">
                                                    <img src={project.thumbnail} alt="" />
                                                </a>
                                            </div>
                                            <h3>{project.name}</h3>
                                        </div>
                                    ))
                                }
                            </div>
                            ) : (
                                <h2 className="mt-5">Currently {currentProfile?.name.split(" ")[0]} doesn't have any featured projects to display.</h2>
                            )
                    }
                </section> */}
                </main>
            </div>
        </>
    )
}