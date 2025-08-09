"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'
import { cn } from "@/lib/utils"

export type Project = {
  title: string
  description: string
  image?: string
  tags?: string[]
  links?: {
    demo?: string
    code?: string
  }
}

type Props = {
  project?: Project
  className?: string
}

export default function ProjectCard({
  project = {
    title: "Project Title",
    description: "Short description of the project.",
    image: "/minimal-tech-preview.png",
    tags: ["Next.js"],
    links: { demo: "#", code: "#" },
  },
  className = "",
}: Props = {
  project: {
    title: "Project Title",
    description: "Short description of the project.",
    image: "/minimal-tech-preview.png",
    tags: ["Next.js"],
    links: { demo: "#", code: "#" },
  },
  className: "",
}) {
  const { title, description, image, tags = [], links } = project

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={image || "/placeholder.svg?height=720&width=1280&query=minimal%20tech%20preview"}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent dark:from-slate-950/80 dark:via-slate-900/20 dark:to-transparent opacity-100" />
      </div>

      <div className="p-4">
        <h3 className="text-slate-900 dark:text-slate-100 font-semibold">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-3">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-white/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          {links?.demo ? (
            <Button
              asChild
              size="sm"
              className="bg-sky-600/90 hover:bg-sky-600 text-white transition-transform motion-safe:hover:-translate-y-0.5"
            >
              <a href={links.demo} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          ) : null}
          {links?.code ? (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 transition-transform motion-safe:hover:-translate-y-0.5"
            >
              <a href={links.code} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
