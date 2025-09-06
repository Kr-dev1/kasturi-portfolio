'use client'

import { SiGithub, SiX} from '@icons-pack/react-simple-icons'
import { Button } from '~/components/ui/button'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from '~/components/CommandMenu'
import { CodeIcon, CommandIcon, Linkedin, LinkIcon } from 'lucide-react'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { useCopyToClipboard } from '~/hooks/use-copy-to-clipboard'

import { SITE_LINKEDIN_URL, SITE_GITHUB_URL, SITE_X_URL } from '~/lib/constants'

type Groups = Array<{
    name: string
    actions: Array<{
        title: string
        icon: React.ReactNode
        onSelect: () => void | Promise<void>
    }>
}>

const CommandMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [copy] = useCopyToClipboard()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setIsOpen((value) => !value)
            }
        }

        document.addEventListener('keydown', down)

        return () => {
            document.removeEventListener('keydown', down)
        }
    }, [])

    const openLink = useCallback((url: string) => {
        setIsOpen(false)
        window.open(url, '_blank', 'noopener')
    }, [])

    const groups: Groups = [
        {
            name: "General",
            actions: [
                {
                    title: "Copy Link",
                    icon: <LinkIcon />,
                    onSelect: async () => {
                        setIsOpen(false)
                        await copy({ text: globalThis.location.href })
                    }
                },
                {
                    title: "Source Code",
                    icon: <CodeIcon />,
                    onSelect: () => {
                        openLink('https://github.com/kr-dev1/portfolio')
                    }
                }
            ]
        },
        {
            name: "Social",
            actions: [
                {
                    title: 'GitHub',
                    icon: <SiGithub />,
                    onSelect: () => {
                        openLink(SITE_GITHUB_URL)
                    }
                },
                {
                    title: 'LinkedIn',
                    icon: <Linkedin />,
                    onSelect: () => {
                        openLink(SITE_LINKEDIN_URL)
                    }
                },
                {
                    title: 'X',
                    icon: <SiX />,
                    onSelect: () => {
                        openLink(SITE_X_URL)
                    }
                },
            ]
        }
    ]

    return (
        <>
            <Button
                variant='ghost'
                className='size-9 p-0'
                onClick={() => {
                    setIsOpen(true)
                }}
                aria-label="Open command menu"
                data-testid='command-menu-button'
            >
                <CommandIcon />
            </Button>
            <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
                <CommandInput placeholder="Type a command to search" />
                <CommandList>
                    <CommandEmpty>No results found</CommandEmpty>
                    {groups.map((group, i) => (
                        <Fragment key={group.name}>
                            <CommandGroup heading={group.name}>
                                {group.actions.map((action) => (
                                    <CommandItem key={action.title} onSelect={action.onSelect}>
                                        {action.icon}
                                        {action.title}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            {i === groups.length - 1 ? null : <CommandSeparator />}
                        </Fragment>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    )
}

export default CommandMenu
