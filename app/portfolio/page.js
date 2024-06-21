'use client'

import { useState, useEffect } from 'react';
import ProjectThumbnail from "../components/ProjectThumbnail/ProjectThumbnail"

export default function PortfolioPage() {

    const [projects, setProjects] = useState([
        {
            name: 'C. Ellet\'s Steakhouse',
            locations: ['Atlanta, GA'],
            images: ['/images/project-img-5.jpg'],
            description: 'C. Ellet\’s is a next-generation steakhouse located at The Battery in Truist Park. The space includes a kitchen, associated storage spaces, a bar, oyster bar with wall up service window, multiple points of sale and dining spaces, and restrooms required for the fit-out.',
            projectType: 'Food and Beverages'
        },

        {
            name: '1020 White St.',
            locations: ['Atlanta, GA'],
            images: ['/images/project-img-2.jpg'],
            description: 'An adaptive use of an existing warehouse that the developers will turn into a series of retail/restaurant spaces. This food hall joins restaurants, breweries, offices, and retail shops open at the Lee + White complex along the Westside Beltline. The food hall will feature a mix of 19 food stalls once fully open, a central bar in front opening to a large patio, and full-service restaurants.',
            projectType: 'Office'
        },

        {
            name: 'O-Ku',
            locations: ['Atlanta, GA', 'Charlotte, NC'],
            images: ['/images/project-img-1.jpg'],
            description: 'O-Ku restaurant celebrates authentic Asian cuisine with a southern approach and a menu that focuses on unique ingredients and sophisticated presentations. Both locations are roughly 7,500 square feet with a full kitchen and bar and required wood solid fuel.',
            projectType: 'Food and Beverages'
        },

        {
            name: 'Oak Steakhouse',
            locations: ['Charlotte, NC'],
            images: ['/images/project-img-7.jpg'],
            description: 'Oak Steakhouse embodies a contemporary interpretation of the traditional American steakhouse, with a spacious footprint spanning nearly 14,000 square feet and equipped with a full kitchen and bar. The architectural design integrates elements to accommodate wood burning solid fuel, enhancing the culinary experience with an authentic touch.',
            projectType: 'Community'
        },

        {
            name: 'Ted’s Montana Grill',
            locations: ['Nationwide'],
            images: ['/images/project-img-4.jpg'],
            description: 'Ted\'s is renowned for its authentic American cuisine. Our teams collaborate closely to refine their prototypical design to support the expansion of this national account, ensuring each location maintains its unique charm while adhering to high standards of quality and consistency.',
            projectType: 'Food and Beverages'
        },

        {
            name: 'Waffle House',
            locations: ['Nationwide'],
            images: ['/images/project-img-9.jpg'],
            description: 'As Waffle House’s go-to MEP engineering firm, we specialize in designing intricate fit-ups within existing facilities, seamlessly integrating their evolving needs while ensuring optimal functionality and efficiency. We have completed hundreds of projects for them across the country.',
            projectType: 'Retail'
        },
    ])

    // used to filter different projects 

    const [projectTypes, setProjectTypes] = useState(['Community', 'Food and Beverages', 'Higher Education', 'Historic', 'Hospitality', 
                                'Industrial', 'K-12 Education', 'Medical', 'Mixed Use', 'Multi-Family', 'Office', 'Retail', 'Senior Living'])

    const [currentProjectType, setCurrentProjectType] = useState('Community');

    const handleOnChange = (e) => {

        setCurrentProjectType(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        console.log('effect triggered')
    }, [currentProjectType])

    
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