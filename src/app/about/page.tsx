"use client"

import PageTitle from '~/components/page-title'
import {
    SITE_LINKEDIN_URL,
} from '~/lib/constants'
import { motion } from "motion/react"
import { Separator } from '~/components/ui/separator'
import { Link } from '~/components/ui/link'
import { cn } from '~/lib/utils'
import { buttonVariants } from '~/components/ui/button'

const Page = () => {
    return (
        <>
            <PageTitle title={"About"} description={"👋 Hi there! I am Kasturirangan, a Fullstack Web Developer."} />
            {/* Personal Story Section */}
            <motion.section
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                        I&apos;m a passionate Full Stack Developer based in Bangalore, India, with a deep love for creating
                        digital experiences that make a difference. My journey in web development started with curiosity
                        about how websites work, and it has evolved into a career focused on building scalable,
                        user-friendly applications.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                        I specialize in modern web technologies like React, Next.js, Node.js, and TypeScript.
                        I&apos;m particularly drawn to AI-powered solutions and have been working on projects that
                        integrate AI with web applications to solve real-world problems.
                    </p>
                </div>
            </motion.section>

            <Separator className="my-16" />

            <motion.section
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold mb-6">Experience</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold">Junior Frontend Developer – MarkAny</h3>
                        <p className="text-muted-foreground text-sm">Oct 2024 – Mar 2025 · Remote</p>
                        <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                            <li>Optimized SaaS UI, reducing page load times by ~30% and improving engagement by 20%.</li>
                            <li>Built subscription features with backend teams, driving 15% adoption growth in 3 months.</li>
                            <li>Shipped production-ready features with MUI, cutting post-release bugs.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Associate MERN Developer – Meyi Cloud</h3>
                        <p className="text-muted-foreground text-sm">Aug 2023 – Sep 2024 · Puducherry, India</p>
                        <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                            <li>Revamped Plant 365 SaaS UI, increasing retention by 15% and lowering churn by 10%.</li>
                            <li>Designed 20+ reusable React/Vue components, cutting feature rollout time by 30%.</li>
                            <li>Implemented end-to-end subscription flows (auth, billing, API integration) with MERN stack.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
                        <p className="text-muted-foreground text-sm">2023 – Present</p>
                        <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                            <li>Delivered 10+ client projects using React and Next.js.</li>
                            <li>Built scalable web applications with MERN stack focused on responsive design and UX.</li>
                            <li>Implemented performance optimizations like lazy loading and code splitting.</li>
                        </ul>
                    </div>
                </div>
            </motion.section>


            <Separator className="my-16" />

            {/* Call to Action Section */}
            <motion.section
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    I&apos;m always excited to work on new projects and collaborate with fellow developers.
                    Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/projects"
                        className={cn(buttonVariants({ size: "lg" }), "rounded-xl")}
                    >
                        View My Projects
                    </Link>
                    <Link
                        href={SITE_LINKEDIN_URL}
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-xl")}
                        target="_blank"
                    >
                        Connect on LinkedIn
                    </Link>
                </div>
            </motion.section>
        </>
    )
}

export default Page
