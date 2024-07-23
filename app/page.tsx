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
                      <a href='/portfolio/4tfads'>SweetWater Brewing Company | Atlanta, GA</a>
                    </h2>
                </div>
                <div className="featured-project-main">
                  <div className="featured-project-img-container">
                    <img className="featured-project-img" src="/images/portfolio/sweetwater.jpeg" alt="building image"  />
                  </div>
                  <div className="featured-project-info-grid">
                    <div className="featured-project-info">
                        <h3>Identity</h3>
                        <p>SweetWater is a microbrewery that was established in 1997. The company offeres a variety of brews as well as tours and events at their facility.</p>
                    </div>
                    <div className="featured-project-info">
                        <h3>Approach</h3>
                        <p>The restaurant design required an additional coordination with the kitchen consultant and a mechanical design intergration with the kitchen hood design.</p>
                    </div>
                    <div className="featured-project-info">
                        <h3>Challenge</h3>
                        <p>The biggest challenge of this project was managing the tight project schedule and keeping the project within budget.</p>
                    </div>
                    
                  </div>
                  <a className="rounded-btn-cta" href="/portfolio/4tfads">Read More</a>
                </div>
             </div>
          </section>
         
          <section className="landing-section-callout">
                <div className="landing-section-meta landing-section-callout-meta  experience-col">
                      <div className='landing-section-meta-container'>
                        {/* <span className="featured-project-tag">Proficient Engineering</span> */}
                        <h3>Our Experience</h3>
                        <p>No matter how complex or simple, we engineer our projects precisely and don’t tolerate corner-cutting. Between our vast project expertise, in-house tools and fully licensed staff, we produce accurate, architecturally efficient designs. Besides, we’re engineers. Precision should be our middle name.</p>
                        <a className="rounded-btn-cta" href="/what-we-do">Learn more</a>
                      </div>
                </div>
                <div className="landing-section-callout-image experience-col">

                  <img className='landing-section-image' src="/images/portfolio/emory.jpeg" alt="landing-image" />
                  
                </div>
          </section>
          <section className='landing-section landing-stand-out' id="why-proficient">
              <div className='landing-stand-out-container'>
                    <div className='landing-stand-out__header'>
                        {/* <span className='featured-project-tag'>More About Us</span> */}
                        <h1 className='landing-stand-out__heading'>Why choose Proficient Engineering?</h1>
                    </div>
                    <div className='landing-stand-out__bg-img'></div>
                    <div className='landing-stand-out__content'>
                      <div className='landing-stand-out__content-item'>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-title'>
                          <h3>We Get It Right</h3>
                        </div>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-content'>
                          <p>No matter how complex or simple, we engineer our projects precisely and don’t tolerate corner-cutting. Between our vast project expertise, in-house tools and fully licensed staff, we produce accurate, architecturally efficient designs. Besides, we’re engineers. Precision should be our middle name.</p>
                        </div>
                      </div>
                      <div className='landing-stand-out__content-item'>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-title'>
                          <h3>We Make It Easy</h3>
                        </div>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-content'>
                          <p>From the first phone call to finished project, we take ownership and are incredibly easy to work with, resulting in reliable work without hand holding. We work hard to make it easy for you.</p>
                        </div>
                      </div>
                      <div className='landing-stand-out__content-item'>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-title'>
                          <h3>We Save You Time</h3>
                        </div>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-content'>
                          <p>We provide focused, dedicated teams that enable fast decision-making so that you can spend more time focused on your job.</p>
                        </div>
                      </div>
                      <div className='landing-stand-out__content-item'>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-title'>
                          <h3>We Charge Fairly</h3>
                        </div>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-content'>
                          <p>We value quality and character over profit and power. You can count on us to charge reasonable fees without nickel and diming.</p>
                        </div>
                      </div>
                      <div className='landing-stand-out__content-item'>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-title'>
                          <h3>We Provide a Great Experience</h3>
                        </div>
                        <div className='landing-stand-out__content-col landing-stand-out__content-item-content'>
                          <p>Our employees love to work here and our top priority is to help you succeed, bar none. </p>
                        </div>
                      </div>
                    </div>
                  </div>
          </section>
          <section className='landing-section landing-section-qualifications'>
              <div className='landing-section-qualifications__heading'>
                <h1>Our Qualifications</h1>
                <p>Join the ranks of our satisfied clients and experience the Proficient difference. Partner with us for your next project and let us help you achieve excellence through engineering.</p>
              </div>
              <div className='landing-section-qualifications__content'>
                  <div className='landing-section-qualifications__qualification'>
                    <h2>Registration</h2>
                    <ul>
                      <li>Liscened across the U.S.</li>
                      <li>NCEES records available in other states</li>
                    </ul>
                  </div>
                  <div className='landing-section-qualifications__qualification'>
                    <h2>Insurance</h2>

                    <span>Additional insurance available if required</span>
                    <ul>
                      <li>Architects & Engineers Professional Liability Insurance Policy</li>
                      <li>Each Claim – $5,000,000</li>
                      <li>Aggregate – $5,000,000</li>
                    </ul>
                  </div>
                  <div className='landing-section-qualifications__qualification'>
                    <h2>Associations</h2>
                    <ul>
                      <li>
                        <a href="#">American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)</a>
                      </li>
                      <li>
                        <a href="#">American Society of Plumbing Engineers (ASPE)</a>
                      </li>
                      <li>
                        <a href="#">United States Green Building Council (USGBC)</a>
                      </li>
                      <li>
                        <a href="#">Leadership in Energy and Environmental Design Accredited Professional (LEED AP)</a>
                      </li>
                      <li>
                        <a href="#">The National Council of Examiners for Engineering and Surveying (NCEES)</a>
                      </li>
                      <li>
                        <a href="#">Institute of Electrical and Electronics Engineers (IEEE)</a>
                      </li>

                      <li>
                        <a href="#">National Fire Protection Association (NFPA)</a>
                      </li>
                      <li>
                        <a href="#">American Society of Plumbing Engineers (ASPE)</a>
                      </li>
                    </ul>
                  </div>
              </div>
          </section>
        </main>
    </div> 
  )
}