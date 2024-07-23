"use client"

import YouTube from 'react-youtube';

export default function BIMPage() {

    return (
        <>
            <div className="project-page bim-page">
            <header className="project-page__header">
                <div className="project-page__header--hero">
                    <img className="project-page__header--img" src="/images/bim/bim-pei-sign.png" alt="project-image" />
                    <div className="project-page__header--content">
                        <h1 className="project-title">Maximize your Design, Construction and Planning with BIM</h1>
                    </div>
                </div>
            </header>
            <main className="bim-page__main">
                <div className="bim-page__inner">
                    <div className="bim-page-heading">
                        <p>Efficiently plan, design, construct and manage buildings and infrastructure with Building Information Modeling (BIM) from Proficient Engineering.</p>
                        <p> Whether you’re verifying existing conditions or coordinating a new BIM model, Proficient can help you from the design process to the finished building using hyper coordinated BIM models, 3D laser scanning and data rich modeling.</p>
                        <a className="rounded-btn-cta" href="#">More Info</a>
                    </div>
                   
                    <div className="bim-page__what-is-bim">
                        <div className="bim-page__bim-container">
                            <div className="what-is-bim__heading bim-container-col">
                                <h1>What is BIM</h1>
                                <p>Building Information Modeling (BIM) is an intelligent 3D model-based process that gives architecture, engineering and construction (AEC) professionals the insight and tools to more efficiently plan, design, construct, and manage buildings and infrastructure. </p>
                            </div>
                        <div className="what-is-bim__content bim-container-col">
                            <h2>Architects, Engineers, Owners</h2>
                            <div className="bim-page__benefit-lists">
                               <div className="bim-page__benefit-list">
                                    <div className="bim-page__benefit-lists-heading">
                                            <h3>Proficient Provides</h3>
                                            <ul>
                                                <li>As-built Scans</li>
                                                <li>As-built Modeling</li>
                                                <li>Existing Conditions</li>
                                                <li>Augmented Reality</li>
                                                <li>Photo-realistic Renderings</li>
                                                <li>Fly-throughs</li>
                                                <li>Building Assessment Reports</li>
                                                <li>COBie Data</li>
                                            </ul>
                                    </div>
                               </div>
                               <div className="bim-page__benefit-list">
                                    <div className="bim-page__benefit-lists-heading">
                                            <h3>Other Benefits</h3>
                                            <ul>
                                                <li>As-built Scans</li>
                                                <li>As-built Modeling</li>
                                                <li>Existing Conditions</li>
                                                <li>Augmented Reality</li>
                                                <li>Photo-realistic Renderings</li>
                                                <li>Fly-throughs</li>
                                                <li>Building Assessment Reports</li>
                                                <li>COBie Data</li>
                                            </ul>
                                    </div>
                               </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="bim-page__what-is-bim">
                        <div className="bim-page__bim-container">
                            <div className="what-is-bim__heading bim-container-col">
                                <h1>Why use BIM services</h1>
                                <p>Save time and money, avoids costly delays,  minimize unforeseen field issues, offset construction risk, and increase efficiency.</p>
                            </div>
                        <div className="what-is-bim__content bim-container-col">
                            <h2>Contractors</h2>
                            <div className="bim-page__benefit-lists">
                               <div className="bim-page__benefit-list">
                                    <div className="bim-page__benefit-lists-heading">
                                            <h3>Proficient Provides</h3>
                                            <ul>
                                                <li>Virtual Design & Construction (VDC)</li>
                                                <li>Clash Detection</li>
                                                <li>Construction Validation</li>
                                                <li>As-built Scans</li>
                                                <li>As-built Modeling</li>
                                            </ul>
                                    </div>
                               </div>
                               <div className="bim-page__benefit-list">
                                    <div className="bim-page__benefit-lists-heading">
                                            <h3>Other Benefits</h3>
                                            <ul>
                                                <li>Create designs that are buildable</li>
                                                <li>Ensure that designs fit the building before your go onsite</li>
                                                <li>Reduce RFI and construction costs</li>
                                                <li>Reduce change orders and minimize or prevent tear outs</li>
                                                <li>Build faster drawings and project schedules</li>
                                                <li>Save time and money with more offsite fabrication</li>
                                                <li>Conduct HVAC test and balance simultaneously</li>
                                                <li>AND MUCH MORE!  </li>
                                            </ul>
                                    </div>
                               </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
         </div>
        </>
    )
}