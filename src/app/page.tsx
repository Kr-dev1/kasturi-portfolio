import AboutMe from "./_rootComponents/about-me"
import { Hero } from "./_rootComponents/hero"
import SelectedProjects from "./_rootComponents/selected-projects"

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900 dark:text-gray-50">
      <Hero />
      <SelectedProjects />
      <AboutMe />
    </div>
  )
}
