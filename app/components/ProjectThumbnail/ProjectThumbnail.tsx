interface ProjectThumbnail {
    id: string,
    name: string,
    images: string[],
    location: string,
    project_description: string,
    projectType: string
}

export default function ProjectThumbnail({ id, name, images, location, project_description, projectType }: ProjectThumbnail) {

    return (
        <div className="project-thumbnail">
            <div className="project-thumbnail__image">
                <img src={images[0]} alt={`${name}'s project image`} />
            </div>
            <div className="project-thumbnail__meta">
                <a className="project-thumbnail__title" href={`/portfolio/${id}`}>
                    <h1>{name} | {location} </h1>
                </a>
                {/* <span className="project-thumbnail__location">{locations[0]}</span> */}
                <p className="project-thumbnail__desc">{`${project_description[0].substring(0, 100)}...`}</p>
            </div>
        </div>
    )
}