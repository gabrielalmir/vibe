import { BookOpen, Code, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
          <svg
            className="h-6 w-6 text-primary"
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
          <span>Vibe</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="/projects/glow" className="text-muted-foreground hover:text-foreground">
            Glow
          </Link>
          <Link href="/projects/hush" className="text-muted-foreground hover:text-foreground">
            Hush
          </Link>
          <Link href="/docs" className="font-bold">
            Documentation
          </Link>
        </nav>
      </header>

      <div className="flex-1 container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          <div className="space-y-4">
            <div className="font-medium text-sm">Getting Started</div>
            <nav className="flex flex-col space-y-1">
              <Link href="#installation" className="text-sm text-primary font-medium">
                Installation
              </Link>
              <Link href="#basic-usage" className="text-sm text-muted-foreground hover:text-foreground">
                Basic Usage
              </Link>
              <Link href="#configuration" className="text-sm text-muted-foreground hover:text-foreground">
                Configuration
              </Link>
            </nav>

            <div className="font-medium text-sm pt-4">CLI Reference</div>
            <nav className="flex flex-col space-y-1">
              <Link href="#glow-commands" className="text-sm text-muted-foreground hover:text-foreground">
                Vibe Glow Commands
              </Link>
              <Link href="#hush-commands" className="text-sm text-muted-foreground hover:text-foreground">
                Vibe Hush Commands
              </Link>
            </nav>

            <div className="font-medium text-sm pt-4">API Reference</div>
            <nav className="flex flex-col space-y-1">
              <Link href="#glow-api" className="text-sm text-muted-foreground hover:text-foreground">
                Glow API
              </Link>
              <Link href="#hush-api" className="text-sm text-muted-foreground hover:text-foreground">
                Hush API
              </Link>
            </nav>
          </div>

          <div className="space-y-12">
            <section id="installation" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
              <p className="text-muted-foreground">
                Vibe tools can be installed using Go's package manager or by downloading pre-compiled binaries.
              </p>

              <Tabs defaultValue="go" className="mt-6">
                <TabsList>
                  <TabsTrigger value="go">Go Install</TabsTrigger>
                  <TabsTrigger value="binary">Binary Download</TabsTrigger>
                </TabsList>
                <TabsContent value="go" className="space-y-4 mt-4">
                  <div className="rounded-md bg-muted p-4 relative">
                    <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                    <code className="text-sm font-mono">
                      go install github.com/gabrielalmir/vibe-glow/cmd/vibe-glow@latest
                    </code>
                  </div>
                  <div className="rounded-md bg-muted p-4 relative">
                    <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                    <code className="text-sm font-mono">
                      go install github.com/gabrielalmir/hush/cmd/vibe-hush@latest
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Make sure your Go bin directory is in your PATH. You can check its location with{" "}
                    <code>go env GOPATH</code>.
                  </p>
                </TabsContent>
                <TabsContent value="binary" className="space-y-4 mt-4">
                  <p className="text-sm">Download the appropriate binary for your platform:</p>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vibe Glow</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Button variant="outline" className="justify-start gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Linux (x86_64)
                      </Button>
                      <Button variant="outline" className="justify-start gap-2">
                        <ExternalLink className="h-4 w-4" />
                        macOS (x86_64)
                      </Button>
                      <Button variant="outline" className="justify-start gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Windows (x86_64)
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vibe Hush</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Button variant="outline" className="justify-start gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Linux (x86_64)
                      </Button>
                      <Button variant="outline" className="justify-start gap-2">
                        <ExternalLink className="h-4 w-4" />
                        macOS (x86_64)
                      </Button>
                      <Button variant="outline" className="justify-start gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Windows (x86_64)
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="space-y-2 mt-4">
                    <p className="font-semibold text-sm">Linux/macOS:</p>
                    <div className="rounded-md bg-muted p-4 relative">
                      <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0">
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy code</span>
                      </Button>
                      <code className="text-sm font-mono whitespace-pre-wrap">
                        chmod +x ./vibe-glow sudo mv ./vibe-glow /usr/local/bin/
                      </code>
                    </div>

                    <p className="font-semibold text-sm mt-4">Windows:</p>
                    <p className="text-sm text-muted-foreground">
                      Extract the executable and add its location to your PATH environment variable.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section id="basic-usage" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Basic Usage</h2>
              <p className="text-muted-foreground">Here's how to get started with Vibe tools after installation.</p>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vibe Glow</h3>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm font-mono whitespace-pre-wrap">
                      # Start the Glow service vibe-glow start # Check service status vibe-glow status # View logs in
                      the terminal UI vibe-glow tui # Get help vibe-glow --help
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Vibe Hush</h3>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm font-mono whitespace-pre-wrap">
                      # Start the Hush service vibe-hush start # Store data in cache vibe-hush set user-123 '
                      {'name":"John Doe'}' --ttl=3600 # Retrieve data from cache vibe-hush get user-123 # Get help
                      vibe-hush --help
                    </code>
                  </div>
                </div>
              </div>
            </section>

            <section id="configuration" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Configuration</h2>
              <p className="text-muted-foreground">
                Vibe tools can be configured using configuration files or environment variables.
              </p>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Configuration File</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Create a <code>config.yaml</code> file in your project directory:
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm font-mono whitespace-pre-wrap">
                      # Vibe Glow configuration glow: port: 8080 storage: type: sqlite path: ./logs.db log_level: info #
                      Vibe Hush configuration hush: port: 8081 storage: type: sqlite path: ./cache.db ttl: 3600
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Environment Variables</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    You can also configure Vibe tools using environment variables:
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm font-mono whitespace-pre-wrap">
                      # Vibe Glow environment variables export VIBE_GLOW_PORT=8080 export VIBE_GLOW_STORAGE_TYPE=sqlite
                      export VIBE_GLOW_STORAGE_PATH=./logs.db export VIBE_GLOW_LOG_LEVEL=info # Vibe Hush environment
                      variables export VIBE_HUSH_PORT=8081 export VIBE_HUSH_STORAGE_TYPE=sqlite export
                      VIBE_HUSH_STORAGE_PATH=./cache.db export VIBE_HUSH_DEFAULT_TTL=3600
                    </code>
                  </div>
                </div>
              </div>
            </section>

            <section id="glow-commands" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Vibe Glow Commands</h2>
              <p className="text-muted-foreground">Complete reference for all Vibe Glow CLI commands.</p>

              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Command</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Example</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">start</TableCell>
                    <TableCell>Start the Glow service</TableCell>
                    <TableCell className="font-mono">vibe-glow start</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">status</TableCell>
                    <TableCell>Check service status</TableCell>
                    <TableCell className="font-mono">vibe-glow status</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">tui</TableCell>
                    <TableCell>Launch terminal UI</TableCell>
                    <TableCell className="font-mono">vibe-glow tui</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">log</TableCell>
                    <TableCell>Send a log entry</TableCell>
                    <TableCell className="font-mono">vibe-glow log "User logged in"</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">metrics</TableCell>
                    <TableCell>View current metrics</TableCell>
                    <TableCell className="font-mono">vibe-glow metrics</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>

            <section id="hush-commands" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Vibe Hush Commands</h2>
              <p className="text-muted-foreground">Complete reference for all Vibe Hush CLI commands.</p>

              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Command</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Example</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">start</TableCell>
                    <TableCell>Start the Hush service</TableCell>
                    <TableCell className="font-mono">vibe-hush start</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">status</TableCell>
                    <TableCell>Check service status</TableCell>
                    <TableCell className="font-mono">vibe-hush status</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">set</TableCell>
                    <TableCell>Store data in cache</TableCell>
                    <TableCell className="font-mono">vibe-hush set key value --ttl=3600</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">get</TableCell>
                    <TableCell>Retrieve data from cache</TableCell>
                    <TableCell className="font-mono">vibe-hush get key</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">delete</TableCell>
                    <TableCell>Remove data from cache</TableCell>
                    <TableCell className="font-mono">vibe-hush delete key</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">flush</TableCell>
                    <TableCell>Clear all cached data</TableCell>
                    <TableCell className="font-mono">vibe-hush flush</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>

            <section id="glow-api" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Glow API Reference</h2>
              <p className="text-muted-foreground">REST API endpoints for Vibe Glow.</p>

              <div className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      <span>POST /log</span>
                    </CardTitle>
                    <CardDescription>Submit application logs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Request Body:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">{`{
  "level": "info",
  "message": "User login successful",
  "service": "auth-service",
  "timestamp": "2023-06-15T14:22:10Z",
  "metadata": {
    "userId": "user-123",
    "ip": "192.168.1.1"
  }
}`}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Response:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">{`{
  "status": "Log saved successfully"
}`}</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      <span>GET /metrics</span>
                    </CardTitle>
                    <CardDescription>Retrieve system metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Response:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">{`{
  "cpu": {
    "usage": 42.5,
    "cores": 8
  },
  "memory": {
    "total": 16384,
    "used": 8192,
    "percentage": 50.0
  },
  "logs": {
    "count": 1243,
    "by_level": {
      "info": 932,
      "warn": 186,
      "error": 125
    }
  }
}`}</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="hush-api" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Hush API Reference</h2>
              <p className="text-muted-foreground">REST API endpoints for Vibe Hush.</p>

              <div className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      <span>PUT /cache/:key</span>
                    </CardTitle>
                    <CardDescription>Store data in cache</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Headers:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">X-Cache-TTL: 3600</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Request Body:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">{`{
  "name": "John Doe",
  "email": "john@example.com",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}`}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Response:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">{`{
  "status": "ok"
}`}</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      <span>GET /cache/:key</span>
                    </CardTitle>
                    <CardDescription>Retrieve data from cache</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Response:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">{`{
  "name": "John Doe",
  "email": "john@example.com",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}`}</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      <span>DELETE /cache/:key</span>
                    </CardTitle>
                    <CardDescription>Remove data from cache</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Response:</h4>
                        <div className="rounded-md bg-muted p-4">
                          <code className="text-sm font-mono">{`{
  "status": "ok"
}`}</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

