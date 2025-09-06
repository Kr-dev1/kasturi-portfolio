"use client"

import { usePathname } from "next/navigation"
import { HEADER_LINKS } from "~/config/links"
import { cn } from "~/lib/utils"
import Links from "./Link"

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="hidden md:block">
            <ul className="flex gap-2">
                {HEADER_LINKS.map((link) => {
                    const isActive = link.href === pathname
                    return (
                        <li key={link.key} className="relative flex h-[60px] items-center justify-center">
                            <Links className={cn('rounded-sm px-3 py-2 text-sm font-medium transition-colors', {
                                'text-muted-foreground hover:text-foreground': !isActive,
                                'text-foreground': isActive
                            })}
                                href={link.href}>
                                {link.key}
                            </Links>
                            {isActive && (
                                <>
                                    <div className='absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-nav-link-indicator' />
                                    <div className='absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur-sm dark:bg-[rgb(223_29_72)]' />
                                </>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}