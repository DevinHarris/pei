export default function CareerPage() {

    return (
        <>
            <div className="project-page bio-page">
            <header className="project-page__header">
                <div className="project-page__header--hero">
                    <img className="project-page__header--img" src="/images/our-team/join-our-team-img-2.jpg" alt="project-image" />
                    <div className="project-page__header--content">
                        <h1 className="project-title">Careers | Join our Team</h1>
                    </div>
                </div>
            </header>
            <main className="project-page__main">
                    <section className="lunch-learn-container">
                        <h2 className="bio-page__projects-heading">Want to be part of the Proficient Team?</h2>
                        <p className="lunch-learn-description"> Send your resume to <a className="font-medium" href="mailto:careers@proficientengineering.com">careers@proficientengineering.com</a> to apply. if we think we are a good fit for you, we’ll be in touch!</p>
                    </section>
                    <section className="careers-open-positions-container">
                        <h1 className="lunch-learn-heading current-open-position-heading">Current Open Roles</h1>
                        <p>Currently there are no openings. Please continue to check back regularly.</p>
                    </section>
                </main>
             </div>
        </>
    )
}