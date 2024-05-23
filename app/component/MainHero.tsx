interface MainHeroProps {
    // wiil soon be coming from Payload CMS
    title: string,
    content: string
}

export default function MainHero({ title, content }: MainHeroProps) {

    return (
        <div className="main-hero-container w-full">
            {/* slider */}
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="/images/video-bg-1.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className="main-hero-content">
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="text-lg">{content}</p>
            </div>
        </div>
    )
}