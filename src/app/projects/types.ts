export interface ProjectCardProps {
    name: string,
    description: string,
    slug: string,
    tagline: string,
    selected: boolean,
    techstack: string[],
    github: string,
    homepage: string,
    githubFrontend: string,
    githubBackend: string
}

export interface ProjectCardsProps {
    projects: ProjectCardProps[]
}