"use client"

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import BlurImage from '~/components/blur-image'

const TEXTS = [
    {
        key: 'amazing',
        className: 'bg-clip-text text-center text-transparent bg-linear-to-r from-[#ff1835] to-[#ffc900]'
    },
    {
        key: 'stunning',
        className: 'bg-clip-text text-center text-transparent bg-linear-to-r from-[#0077ff] to-[#00e7df]'
    },
    {
        key: 'fantastic',
        className: 'bg-clip-text text-center text-transparent bg-linear-to-r from-[#7f00de] to-[#ff007f]'
    },
    {
        key: 'attractive',
        className: 'bg-clip-text text-center text-transparent bg-linear-to-r from-[#2ecc70] to-[#1ca085]'
    }
] as const

const SPEED = 2


const variants = {
    enter: {
        y: 100,
        opacity: 0
    },
    center: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: -100,
        opacity: 0
    }
}



export const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Format to hh:mm:ss
            setTime(now.toLocaleTimeString("en-IN", { hour12: true }));
        };

        updateTime(); // set initial time
        const interval = setInterval(updateTime, 1000); // update every second
        return () => clearInterval(interval); // cleanup on unmount
    }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TEXTS.length)
        }, SPEED * 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    const textItem = TEXTS[currentIndex]
    if (!textItem) return null
    return (
        <div className='my-16 space-y-6'>  <div className='flex justify-between gap-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='flex flex-col flex-wrap gap-2 text-2xl font-bold sm:text-3xl'>
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: 'easeOut' }}>
                        I&apos;m Kasturi, a Full Stack Developer
                    </motion.div>
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: 'easeOut' }}
                        className='flex gap-2'
                    >
                        <motion.div layout key='title-middle-left' className='leading-[30px] sm:leading-[45px]'>
                            Building
                        </motion.div>
                        <div className='relative overflow-hidden'>
                            <AnimatePresence mode='popLayout'>
                                <motion.div
                                    key={currentIndex}
                                    variants={variants}
                                    initial='enter'
                                    animate='center'
                                    exit='exit'
                                    layout
                                    transition={{
                                        type: 'tween',
                                        duration: 0.3
                                    }}
                                    className='inline-flex items-center justify-center leading-[30px] sm:leading-[45px]'
                                >
                                    <span className={`${textItem.className} capitalize`}>{textItem.key}</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <motion.div layout key='title-middle-right' className='leading-[30px] sm:leading-[45px]'>
                            websites with
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: 'easeOut' }}>
                        React, Node.js, and more
                    </motion.div>
                </h1>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut' }}
                    className='text-sm text-muted-foreground'
                >
                    India • UTC/GMT +5:30 • {time}
                </motion.div>

            </div>
            <motion.div
                className='relative hidden size-28 md:block'
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: 1
                }}
                transition={{
                    duration: 0.3
                }}
            >
                <BlurImage
                    src='/hero.png'
                    className=''
                    width={114}
                    height={114}
                    alt='Kasturirangan'
                    lazy={false}
                />
                <div className='absolute inset-0 -z-10 bg-linear-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl' />
            </motion.div>
        </div>
        </div>)
}