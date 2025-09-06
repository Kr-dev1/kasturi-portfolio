"use client"

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "~/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

const ThemeSwitcher = () => {
    const themeContext = useTheme()
    const { setTheme } = themeContext

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="size-9 p-0"
                    aria-label="toggle-theme"
                    data-testid="theme-toggle"
                >
                    <SunIcon className="dark:hidden" />
                    <MoonIcon className="hidden dark:block" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setTheme("light")}
                    data-testid="theme-light-button"
                >
                    <SunIcon className="size-[18px]" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setTheme("dark")}
                    data-testid="theme-dark-button"
                >
                    <MoonIcon className="size-[18px]" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setTheme("system")}
                    data-testid="theme-system-button"
                >
                    <MonitorIcon className="size-[18px]" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeSwitcher
