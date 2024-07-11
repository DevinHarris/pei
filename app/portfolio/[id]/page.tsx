export default function ProjectPage({ params }:  { params: { id: string } }) {

    console.log('Project: ', params);

    return (
        <div className="project-page">
            <header className="project-page__header">
                <div className="project-page__header--hero">
                    <img className="project-page__header--img" src="/images/project-img-4.jpg" alt="project-image" />
                    <div className="project-page__header--content">
                        <h1 className="project-title">SweetWater Brewing Company | Atlanta, GA</h1>
                    </div>
                </div>
            </header>
            <main className="project-page__main">
                <section className="project-page__callout">
                    <h2 className="project-page__callout-text">PEI is a very professional MEP engineering consulting group. They work efficiently and are great to collaborate with. Without expection, all the members of PEI team have been very capable, efficient, and friendly. Yes, I would absolutely recommend PEI to other firms.</h2>
                </section>
                <section className="project-page__meta">
                    <div className="project-page__meta-grid">
                        <div className="project-page__meta-grid-col project-page__meta-grid-about">
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Size</b>
                                <span className="project-page__meta-value">49,200 SF New | 25,900 SF Renovation</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Year</b>
                                <span className="project-page__meta-value">2021</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Location</b>
                                <span className="project-page__meta-value">Atlanta, GA</span>
                            </div>
                            <div className="project-page__meta-desc">
                                <b className="project-page__meta-title">Client</b>
                                <span className="project-page__meta-value">SweetWater, LLC</span>
                            </div>
                        </div>
                        <div className="project-page__meta-grid-col project-page__meta-grid-text">
                                <p className="project-page__meta-text">The SweetWater Brewery project is located at 195 Ottley Drive in Atlanta, Georgia. Partnering with Studio Chib, our goal of the projects was to create indoor\outdoor musical experience, and relaxing with a beer. The focus of the indoor space was a central beer bar with an open kitchen surround by friendship-style dining tables that offers views of the brewery's beer making process.</p> 
                                
                                <p className="project-page__meta-text">The outdoor space is directly connected through openable glass garage doors and has an elevated patoio that is covered by a canopy and wood trellis allowing the customer to view the musical event stage set amidst a sprawling green landscaped lawn.</p>

                                <p className="project-page__meta-text">
                                    The biggest challenge of project was manage the tight project schedule and keeping the project within the budget while meeting the client's expectations. 
                                </p>

                                <p className="project-page__meta-text">
                                    Concealed existing conditions discovered during construction as well as the dining area's open design posed some additional challenges.
                                </p>
                        </div>
                       
                    </div>
                </section>
                <section className="project-page__image-grid">
                            <div className="project-page__image">
                                <img src="/images/project-img-9.jpg" alt="project image" />
                            </div>
                            <div className="project-page__image">
                                <img src="/images/project-img-10.jpg" alt="project image" />
                            </div>
                            <div className="project-page__image">
                                <img src="/images/project-img-11.jpg" alt="project image" />
                            </div>
                            <div className="project-page__image">
                                <img src="/images/project-img-12.jpg" alt="project image" />
                            </div>
                </section>
                <section className="project-page__callout--center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate exercitationem nobis, corrupti odit sed quas tenetur doloremque earum enim repellat esse asperiores qui ea nemo voluptatem eius ad nam!</p>
                </section>

                <section className="project-page__image-grid">
                            <div className="project-page__image">
                                <img src="/images/project-img-4.jpg" alt="project image" />
                            </div>
                            <div className="project-page__image">
                                <img src="/images/project-img-5.jpg" alt="project image" />
                            </div>
                            <div className="project-page__image">
                                <img src="/images/project-img-6.jpg" alt="project image" />
                            </div>
                            <div className="project-page__image">
                                <img src="/images/project-img-8.jpg" alt="project image" />
                            </div>
                </section>
            </main>
        </div>
    )
}