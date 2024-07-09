export default function BioPage() {

    return (
        <>
            <div className="project-page bio-page">
            <header className="project-page__header">
                <div className="project-page__header--hero">
                    <img className="project-page__header--img" src="/images/bios/bio-img-3.jpg" alt="project-image" />
                    <div className="project-page__header--content">
                        <h1 className="project-title">Devonta Harris | Software Engineer</h1>
                    </div>
                </div>
            </header>
            <main className="project-page__main">
                <section className="bio-page__callout ">
                    <h2 className="project-page__callout-text">Hi, I'm Devonta and I love making cool things that people use.</h2>
                </section>
                <section className="project-page__meta">
                    <div className="project-page__meta-grid">
                        <div className="project-page__meta-grid-col project-page__meta-grid-about">
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">What I Do</b>
                                <span className="project-page__meta-value">Software, Web, IT</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Year I Started</b>
                                <span className="project-page__meta-value">2023</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">My Location</b>
                                <span className="project-page__meta-value">Atlanta, GA</span>
                            </div>
                        </div>
                        <div className="project-page__meta-grid-col project-page__meta-grid-text">
                                <p className="project-page__meta-text">Devonta is a Full Stack Engineer based in Atlanta, GA, with over three years of experience in web development, database design, and systems architecture. Skilled in technologies like HTML, CSS, JavaScript, React, Node.js</p> 
                                
                                <p className="project-page__meta-text">His commitment to excellence is evident in his hands-on approach to problem-solving and his ability to thrive in dynamic environments. He has successfully collaborated with teams to confirm creative proposals, design best practices, and deliver high-quality results. His proactive nature and dedication to continuous improvement make him a valuable asset to any team looking to innovate and excel.</p>

                                
                        </div>
                    </div>
                </section>
                <section className="bio-page__projects-container">
                    <h3 className="bio-page__projects-heading">Featured Projects and Accomplishments</h3>
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