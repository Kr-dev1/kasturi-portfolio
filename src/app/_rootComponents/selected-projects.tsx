'use client'


// import { allProjects, type Project } from 'content-collections'
import { ArrowUpRightIcon, LightbulbIcon } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from '~/components/ui/link'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import BlurImage from '~/components/blur-image'
import { Projects as allProjects } from '~/lib/constants'
import type { ProjectCardProps } from '../projects/types'

const variants = {
    initial: {
        y: 40,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

const SelectedProjects = () => {
    const projectsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(projectsRef, { once: true, margin: '-100px' })
    const filteredProjects = allProjects.filter((project) => project.selected)

    return (
        <motion.div
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            variants={variants}
            ref={projectsRef}
            transition={{
                duration: 0.5
            }}
            className='relative my-24'
        >
            <motion.h2
                className='text-center text-3xl font-semibold'
                initial={{
                    y: 30,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.3
                }}
            >
                What I&apos;m Working On
            </motion.h2>
            <motion.div
                className='mt-12 grid gap-4 md:grid-cols-2'
                initial={{
                    y: 40,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.3
                }}
            >
                {filteredProjects.map((project) => (
                    <Card key={project.slug} {...project} />
                ))}
            </motion.div>
            <div className='my-8 flex items-center justify-center'>
                <Link
                    href='/projects'
                    className={cn(
                        buttonVariants({
                            variant: 'outline'
                        }),
                        'rounded-xl'
                    )}
                >
                    See all projects
                </Link>
            </div>
        </motion.div>
    )
}

const Card = (props: ProjectCardProps) => {
    const { slug, name, description, tagline } = props

    return (
        <Link key={slug} href={`/projects/${slug}`} className='group relative rounded-xl p-2 shadow-feature-card'>
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-3'>
                    <LightbulbIcon className='size-[18px]' />
                    Project
                </div>
                <ArrowUpRightIcon className='size-[18px] opacity-0 transition-opacity group-hover:opacity-100' />
            </div>
            <BlurImage
                width={1280}
                height={832}
                src={`/${slug}.png`}
                alt={description}
                className='rounded-lg'
            />
            <div className='absolute bottom-2 left-7 flex flex-col transition-[left] ease-out group-hover:left-[30px]'>
                <h3 className='text-2xl font-semibold text-white'>{name}</h3>
                <p className='mt-2 text-zinc-100 dark:text-zinc-100'>{tagline}</p>
            </div>
        </Link>
    )
}

export default SelectedProjects
