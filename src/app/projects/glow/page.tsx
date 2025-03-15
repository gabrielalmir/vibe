import { ArrowLeft, Github, Terminal } from "lucide-react"
import Link from "next/link"

import { CliInstallation } from "@/components/cli-installation"
import { ModernTerminal } from "@/components/modern-terminal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GlowPage() {
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
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Vibe Glow</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A modern observability service with logging and metrics capabilities for legacy applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Go
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Gin
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Bubble Tea
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              SQLite
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>REST API</CardTitle>
            <CardDescription>Simple endpoints for logging and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>POST /log - Submit application logs</li>
              <li>GET /metrics - Retrieve system metrics</li>
              <li>GET /health - Service health check</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storage Options</CardTitle>
            <CardDescription>Flexible persistence for your data</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>File-based logging for simplicity</li>
              <li>SQLite database for structured data</li>
              <li>Configurable retention policies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Terminal UI</CardTitle>
            <CardDescription>Beautiful visualization with Bubble Tea</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Real-time log streaming</li>
              <li>Interactive metrics dashboards</li>
              <li>Filter and search capabilities</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">REST API Usage</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sending logs:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`curl -X POST http://localhost:8080/log \\
  -H "Content-Type: application/json" \\
  -d '{
    "level": "info",
    "message": "User login successful",
    "service": "auth-service",
    "timestamp": "2023-06-15T14:22:10Z",
    "metadata": {
      "userId": "user-123",
      "ip": "192.168.1.1"
    }
  }'`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Retrieving metrics:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`curl http://localhost:8080/metrics`}</code>
              </pre>
              <div className="mt-2 text-sm text-muted-foreground">
                Returns metrics in a format compatible with Prometheus and other monitoring tools.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Terminal UI</h2>
          <p className="text-muted-foreground mb-6">
            Vibe Glow includes a beautiful terminal UI built with Bubble Tea and Lip Gloss for visualizing logs and
            metrics.
          </p>
          <ModernTerminal type="glow" />
          <p className="text-sm text-muted-foreground mt-4 text-center">
            The Terminal UI provides an interactive way to monitor your application's health and logs in real-time.
          </p>
        </section>

        <CliInstallation project="glow" />
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
          <Link href="https://github.com/gabrielalmir/glow" target="_blank" rel="noopener noreferrer">
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

