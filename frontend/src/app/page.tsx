import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

import { ProjectCard } from "@/components/project-card"
import { TerminalDemo } from "@/components/terminal-demo"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Open Source</div>
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-linear-to-b from-primary/20 to-primary/10 p-3">
                  <svg
                    className="h-full w-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a8 8 0 0 1-8-8c0-3.502 2.667-8.334 8-14 5.333 5.666 8 10.498 8 14a8 8 0 0 1-8 8z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Vibe</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  An ecosystem of modern tools and services designed to breathe new life into legacy projects.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/docs">
                  <Button className="gap-1">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/gabrielalmir" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-1">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Modernize legacy systems with our suite of tools and services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <ProjectCard
                title="Vibe Glow"
                description="Observability service with logging and metrics capabilities"
                icon="activity"
                href="/projects/glow"
                status="in-development"
              />
              <ProjectCard
                title="Vibe Hush"
                description="Efficient caching service with REST API and CLI tools"
                icon="database"
                href="/projects/hush"
                status="in-development"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terminal UI</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our tools feature beautiful terminal interfaces built with Bubble Tea
                </p>
              </div>
              <div className="w-full max-w-3xl mx-auto mt-8">
                <TerminalDemo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vibe Project. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="https://github.com/gabrielalmir" className="text-sm text-muted-foreground hover:underline">
              GitHub
            </Link>
            <Link href="/docs" className="text-sm text-muted-foreground hover:underline">
              Documentation
            </Link>
            <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
              Projects
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
