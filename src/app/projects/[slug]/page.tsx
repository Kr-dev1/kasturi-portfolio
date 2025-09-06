import BlurImage from '~/components/blur-image'
import Header from './header'
import { Projects } from '~/lib/constants'

type PageProps = {
    params: Promise<{
        slug: string
        locale: string
    }>
}

const Page = async (props: PageProps) => {
    const { slug } = await props.params
    const project = Projects.find(p => p.slug === slug)
    
    if (!project) {
        return <div>Project not found</div>
    }
    
    return (
        <>
            <div className='mx-auto max-w-3xl'>
                <Header {...project} />
                <BlurImage
                    src={`/${slug}.png`}
                    width={1280}
                    height={832}
                    alt={project.name}
                    className='my-12 rounded-lg'
                    lazy={false}
                />
                <div className='prose prose-invert max-w-none'>
                    <p>{project.description}</p>
                </div>
            </div>
        </>
    )
}

export default Page
