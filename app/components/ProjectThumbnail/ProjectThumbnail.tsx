interface ProjectThumbnail {
    name: string,
    images: [string],
    locations: [string],
    description: string,
    projectType: string
}

export default function ProjectThumbnail({ name, images, locations, description, projectType }: ProjectThumbnail) {

    return (
        <div className="project-thumbnail">
            <div className="project-thumbnail__image">
                <img src={images[0]} alt={`${name}'s project image`} />
            </div>
            <div className="project-thumbnail__meta">
                <a className="project-thumbnail__title" href="/portfolio/1232">
                    <h1>{name} | {locations[0]} </h1>
                </a>
                {/* <span className="project-thumbnail__location">{locations[0]}</span> */}
                <p className="project-thumbnail__desc">{`${description.substring(0, 100)}...`}</p>
            </div>
        </div>
    )
}