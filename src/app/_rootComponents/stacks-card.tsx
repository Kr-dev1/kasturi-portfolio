'use client'

import {
    SiCss,
    SiDrizzle,
    SiExpress,
    SiFigma,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiRadixui,
    SiReact,
    SiReactquery,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from '@icons-pack/react-simple-icons'
import { Marquee } from '~/components/ui/marquee'
import { ZapIcon } from 'lucide-react'

const StacksCard = () => {

    return (
        <div className='flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card lg:p-6'>
            <div className='flex items-center gap-2'>
                <ZapIcon className='size-[18px]' />
                <h2 className='text-sm'>Stacks</h2>
            </div>
            <Marquee gap='20px' className='py-4' fade pauseOnHover>
                <SiHtml5 className='size-10' />
                <SiCss className='size-10' />
                <SiJavascript className='size-10' />
                <SiTypescript className='size-10' />
                <SiFigma className='size-10' />
                <SiTailwindcss className='size-10' />
                <SiNextdotjs className='size-10' />
                <SiReact className='size-10' />
                <SiRadixui className='size-10' />
            </Marquee>
            <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
                <SiPrisma className='size-10' />
                <SiMysql className='size-10' />
                <SiGit className='size-10' />
                <SiVite className='size-10' />
                <SiDrizzle className='size-10' />
                <SiNodedotjs className='size-10' />
                <SiReactquery className='size-10' />
                <SiRedux className='size-10' />
                <SiExpress className='size-10' />
                <SiMongoose className='size-10' />
                <SiMongodb className='size-10' />
            </Marquee>
        </div>
    )
}

export default StacksCard
