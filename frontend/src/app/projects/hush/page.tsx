import { ArrowLeft, Github, Terminal } from "lucide-react"
import Link from "next/link"

import { CliInstallation } from "@/components/cli-installation"
import { ModernTerminal } from "@/components/modern-terminal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HushPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 max-w-5xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
        <div className="p-3 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <svg
            className="h-10 w-10 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 22V12c0-5.5 4.5-10 10-10s10 4.5 10 10v10" />
            <path d="M18 22V12a6 6 0 0 0-12 0v10" />
            <path d="M6 12v-2a6 6 0 0 1 12 0v2" />
          </svg>
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Vibe Hush</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A lightweight caching service to improve performance of legacy applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Go
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Gin
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              SQLite
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              CLI
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>REST API</CardTitle>
            <CardDescription>Simple endpoints for cache operations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>PUT /cache - Store data in cache</li>
              <li>GET /cache - Retrieve cached data</li>
              <li>DELETE /cache - Remove from cache</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Caching Mechanism</CardTitle>
            <CardDescription>Efficient and reliable storage</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>In-memory map for fast access</li>
              <li>SQLite persistence for durability</li>
              <li>Configurable TTL for entries</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Command Line Interface</CardTitle>
            <CardDescription>Powerful CLI for cache management</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Set, get, and delete cache entries</li>
              <li>View cache statistics</li>
              <li>Flush entire cache when needed</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">REST API Usage</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Storing data in cache:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`curl -X PUT http://localhost:8081/cache/user-profile-123 \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "preferences": {
      "theme": "dark",
      "notifications": true
    }
  }' \\
  -H "X-Cache-TTL: 3600"`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Retrieving cached data:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`curl http://localhost:8081/cache/user-profile-123`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Removing from cache:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`curl -X DELETE http://localhost:8081/cache/user-profile-123`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Terminal UI</h2>
          <p className="text-muted-foreground mb-6">
            Vibe Hush includes a beautiful terminal UI for monitoring cache performance and managing entries.
          </p>
          <ModernTerminal type="hush" />
          <p className="text-sm text-muted-foreground mt-4 text-center">
            The Terminal UI provides an interactive way to monitor your cache performance and manage entries.
          </p>
        </section>

        <CliInstallation project="hush" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-6 border rounded-lg mt-12">
        <div>
          <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
          <p className="text-muted-foreground">Check out the documentation for detailed usage instructions.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/docs">
            <Button className="gap-1">
              <Terminal className="h-4 w-4" />
              View Documentation
            </Button>
          </Link>
          <Link href="https://github.com/gabrielalmir/vibe-hush" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-1">
              <Github className="h-4 w-4" />
              View Source
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

