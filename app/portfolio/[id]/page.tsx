"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import projects from '../../../data/projects.json';

interface Project {
    id: string,
    name: string,
    project_tagline: string,
    project_description: string[],
    year_completed: string,
    location: string,
    client_name: string,
    images: string[],
    tag: string,
    dimensions?: {
        sqft?: number
    }
}

export default function ProjectPage() {

    const { id } = useParams<{ id: string }>();
    const [currentProject, setCurrentProject] =  useState<Project | undefined>();


    useEffect(() => {
        const projectData = projects.find(project => project.id === `${id}`);


        setCurrentProject(projectData);

    }, [currentProject]);

    return (
        <div className="project-page">
            <header className="project-page__header">
                <div className="project-page__header--hero">
                    <img className="project-page__header--img" src={currentProject?.images[0]} alt="project-image" />
                    <div className="project-page__header--content">
                        <h1 className="project-title">{currentProject?.name} | {currentProject?.location}</h1>
                    </div>
                </div>
            </header>
            <main className="project-page__main">
                <section className={`project-page__callout ${!currentProject?.project_tagline ? 'project-page__callout-no-text' : ''}`}>
                    <h2 className="project-page__callout-text">{currentProject?.project_tagline}</h2>
                </section>
                <section className="project-page__meta">
                    <div className="project-page__meta-grid">
                        <div className="project-page__meta-grid-col project-page__meta-grid-about">
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Size</b>
                                <span className="project-page__meta-value">{currentProject?.dimensions?.sqft}</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Year</b>
                                <span className="project-page__meta-value">{currentProject?.year_completed}</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Location</b>
                                <span className="project-page__meta-value">{currentProject?.location}</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Client</b>
                                <span className="project-page__meta-value">{currentProject?.client_name}</span>
                            </div>
                        </div>
                        <div className="project-page__meta-grid-col project-page__meta-grid-text">
                            {
                                currentProject?.project_description.map((description, index) => <p className="project-page__meta-text" key={`${currentProject.name}'s desc ${index}`}>{description}</p>)
                            }
                                
                        </div>
                       
                    </div>
                </section>

                <section className="project-page__image-grid">

                            {
                                currentProject?.images.map((image, index) => (
                                    <div className="project-page__image" key={`${currentProject.name}'s photo ${index}`}>
                                        <img src={image} alt="project image" />
                                    </div>
                                ))
                            }
                </section>
                <section className="project-page__callout--center">
                    <p>Along with thousands of other completed projects!</p>
                    <a href="/portfolio" className='rounded-btn-cta'>View more here</a>
                </section>
            </main>
        </div>
    )
}