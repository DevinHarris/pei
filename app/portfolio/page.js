'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProjectThumbnail from "../components/ProjectThumbnail/ProjectThumbnail";

import projectData from '../../data/projects.json';

export default function PortfolioPage() {

    // used to filter different projects 

    const [projectTypes, setProjectTypes] = useState(['Food and Beverages', 'Community', 'Higher Education', 'Historic', 'Hospitality', 
                                'Industrial', 'K-12 Education', 'Medical', 'Mixed Use', 'Multi-Family', 'Office', 'Retail', 'Senior Living'])

    const [currentProjectType, setCurrentProjectType] = useState('Food and Beverages');

    const [projects, setProjects] = useState([]);

    const handleOnChange = (e) => {

        setCurrentProjectType(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        setProjects(projectData);
    }, [currentProjectType, projects])

    
    return (
        <div className="portfolio-page">
            <header className="portfolio-page__header">
               <div className="portfolio-page__header--content">
                    <h1 className="portfolio-page__header--title">Our Portfolio</h1>
                    <p className="portfolio-page__header--text">No matter how complex or simple, we engineer our projects precisely and don’t tolerate corner-cutting. Between our vast project expertise, in-house tools and fully licensed staff, we produce accurate, architecturally efficient designs. Besides, we’re engineers. Precision should be our middle name. From the first phone call to finished project, we take ownership and are incredibly easy to work with, resulting in reliable work without hand holding. We work hard to make it easy for you.</p>
               </div>
            </header>
            <section className="portfolio-page__projects">
                <div className="portfolio-page__project-selection">
                    <select className="project-type" name="project-type" id="project-type" onChange={handleOnChange}>
                        {
                            projectTypes.map(projectType => {
                                return (
                                    <option value={projectType} key={projectType}>{projectType}</option>
                                )
                            })
                        }
                    </select>
                    <h3 className='current-project-type'>{currentProjectType}</h3>
                </div>
                <div className='portfolio-page__projects-grid'>
                    {
                        projects.filter(project => {
                            return project.projectType === currentProjectType;
                        }).map(project => {
                           return <ProjectThumbnail key={project.name} {...project} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}