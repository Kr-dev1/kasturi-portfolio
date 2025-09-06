export interface ProjectCardProps {
    name: string,
    description: string,
    slug: string,
    tagline: string,
    selected: boolean,
    techstack: string[],
    github: string,
    homepage: string
}

export interface ProjectCardsProps {
    projects: ProjectCardProps[]
}