"use client"

import { Check, Copy, Download, Terminal } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CliInstallation({ project }: { project: "glow" | "hush" }) {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const projectName = project === "glow" ? "Glow" : "Hush"
  const goInstallCmd = `go install github.com/gabrielalmir/${project}/cmd/vibe-${project}@latest`

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-xs">
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
          <Terminal className="h-5 w-5" />
          Install Vibe {projectName}
        </h3>
        <p className="text-sm text-muted-foreground">Choose your preferred installation method</p>
      </div>
      <Tabs defaultValue="go" className="p-6 pt-3">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="go">Go Install</TabsTrigger>
          <TabsTrigger value="binary">Binary Download</TabsTrigger>
        </TabsList>
        <TabsContent value="go" className="mt-4 space-y-4">
          <div className="rounded-md bg-muted p-4">
            <div className="flex items-center justify-between">
              <code className="text-sm font-mono">{goInstallCmd}</code>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(goInstallCmd, "go")}
                className="h-8 w-8 p-0"
              >
                {copied === "go" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>
              This will install the latest version of the CLI tool. Make sure your Go bin directory is in your PATH.
            </p>
            <p className="mt-2">After installation, you can run:</p>
            <pre className="mt-1 rounded-md bg-muted p-2 overflow-x-auto">
              <code>vibe-{project} --help</code>
            </pre>
          </div>
        </TabsContent>
        <TabsContent value="binary" className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button variant="outline" className="justify-start gap-2">
              <Download className="h-4 w-4" />
              Linux (x86_64)
            </Button>
            <Button variant="outline" className="justify-start gap-2">
              <Download className="h-4 w-4" />
              macOS (x86_64)
            </Button>
            <Button variant="outline" className="justify-start gap-2">
              <Download className="h-4 w-4" />
              Windows (x86_64)
            </Button>
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            <p>After downloading, extract the binary and move it to a directory in your PATH:</p>
            <div className="mt-2 space-y-2">
              <div>
                <p className="font-semibold">Linux/macOS:</p>
                <pre className="mt-1 rounded-md bg-muted p-2 overflow-x-auto">
                  <code>{`chmod +x ./vibe-${project}
sudo mv ./vibe-${project} /usr/local/bin/`}</code>
                </pre>
              </div>
              <div>
                <p className="font-semibold">Windows:</p>
                <p className="text-sm">
                  Extract the executable and add its location to your PATH environment variable.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

