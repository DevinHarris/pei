import profileData from '../../data/bios.json';

export default function OurTeam() {



        return (
            <div className="our-team-page">
                <div className="portfolio-page">
                    <header className="portfolio-page__header">
                        <div className="portfolio-page__header--content">
                                <h1 className="portfolio-page__header--title">Meet our Team</h1>
                                <p className="portfolio-page__header--text">Our employees love to work here and our top priority is to help you succeed, bar none. From the first phone call to finished project, we take ownership and are incredibly easy to work with, resulting in reliable work without hand holding. We work hard to make it easy for you.</p>
                        </div>
                    </header>
                 </div>

                 <main className="our-team-page__main">
                    <div className="our-team-page__grid">


                        {
                            profileData ? (

                                profileData.map(profile => (
                                    <div className="our-team-page__profile" key={profile.id}>
                                        <div className="our-team-page__img">
                                            <a href={`/bios${profile.slug}`}>
                                                <img src={profile.image} alt={`${profile.name}'s photo`} />
                                            </a>
                                        </div>
                                        <h2 className="our-team-page__name">{`${profile.name} | ${profile.title}`}</h2>
                                    </div>
                                ))
                            ) : null
                        }
                    </div>
                 </main>
            </div>
            
        )
}