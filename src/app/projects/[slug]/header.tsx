"use client";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { buttonVariants } from "~/components/ui/button";
import { Link } from "~/components/ui/link";
import { GITHUB_USERNAME } from "~/lib/constants";
import { cn } from "~/lib/utils";
import type { ProjectCardProps } from "../types";

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

type HeaderProps = ProjectCardProps;

const Header = (props: HeaderProps) => {
  const { name, description, homepage, github, githubBackend, githubFrontend } =
    props;
  console.log(github);

  const repo = github?.split("/").pop();
  const frontendrepo = githubFrontend?.split("/").pop();
  const backendrepo = githubBackend?.split("/").pop();

  return (
    <div className="space-y-8 pt-10">
      <motion.div
        className="flex items-center gap-3"
        initial={animation.hide}
        animate={animation.show}
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h2 className="text-muted-foreground">{description}</h2>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {homepage ? (
          <Link href={homepage} className={cn(buttonVariants(), "group")}>
            Visit Website
            <ArrowUpRightIcon className="size-5 transition-transform group-hover:-rotate-12" />
          </Link>
        ) : githubFrontend && githubBackend ? (
          <span
            className={cn(buttonVariants(), "opacity-50")}
          >
            Not hosted
          </span>
        ) : null}

        {github && (
          <Link href={github} className={cn(buttonVariants(), "group")}>
            {GITHUB_USERNAME}/{repo}
            <ArrowUpRightIcon className="size-5 transition-transform group-hover:-rotate-12" />
          </Link>
        )}
        {githubFrontend && (
          <Link href={githubFrontend} className={cn(buttonVariants(), "group")}>
            {GITHUB_USERNAME}/{frontendrepo}
            <ArrowUpRightIcon className="size-5 transition-transform group-hover:-rotate-12" />
          </Link>
        )}
        {githubBackend && (
          <Link href={githubBackend} className={cn(buttonVariants(), "group")}>
            {GITHUB_USERNAME}/{backendrepo}
            <ArrowUpRightIcon className="size-5 transition-transform group-hover:-rotate-12" />
          </Link>
        )}
      </motion.div>
    </div>
  );
};
export default Header;
