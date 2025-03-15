"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TerminalDemo() {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)

  const lines = [
    "$ vibe glow status",
    "✓ Vibe Glow service is running",
    "  - Logs collected: 1,243",
    "  - Metrics endpoints: 4",
    "  - Storage: SQLite",
    "",
    "$ vibe glow tui",
    "Launching Vibe Glow TUI...",
  ]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    // Type out each line
    if (currentLine < lines.length) {
      const line = lines[currentLine]
      if (text.length < line.length) {
        timeout = setTimeout(
          () => {
            setText(line.substring(0, text.length + 1))
          },
          50 + Math.random() * 50,
        )
      } else {
        timeout = setTimeout(() => {
          setText("")
          setCurrentLine((prev) => prev + 1)
        }, 1000)
      }
    } else {
      // Reset animation after completion
      timeout = setTimeout(() => {
        setText("")
        setCurrentLine(0)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, [text, currentLine])

  return (
    <Card className="border-primary/20 bg-black text-green-400 font-mono">
      <CardHeader className="border-b border-primary/20 bg-black/50">
        <CardTitle className="text-sm flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          terminal
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 overflow-hidden">
        <div className="space-y-1">
          {lines.slice(0, currentLine).map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line || " "}
            </div>
          ))}
          <div className="whitespace-pre-wrap flex">
            {text}
            <span className={`w-2 h-4 bg-green-400 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

