export default function LunchLearnPage() {

    return (
        <>
            <div className="project-page bio-page">
            <header className="project-page__header">
                <div className="project-page__header--hero">
                    <img className="project-page__header--img" src="/images/project-img-2.jpg" alt="project-image" />
                    <div className="project-page__header--content">
                        <h1 className="project-title">Lunch and Learns</h1>
                    </div>
                </div>
            </header>
            <main className="project-page__main">
                <section className="lunch-learn-container">
                    <h2 className="bio-page__projects-heading">More about Lunch and Learns</h2>
                    <p className="lunch-learn-description">Proficient offers multiple lunch and learns to help you with your continuing education needs and expand your industry knowledge. Both courses are are 1-hour long and are offered online. Lunch will be provided for the participants at your office. Check out the objectives to our presentations and schedule a date and time below!</p>
            
                </section>
                <section className="lunch-learns-container">
                    <div className="lunch-learn-type">
                        <div className="lunch-learn-col lunch-learn-col-image">
                            <img src="/images/project-img-6.jpg" alt="Lunch and Learn image" />
                        </div>
                        <div className="lunch-learn-col lunch-learn-col-description">
                           <div className="lunch-learn-col-description-inner">
                            <h1 className="lunch-learn-title">Just BIM It</h1>
                                <div className="lunch-learn-objectives">
                                    <ul>
                                        <li>To provide an overview to better understand of BIM</li>
                                        <li>To provide advantages of BIM for Design Team</li>
                                        <li>To provide advantages of BIM for Construction Team</li>
                                        <li>To explain future impact of BIM on the AEC industry</li>
                                    </ul>
                                    <a className="lunch-learn-register-link rounded-btn-cta" href="#">Register Here</a>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className="lunch-learn-type lunch-learn-reverse">
                        <div className="lunch-learn-col lunch-learn-col-image">
                            <img src="/images/project-img-8.jpg" alt="Lunch and Learn image" />
                        </div>
                        <div className="lunch-learn-col lunch-learn-col-description">
                           <div className="lunch-learn-col-description-inner">
                            <h1 className="lunch-learn-title">AEC Coordination in Design</h1>
                                <div className="lunch-learn-objectives">
                                    <ul>
                                        <li>To promote the benefits of early collaboration among team members</li>
                                        <li>To manage project schedules and deliverables</li>
                                        <li>To determine the project’s critical path</li>
                                        <li>To stay on top of current technologies that can help the design team</li>
                                    </ul>
                                    <a className="lunch-learn-register-link rounded-btn-cta" href="#">Register Here</a>
                                </div>
                           </div>
                        </div>
                    </div>

                </section>
                
                <section className="bio-page__projects-container upcoming-lunch-learn">
                    <h3 className="lunch-learn-heading">Upcoming Lunch and Learns</h3>
                    <div className="bio-page__projects-grid">
                        <div className="bio-page__project">
                        <div className="bio-page__project-img">
                                <a href="/portfolio/3242">
                                    <img src="/images/project-img-6.jpg" alt="" />
                                </a>
                            </div>
                            <h3>PWORK Site</h3>
                        </div>
                        <div className="bio-page__project">
                            <div className="bio-page__project-img">
                                <a href="/portfolio/3242">
                                    <img src="/images/project-img-6.jpg" alt="" />
                                </a>
                            </div>
                            <h3>Proficient Engineering.com</h3>
                        </div>
                        <div className="bio-page__project">
                            <div className="bio-page__project-img">
                                <a href="/portfolio/3242">
                                    <img src="/images/project-img-4.jpg" alt="" />
                                </a>                            </div>
                            <h3>Project Name</h3>
                        </div>
                        <div className="bio-page__project">
                        <div className="bio-page__project-img">
                                <a href="/portfolio/3242">
                                    <img src="/images/project-img-6.jpg" alt="" />
                                </a>
                            </div>
                            <h3>Project Name</h3>
                        </div>
                    </div>
                </section>
                </main>
            </div>
        </>
    )
}