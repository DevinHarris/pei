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
                
                <section className="bio-page__projects-container lunch-learn">
                    <h3 className="bio-page__projects-heading">Upcoming Lunch and Learns</h3>
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