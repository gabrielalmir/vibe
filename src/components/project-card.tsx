import { Activity, ArrowRight, Database } from 'lucide-react'
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  icon: "activity" | "database"
  href: string
  status?: "in-development" | "stable" | "beta"
}

export function ProjectCard({ title, description, icon, href, status }: ProjectCardProps) {
  const Icon = icon === "activity" ? Activity : Database

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          {status === "in-development" && (
            <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
              In Development
            </Badge>
          )}
          {status === "beta" && (
            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
              Beta
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          {icon === "activity" ? (
            <>
              <li>REST API for logging and metrics</li>
              <li>Terminal UI for visualization</li>
              <li>File or SQLite storage options</li>
            </>
          ) : (
            <>
              <li>Fast in-memory caching with persistence</li>
              <li>Simple REST API interface</li>
              <li>Command-line tools for management</li>
            </>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button variant="outline" className="w-full gap-1 group">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
