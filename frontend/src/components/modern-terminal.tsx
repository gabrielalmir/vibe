"use client"

import { useEffect, useState, useRef } from "react"
import { Terminal } from "lucide-react"

interface ModernTerminalProps {
  type: "glow" | "hush"
}

export function ModernTerminal({ type }: ModernTerminalProps) {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)

  const glowLines = [
    "$ vibe-glow status",
    "✓ Vibe Glow service is running",
    "  - Logs collected: 1,243",
    "  - Metrics endpoints: 4",
    "  - Storage: SQLite",
    "",
    "$ vibe-glow tui",
    "Launching Vibe Glow TUI...",
  ]

  const hushLines = [
    "$ vibe-hush status",
    "✓ Vibe Hush service is running",
    "  - Cache entries: 128",
    "  - Hit ratio: 94.2%",
    "  - Storage: In-memory with SQLite persistence",
    "",
    "$ vibe-hush get user-profile-123",
    "Retrieving from cache...",
  ]

  const lines = type === "glow" ? glowLines : hushLines

  // Animated TUI frames for Glow
  const glowFrames = [
    `┏━━━━━━━━━━━━━━ Vibe Glow Dashboard ━━━━━━━━━━━━━━┓
┃                                                ┃
┃  System Metrics                                ┃
┃  CPU: 42% ██████████████████████░░░░░░░░░░░░░  ┃
┃  MEM: 65% ████████████████████████████░░░░░░░  ┃
┃  DISK: 28% █████████████░░░░░░░░░░░░░░░░░░░░░  ┃
┃                                                ┃
┃  Recent Logs                                   ┃
┃  [INFO] auth-service: User login successful    ┃
┃  [WARN] payment-api: Slow database query       ┃
┃  [INFO] user-service: Profile updated          ┃
┃  [ERROR] email-service: Failed to send email   ┃
┃                                                ┃
┃  Log Levels                                    ┃
┃  INFO:  75% ███████████████████████████████░░  ┃
┃  WARN:  15% ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃  ERROR: 10% ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`,
    `┏━━━━━━━━━━━━━━ Vibe Glow Dashboard ━━━━━━━━━━━━━━┓
┃                                                ┃
┃  System Metrics                                ┃
┃  CPU: 45% ███████████████████████░░░░░░░░░░░░  ┃
┃  MEM: 67% █████████████████████████████░░░░░░  ┃
┃  DISK: 28% █████████████░░░░░░░░░░░░░░░░░░░░░  ┃
┃                                                ┃
┃  Recent Logs                                   ┃
┃  [INFO] auth-service: User logout              ┃
┃  [INFO] auth-service: User login successful    ┃
┃  [WARN] payment-api: Slow database query       ┃
┃  [INFO] user-service: Profile updated          ┃
┃                                                ┃
┃  Log Levels                                    ┃
┃  INFO:  78% ████████████████████████████████░  ┃
┃  WARN:  14% █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃  ERROR: 8%  ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`,
  ]

  // Animated TUI frames for Hush
  const hushFrames = [
    `┏━━━━━━━━━━━━━━ Vibe Hush Dashboard ━━━━━━━━━━━━━━┓
┃                                                ┃
┃  Cache Statistics                              ┃
┃  Total Entries: 128                            ┃
┃  Memory Usage: 2.4 MB                          ┃
┃  Hit Ratio: 94.2% ███████████████████████████  ┃
┃                                                ┃
┃  Cache Operations (last hour)                  ┃
┃  GET:    742 ████████████████████████████████  ┃
┃  SET:    86  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃  DELETE: 12  █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃                                                ┃
┃  Top Cache Keys                                ┃
┃  user-profile-123    (expires in 42m)          ┃
┃  product-list        (expires in 12m)          ┃
┃  dashboard-stats     (expires in 4m)           ┃
┃                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`,
    `┏━━━━━━━━━━━━━━ Vibe Hush Dashboard ━━━━━━━━━━━━━━┓
┃                                                ┃
┃  Cache Statistics                              ┃
┃  Total Entries: 129                            ┃
┃  Memory Usage: 2.5 MB                          ┃
┃  Hit Ratio: 94.5% ███████████████████████████  ┃
┃                                                ┃
┃  Cache Operations (last hour)                  ┃
┃  GET:    748 ████████████████████████████████  ┃
┃  SET:    87  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃  DELETE: 12  █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ┃
┃                                                ┃
┃  Top Cache Keys                                ┃
┃  user-profile-123    (expires in 41m)          ┃
┃  product-list        (expires in 11m)          ┃
┃  dashboard-stats     (expires in 3m)           ┃
┃                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`,
  ]

  const frames = type === "glow" ? glowFrames : hushFrames

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
      // Show animated TUI
      timeout = setTimeout(() => {
        setCurrentFrame((prev) => (prev + 1) % frames.length)
      }, 2000)
    }

    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, [text, currentLine, currentFrame, lines, frames])

  // Apply colorful styling to the TUI frames
  const colorizeFrame = (frame: string) => {
    return frame
      .replace(/┏|┓|┗|┛|━/g, '<span class="text-cyan-400">$&</span>')
      .replace(/┃/g, '<span class="text-cyan-400">$&</span>')
      .replace(/\[INFO\]/g, '<span class="text-green-400">$&</span>')
      .replace(/\[WARN\]/g, '<span class="text-yellow-400">$&</span>')
      .replace(/\[ERROR\]/g, '<span class="text-red-400">$&</span>')
      .replace(/█/g, '<span class="text-primary">$&</span>')
      .replace(/░/g, '<span class="text-primary/20">$&</span>')
      .replace(/(CPU|MEM|DISK|Hit Ratio):/g, '<span class="text-purple-400">$&</span>')
      .replace(/(GET|SET|DELETE):/g, '<span class="text-yellow-400">$&</span>')
      .replace(/\d+%/g, '<span class="text-green-400">$&</span>')
      .replace(/$$expires in \d+m$$/g, '<span class="text-blue-400">$&</span>')
  }

  return (
    <div className="rounded-lg border bg-black text-green-400 font-mono shadow-md overflow-hidden">
      <div className="border-b border-primary/20 bg-black/50 px-4 py-2 flex items-center gap-2">
        <Terminal className="h-4 w-4" />
        <div className="text-sm font-medium">terminal</div>
        <div className="flex ml-auto gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4 overflow-hidden" ref={terminalRef}>
        <div className="space-y-1">
          {lines.slice(0, currentLine).map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line || " "}
            </div>
          ))}
          {currentLine < lines.length ? (
            <div className="whitespace-pre-wrap flex">
              {text}
              <span className={`w-2 h-4 bg-green-400 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
            </div>
          ) : (
            <div
              className="whitespace-pre mt-2 text-xs md:text-sm"
              dangerouslySetInnerHTML={{ __html: colorizeFrame(frames[currentFrame]) }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

