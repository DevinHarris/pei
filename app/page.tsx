import Header from '@/app/components/Header/Header';


export default function Home() {

  return (
    <div className="home-container">
       <Header />
        <main className="landing-main-container">
          <section className="callout-quote-container">
            <h1 className="callout-quote">Unlock your Potential with Proficient</h1>
            <p className="callout-quote-desc">We have successfully completed thousands of commercial projects, showcasing our proficiency across a diverse range of sectors. Our team of licensed professional engineers, registered across the United States, brings
                            a wealth of experience and expertise to every project.</p>
          </section>
          <section className="landing-section">
             <div className="featured-project">
                <div className="featured-project-heading">
                    <span className="featured-project-tag">Featured Project</span>
                    <h2 className="featured-project-title">
                      <a href='/projects'>SweetWater Brewing Company | Atlanta, GA</a>
                    </h2>
                </div>
                <div className="featured-project-main">
                  <div className="featured-project-img-container">
                    <img className="featured-project-img" src="/images/project-img-8.jpg" alt="building image"  />
                  </div>
                  <div className="featured-project-info-grid">
                    <div className="featured-project-info">
                        <h3>Identity</h3>
                        <p>Every house has its own identity, all different from one another, despite having a common base, inherent to the Mima system. Thus our ultimate goal, allowing for customization, regarding predefined architectural rules.</p>
                    </div>
                    <div className="featured-project-info">
                        <h3>Quality</h3>
                        <p>The quality of the architecture, along with the quality of the construction execution and construction materials is Mima’s fundamental aim. Our objective is long-lasting, gracefully enduring, quality construction.</p>
                    </div>
                    <div className="featured-project-info">
                        <h3>Simplicity</h3>
                        <p>Simple constructions are the most attractive and timeless ones. Our intention is not different or strange constructions but timeless, attractive and comfortable ones. We believe simplicity is ultimate sophistication..</p>
                    </div>
                    
                  </div>
                  <a className="rounded-btn-cta" href="#">Read More</a>
                </div>
             </div>
          </section>
          {/* <section className="experience">
              <div className="experience-container">
                <div className="experience-meta experience-col">
                    <span className="featured-project-tag">Proficient Engineering</span>
                    <h3>Our Experience</h3>
                    <p>No matter how complex or simple, we engineer our projects precisely and don’t tolerate corner-cutting. Between our vast project expertise, in-house tools and fully licensed staff, we produce accurate, architecturally efficient designs. Besides, we’re engineers. Precision should be our middle name.</p>
                    <a className="rounded-btn-cta" href="#">Learn more</a>
                </div>
                <div className="experience-main-content experience-col">
                    <p className="experience-description">At Proficient Engineering, Inc. we start with proficiency at our core, but we don’t stop there. Our team of proactive, dependable engineers love to help you succeed and deliver top-notch, reasonably-priced work on time with minimal involvement from you.
                      What sets us apart from other engineering firms? It’s not the credentials we hang on our walls (though we have plenty of those), but rather our unrelenting drive to help our clients succeed. And frankly, it’s why we formed Proficient in 2008.
                    </p>
                    <div className="experience-icons">
                      
                    </div>
                </div>
              </div>
          </section> */}
          <section className="landing-section">
            <div className="landing-section-"></div>
          </section>
        </main>
    </div> 
  )
}