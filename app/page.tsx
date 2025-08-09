"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import { Space_Grotesk } from 'next/font/google'
import { useTheme } from "next-themes"
import { Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown, Medal, Briefcase, Moon, Sun, Loader2, CheckCircle2, ExternalLinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export default function Page() {
  // Smooth scroll for hash links
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target instanceof HTMLAnchorElement) {
        const href = target.getAttribute("href")
        if (href?.startsWith("#")) {
          e.preventDefault()
          const el = document.querySelector(href)
          el?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  // Smooth landing animation
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const projects: Project[] = [
    {
      title: "Skin Assist: AI Skin Disease Detection",
      description:
        "Django web app that detects 10+ skin diseases with 95% accuracy using a fine-tuned VGG-19 model. Includes healthy skin verification, NLP chatbot, and dermatologist locator.",
      image: "/Skin%20assit.jpg",
      tags: ["Python", "Django", "VGG-19", "Machine Learning", "NLP"],
      links: { demo: "#", code: "https://github.com/Pranaypatil95/Skin-Assist" },
    },
    {
      title: "Decentralized Voting System",
      description:
        "Secure, tamper-proof voting system using Ethereum smart contracts. Real-time vote tracking frontend in React, handling 1,000+ votes with zero discrepancies.",
      image: "/voting%20system.jpg",
      tags: ["Solidity", "React.js", "Web3.js", "Ethereum"],
      links: { demo: "#", code: "#" },
    },
    {
      title: "Employee Management System",
      description:
        "C++ application managing over 10,000 employee records using file-based storage and O(log n) search. Ensures 100% data integrity via hash-based duplicate prevention.",
      image: "/employee%20management.jpg",
      tags: ["C++", "OOP", "File Handling", "Data Structures"],
      links: { demo: "#", code: "#" },
    },
  ]

  const timeline: TimelineItem[] = [
    {
      title: "Software Engineer Intern",
      org: "Engagely.Ai",
      date: "May 2025 — Present",
      description:
        "Architected resilient backend frameworks, augmented API ecosystems, and orchestrated data-driven UI metrics to elevate operational transparency, enforce regulatory compliance, and optimize governance within live chat ecosystems",
      icon: "work",
    },
    {
      title: "Web Developer",
      org: "Freelance",
      date: "Jan 2023 — Aug 2023",
      description:
        "Developed dynamic web applications using React, Node.js, and MongoDB to enhance user experience and streamline business operations.",
      icon: "work",
    },
    {
      title: "Bachelor of Science in Information Technology",
      org: "Mumbai University",
      date: "2022 — 2025",
      description: "Completed Bachelor of Science in Information Technology with a CGPA of 8.5 .",
      icon: "cert",
    },
    {
      title: "Winner of Avishkar 2024",
      org: "Mumbai University",
      date: "2024",
      description: "Won the Avishkar 2024 award for the best project in the field of Information Technology.",
      icon: "trophy",
    },
    {
      title: "Best International Multi-Disciplinary Research Journal",
      org: "",
      date: "2024",
      description: "Published a research paper in an international multi-disciplinary research journal.",
      icon: "trophy",
    },
  ]

  const skills = [
    // AI/ML
    "Python",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "RAG",
    "Vector DBs",
    "AI SDK",
    "OpenAI",
    // Web
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "tRPC",
    "GraphQL",
    // Data
    "MongoDB",
    "PostgreSQL",
    // DevOps
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    
  ]

  const { resolvedTheme } = useTheme()
  const bgColors = useMemo(() => {
    const dark = resolvedTheme === "dark"
    return {
      lineColor: dark ? "rgba(125,211,252,0.15)" : "rgba(99,102,241,0.25)",
      dotColor: dark ? "rgba(148,163,184,0.18)" : "rgba(2,132,199,0.25)",
    }
  }, [resolvedTheme])

  return (
    <div
      className={cn(
        "min-h-dvh transition-colors duration-500 bg-gradient-to-b from-white via-sky-50/60 to-violet-50/60 dark:from-slate-950 dark:via-slate-950 dark:to-black",
        spaceGrotesk.className
      )}
    >
      <header className="sticky top-0 z-40 border-b border-white/50 dark:border-slate-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="#home" className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            {"<"} PX Code {"/>"}
            <span className="sr-only">Home</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <Link href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-1.5">
            <IconButton href="https://github.com/Pranaypatil95?tab=repositories" label="GitHub">
              <Github className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </IconButton>
            <IconButton href="https://linkedin.com" label="LinkedIn">
              <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </IconButton>
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main
        id="home"
        className={cn(
          "relative transform-gpu transition-all duration-700 motion-safe:will-change-transform",
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        )}
      >
        <div className="absolute inset-0 -z-10">
          <AnimatedBg density={0.6} lineColor={bgColors.lineColor} dotColor={bgColors.dotColor} />
        </div>

        {/* Hero */}
        <Section id="hero" className="pt-16 pb-10">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 backdrop-blur px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
                <Code2 className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                Full‑Stack + AI/ML Developer
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Building Scalable and Smart Web Solutions
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                I craft high‑performance, AI‑enhanced web apps with elegant UX, modern architectures, and cloud‑native tooling.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-600/90 hover:bg-sky-600 text-white transition-transform motion-safe:hover:-translate-y-0.5"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur transition-transform motion-safe:hover:-translate-y-0.5"
                >
                  <Link href="#contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-transform motion-safe:hover:-translate-y-0.5"
                >
                  <Link href="#" aria-label="Download Resume">
                    Download Resume
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Performance", "Scalability", "AI/ML", "Generative AI"].map((pill) => (
                  <Badge
                    key={pill}
                    variant="secondary"
                    className="rounded-full bg-white/70 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border border-white/80 dark:border-slate-700"
                  >
                    {pill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur shadow-sm ring-1 ring-sky-100/60 dark:ring-sky-900/20 transition-transform motion-safe:hover:scale-[1.01]">
                <Image
                  src="/Untitled design.png"
                  alt="Professional headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 mx-auto grid grid-cols-3 gap-2 opacity-90">
                {["Next.js", "Node.js", "AI/ML"].map((k) => (
                  <div
                    key={k}
                    className="text-xs text-slate-700 dark:text-slate-300 border border-white/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur px-3 py-2 rounded-xl text-center"
                  >
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-center text-slate-500 dark:text-slate-400">
            <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
            <span className="sr-only">Scroll</span>
          </div>
        </Section>

        {/* About */}
        <Section id="about" title="About Me" subtitle="What I do and the tools I use">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Who I am</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I specialize in designing and delivering reliable, scalable systems with a delightful user experience.
                My work blends performance engineering, thoughtful design systems, pragmatic architecture, and AI‑first product thinking.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Core Focus</h3>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                <li>- API design (REST, GraphQL, tRPC)</li>
                <li>- Databases (MongoDB, Postgres), caching</li>
                <li>- AI & ML: LLM apps, RAG, vector search</li>
                <li>- DevOps: Docker, CI/CD, Observability</li>
              </ul>
            </Card>
          </div>
          <Card className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1 rounded-full border border-white/70 dark:border-slate-700 bg-gradient-to-b from-white/90 to-white/60 dark:from-slate-900/70 dark:to-slate-900/50 text-slate-700 dark:text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Selected Projects" subtitle="Shipped work with modern stacks and patterns">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience & Certifications" subtitle="A timeline of roles and achievements">
          <Timeline items={timeline} />
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get in Touch" subtitle="Have a project in mind? Let’s talk.">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Let’s build something</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                I’m available for product engineering, performance consulting, and platform architecture. Share a few
                details and I’ll reply within 24 hours.
              </p>
              <div className="mt-4 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:pranaypatil222f@gmail.com" className="hover:underline">
                Pranaypatil222f@gmail.com
                </a>
              </div>
            </Card>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Full‑Stack Developer. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://github.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ---------- UI helpers (inline components) ---------- */

function IconButton({
  href = "#",
  label = "Open link",
  children = null,
}: {
  href?: string
  label?: string
  children?: React.ReactNode
} = { href: "#", label: "Open link", children: null }) {
  return (
    <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
      <Link href={href} aria-label={label}>
        {children}
      </Link>
    </Button>
  )
}

function Section({
  id = "",
  title = "",
  subtitle = "",
  className = "",
  children = null,
}: {
  id?: string
  title?: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
} = { id: "", title: "", subtitle: "", className: "", children: null }) {
  return (
    <section id={id} className={cn("container mx-auto px-4 py-16 md:py-24", className)}>
      {(title || subtitle) && (
        <div className="mb-10">
          {title ? <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2> : null}
          {subtitle ? <p className="text-slate-600 dark:text-slate-400 mt-2">{subtitle}</p> : null}
        </div>
      )}
      {children}
    </section>
  )
}

function Card({ className = "", children = null }: { className?: string; children?: React.ReactNode } = { className: "", children: null }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm motion-safe:transition-all motion-safe:hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  )
}

/* ---------- Animated background ---------- */

function AnimatedBg({
  density = 0.6,
  dotColor = "rgba(100,116,139,0.18)",
  lineColor = "rgba(125,211,252,0.22)",
  speed = 0.4,
}: {
  density?: number
  dotColor?: string
  lineColor?: string
  speed?: number
} = { density: 0.6, dotColor: "rgba(100,116,139,0.18)", lineColor: "rgba(125,211,252,0.22)", speed: 0.4 }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reqRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1

    type P = { x: number; y: number; vx: number; vy: number }
    let points: P[] = []
    const mouse = { x: -1000, y: -1000 }

    const init = () => {
      const count = Math.max(40, Math.floor((width * height) / (12000 / Math.max(0.2, density))))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }))
    }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // connections
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            const alpha = 1 - dist / 120
            ctx.strokeStyle = lineColor
            ctx.globalAlpha = alpha * 0.8
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      // dots
      for (const p of points) {
        ctx.fillStyle = dotColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // update
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy

        // gentle mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 120) {
          const f = (120 - d) / 120
          p.vx += (dx / (d || 1)) * f * 0.02
          p.vy += (dy / (d || 1)) * f * 0.02
        }

        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10
      }

      reqRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    resize()
    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseleave", onMouseLeave)
    reqRef.current = requestAnimationFrame(draw)

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [density, dotColor, lineColor, speed])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />
}

/* ---------- Theme toggle ---------- */

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = (mounted ? resolvedTheme : theme) === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun className="h-5 w-5 text-slate-200" /> : <Moon className="h-5 w-5 text-slate-700" />}
    </Button>
  )
}

