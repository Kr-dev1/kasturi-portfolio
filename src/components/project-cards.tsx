'use client'

import Links from '~/app/_rootComponents/Link'
import type { ProjectCardProps, ProjectCardsProps } from '~/app/projects/types'
import BlurImage from '~/components/blur-image'

const ProjectCards = (props: ProjectCardsProps) => {
    const { projects } = props

    return (
        <div className='grid gap-4 md:grid-cols-2'>
            {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
            ))}
        </div>
    )
}

const ProjectCard = (props: ProjectCardProps) => {
    const { name, techstack, slug, tagline } = props

    return (
        <Links href={`/projects/${slug}`} className='group rounded-lg px-2 py-4 shadow-feature-card'>
            <BlurImage
                src={`/${slug}.png`}
                width={1280}
                height={832}
                imageClassName='group-hover:scale-105'
                alt={name}
                className='rounded-lg'
            />
            <div className='flex-1 px-2 py-4'>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <div className='text-muted-foreground'>{tagline}</div>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {techstack.map((label) => {
                        return (
                            <div key={label} className='rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900'>
                                {label}
                            </div>
                        )
                    })}
                </div>
            </div>
        </Links>
    )
}

export default ProjectCards
