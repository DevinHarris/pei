'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import ProjectThumbnail from "../components/ProjectThumbnail/ProjectThumbnail";

import projectData from '../../data/projects.json';

export default function PortfolioPage() {

    const router = useRouter();
    const search = useSearchParams();

    // used to filter different projects 

    const [projectTags, setProjectTags] = useState(['Food and Beverage', 'Community', 'Education', 'Hospitality', 
                                'Industrial', 'Aviation', 'Recreation', 'Medical', 'Mixed-Use', 'Multi-Family', 'Office', 'Retail', 'Senior-Living'])

    const [currentProjectTag, setCurrentProjectTag] = useState(() => {
        return search.get('projectType') ? search.get('projectType') : 'Community';
    });

    // const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const handleOnChange = (e) => {
        router.replace(`/portfolio?projectType=${currentProjectTag.toLowerCase()}`);
        setCurrentProjectTag(e.target.value)
    }

    useEffect(() => {
        const filteredData = projectData.filter(project => project.tag === currentProjectTag.toLowerCase());
        setFilteredProjects(filteredData);


        router.replace(`/portfolio?projectType=${currentProjectTag.toLowerCase()}`);

    }, [currentProjectTag])
    
    
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
                    <select className="project-type" name="project-type" id="project-type" value={currentProjectTag} onChange={handleOnChange}>
                        {
                            projectTags.map((projectTag, index) => {
                                return (
                                    <option value={projectTag} key={`${projectTag}-${index}`}>{projectTag}</option>
                                )
                            })
                        }
                    </select>
                    <h3 className='current-project-type'>{currentProjectTag.toUpperCase()}</h3>
                </div>
                <div className='portfolio-page__projects-grid'>
                    {
                        filteredProjects.length !== 0 ? filteredProjects.map(project => {
                           return <ProjectThumbnail key={project.name} {...project} />
                        }) : <h1>Currently there are no projects to display.</h1>
                    }
                </div>
            </section>
        </div>
    )
}