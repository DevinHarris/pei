import Image from "next/image"

interface ProjectThumbnail {
    id: string,
    name: string,
    images: string[],
    location: string,
    project_description: string,
    tag: string
}

export default function ProjectThumbnail({ id, name, images, location, project_description, tag }: ProjectThumbnail) {

    return (
        <div className="project-thumbnail">
            <div className="project-thumbnail__image">
                <Image src={images[0]} alt={`${name}'s project image`} width={0} height={0} unoptimized />
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