/* ---------- Projects ---------- */

type Project = {
  title: string
  description: string
  image?: string
  tags?: string[]
  links?: { demo?: string; code?: string }
}

function ProjectCard({
  project = {
    title: "Project Title",
    description: "Short description of the project.",
    image: "/minimal-tech-preview.png",
    tags: ["Next.js"],
    links: { demo: "#", code: "#" },
  },
  className = "",
}: { project?: Project; className?: string } = {
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
                <ExternalLinkIcon className="h-4 w-4 mr-2" />
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

/* ---------- Timeline ---------- */

type TimelineItem = {
  title: string
  org: string
  date: string
  description: string
  icon?: "work" | "cert" | "trophy"
}

function Timeline({
  items = [
    { title: "Role", org: "Company", date: "2020 — Now", description: "Impact and responsibilities.", icon: "work" },
  ],
  className = "",
}: {
  items?: TimelineItem[]
  className?: string
} = {
  items: [{ title: "Role", org: "Company", date: "2020 — Now", description: "Impact and responsibilities.", icon: "work" }],
  className: "",
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-sky-200 via-white dark:via-slate-900 to-violet-200 dark:from-slate-800 dark:to-slate-800" aria-hidden />
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="relative pl-10">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white dark:bg-slate-900 border border-sky-200 dark:border-slate-700 shadow-sm" />
            <div className="rounded-2xl border border-white/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-white/80 dark:border-slate-700">
                    {item.icon === "cert" ? (
                      <span className="inline-flex items-center gap-1">
                        <Medal className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                        Certification
                      </span>
                    ) : item.icon === "trophy" ? (
                      <span className="inline-flex items-center gap-1">
                        {/* You may want to use a trophy icon from lucide-react or similar */}
                        <svg className="h-3.5 w-3.5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M7 4v2a5 5 0 0 0 10 0V4M4 4h16v2a8 8 0 0 1-16 0V4z" /></svg>
                        Award
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                        Experience
                      </span>
                    )}
                  </Badge>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{item.date}</div>
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.org}</div>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Contact form (client-only, floating labels) ---------- */

function ContactForm() {
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  async function onSubmit(formData: FormData) {
    setError(null)
    setPending(true)
    setSuccess(false)
    try {
      // Simulate async send; replace with a server action or API call later
      await new Promise((r) => setTimeout(r, 800))
      setSuccess(true)
      formRef.current?.reset()
      console.log("Contact submission:", {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      })
    } catch (e) {
      setError("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card>
      <form
        ref={formRef}
        action={(fd) => {
          void onSubmit(fd)
        }}
        className="space-y-4"
      >
        <FloatingField label="Name" name="name" />
        <FloatingField label="Email" name="email" type="email" />
        <FloatingTextArea label="Message" name="message" rows={5} />
        <div className="pt-2 flex items-center gap-3">
          <Button type="submit" className="bg-sky-600/90 hover:bg-sky-600 text-white" disabled={pending}>
            {pending ? (
              <span className="inline-flex items-center">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
          {success ? (
            <div className="inline-flex items-center text-sm text-emerald-600">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Thanks! I’ll get back to you within 24 hours.
            </div>
          ) : error ? (
            <div className="text-sm text-rose-600">{error}</div>
          ) : null}
        </div>
      </form>
    </Card>
  )
}

function FloatingField({
  label = "Label",
  name = "field",
  type = "text",
  className = "",
}: {
  label?: string
  name?: string
  type?: string
  className?: string
} = { label: "Label", name: "field", type: "text", className: "" }) {
  return (
    <div className={cn("relative", className)}>
      <Input
        id={name}
        name={name}
        type={type}
        className="peer h-12 rounded-xl bg-white/70 dark:bg-slate-900/60 border-white/70 dark:border-slate-800 placeholder-transparent focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-slate-100"
        placeholder={label}
        required
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-slate-500 dark:text-slate-400 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-600 dark:peer-focus:text-slate-300 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}

function FloatingTextArea({
  label = "Message",
  name = "message",
  rows = 5,
  className = "",
}: {
  label?: string
  name?: string
  rows?: number
  className?: string
} = { label: "Message", name: "message", rows: 5, className: "" }) {
  return (
    <div className={cn("relative", className)}>
      <Textarea
        id={name}
        name={name}
        rows={rows}
        className="peer rounded-xl bg-white/70 dark:bg-slate-900/60 border-white/70 dark:border-slate-800 placeholder-transparent focus:bg-white dark:focus:bg-slate-900 min-h-[140px] text-slate-900 dark:text-slate-100"
        placeholder={label}
        required
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-3 top-4 bg-transparent px-1 text-slate-500 dark:text-slate-400 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-600 dark:peer-focus:text-slate-300 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}
