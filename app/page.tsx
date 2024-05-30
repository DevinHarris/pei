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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum non porro dolorum optio tempore? Distinctio est quae voluptates sit quasi ratione, temporibus tenetur consectetur accusantium quis officiis ducimus expedita eos.</p>
                </div>
              </div>
           </div>
        </header>
        <main className="landing-main-container">
          <section className="landing-section">
              <div className="landing-section-content-cont">
                <div className="landing-section-content">
                    <span className="landing-section-heading">About us</span>
                    <div className="landing-section-content-cont landing-section-content-meta">
                      <h1>Test</h1>
                    </div>
                    <div className="landing-section-content-cont landing-section-content-img">
                      <img src="/images/img-1.jpg" alt="building image" />
                    </div>
                </div>
              </div>
          </section>
        </main>
    </div> 
  )
}