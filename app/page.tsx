import MainHero from "@/app/component/MainHero"

export default function Home() {

  return (
    <div className="home-container">
        <header>
           <nav>
              <ul className="nav-container">
                  <li className="nav-item">
                    <a href="#">What We Do</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Why Proficient</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">BIM</a>
                  </li>
                  <li className="nav-item">
                    <a href="/">
                        <img className="nav-logo" src="/images/logo.png" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Lunch and Learns</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Blogs</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Careers</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Contact Us</a>
                  </li>
              </ul>
           </nav>
           <div className="landing-hero">
              <video className="hero-video" autoPlay loop muted>
                <source src="/images/video-bg-1.mp4" type="video/mp4" />
              </video>
              <div className="hero-content">
                <div className="hero-content-container">
                <h1 className="hero-content-heading">Welcome to Proficient Engineering</h1>
                <p>At Proficient, we believe it’s not just about engineering. It’s about challenging the status quo and innovating for the future. It’s about constantly pushing the envelope to deliver the best results. It’s about tailoring what we deliver to each and every client. It’s about building relationships that matter.</p>
                </div>
              </div>
           </div>
        </header>
        <main className="landing-main-container">
          <section className="callout-quote-container">
            <h1 className="callout-quote">WE BELIEVE SIMPLICITY IS ULTIMATE SOPHISTICATION</h1>
            <p className="callout-quote-desc">With an unrelenting focus on helping clients succeed, Proficient Engineering is a full-service Mechanical, Electrical, & Plumbing (MEP) engineering firm that combines decades of experience with nimble, proactive service to deliver effective solutions on time and on budget with minimal hassle.</p>
          </section>
          <section className="landing-section">
             <div className="featured-project">
                <div className="featured-project-heading">
                    <span className="featured-project-tag">Featured Project</span>
                    <h2 className="featured-project-title">PNC Bank | Atlanta, GA</h2>
                </div>
                <div className="featured-project-main">
                  <div className="featured-project-img-container">
                    <img className="featured-project-img" src="/images/bg-img-6.jpg" alt="building image"  />
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
                  <a className="featured-project-read-more" href="#">Read More</a>
                </div>
             </div>
          </section>
          <section className="experience">
              <div className="experience-container">
                <div className="experience-meta experience-col">
                    <span className="featured-project-tag">Proficient Engineering</span>
                    <h3>Our Experience</h3>
                    <p>No matter how complex or simple, we engineer our projects precisely and don’t tolerate corner-cutting. Between our vast project expertise, in-house tools and fully licensed staff, we produce accurate, architecturally efficient designs. Besides, we’re engineers. Precision should be our middle name.</p>
                    <a className="featured-project-read-more" href="#">Learn more</a>
                </div>
                <div className="experience-main-content experience-col">
                    <h1 className="experience-years">Over 10+ years</h1>
                    <p className="experience-description">At Proficient Engineering, Inc. we start with proficiency at our core, but we don’t stop there. Our team of proactive, dependable engineers love to help you succeed and deliver top-notch, reasonably-priced work on time with minimal involvement from you.
                      What sets us apart from other engineering firms? It’s not the credentials we hang on our walls (though we have plenty of those), but rather our unrelenting drive to help our clients succeed. And frankly, it’s why we formed Proficient in 2008.
                    </p>
                    <div className="experience-icons">
                      
                    </div>
                </div>
              </div>
          </section>
        </main>
    </div> 
  )
}