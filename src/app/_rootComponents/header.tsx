"use client"

import { cn } from "~/lib/utils"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import Links from "./Link"
import { Navbar } from "./navbar"
import MobileNav from "./mobile-nav"
import ThemeSwitcher from "./theme-switcher"
import CommandMenu from "./command-menu"
import { Logo } from "~/components/logo"

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        document.addEventListener('scroll', changeBackground)

        return () => {
            document.removeEventListener('scroll', changeBackground)
        }
    }, [])
    return (<motion.header
        className={cn(
            'fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl bg-background/30 px-8 shadow-xs saturate-100 backdrop-blur-[10px] transition-colors',
            isScrolled && 'bg-background/80'
        )}
        initial={{
            y: -100
        }}
        animate={{
            y: 0
        }}
        transition={{
            duration: 0.3
        }}
    >
        <Links
            href='#skip-nav'
            className='fixed top-4 left-4 -translate-y-20 rounded-xs border bg-background p-2 font-medium shadow-xs transition-transform focus-visible:translate-y-0 focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-2'
        >
            <span>{"Skip to main content"}</span>
        </Links>
        <Links href='/' className='flex items-center justify-center gap-1' aria-label="home">
            <Logo aria-hidden='true' />
        </Links>
        <div className='flex items-center gap-2'>
            <Navbar />
            <ThemeSwitcher />
            <CommandMenu />
            <MobileNav />
        </div>
    </motion.header>)
}