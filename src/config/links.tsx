import { FlameIcon, Linkedin, MonitorIcon, UserCircleIcon } from "lucide-react";
import { SiGithub, SiX, type IconType } from "@icons-pack/react-simple-icons"
import { SITE_GITHUB_URL, SITE_LINKEDIN_URL, SITE_X_URL } from "~/lib/constants";


type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS = [
  {
    icon: <FlameIcon className='size-3.5' />,
    href: "/projects",
    key: "Projects",
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: "/about",
    key: "About",
  },
];

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      { href: "/", key: "Home" },
      {
        href: "/about",
        key: "About",
      },
      {
        href: "/tech",
        key: "Tech",
      },
    ],
  },
];

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: SITE_LINKEDIN_URL,
    title: 'LinkedIn',
    icon: Linkedin
  },
  {
    href: SITE_X_URL,
    title: 'X',
    icon: SiX
  },
]