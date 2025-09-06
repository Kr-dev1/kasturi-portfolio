import { Projects as allProjects } from '~/lib/constants'

import PageTitle from '~/components/page-title'
import ProjectCards from '~/components/project-cards'

const Page = async () => {
    return (
        <>
            <PageTitle title={"Projects"} description={"The list of my projects. Everything was made with ❤️."} />
            <ProjectCards projects={allProjects} />
        </>
    )
}

export default Page
