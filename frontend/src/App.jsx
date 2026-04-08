import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/favicon.svg" alt="LMS" />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-heading">LMS</h1>
                <Badge>Beta</Badge>
              </div>
              <div className="text-xs text-muted-foreground">Learn. Build. Grow.</div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Home</Button>
            <Button variant="ghost" size="sm">Courses</Button>
            <Button variant="ghost" size="sm">Pricing</Button>
            <Button size="sm">Sign in</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-heading mb-4">A modern learning platform for developers</h2>
            <p className="text-muted-foreground mb-6">
              Hands-on courses, real projects, and expert mentors — everything you need to level up.
            </p>

            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Get started</Button>
                </TooltipTrigger>
                <TooltipContent>Start with a free trial</TooltipContent>
              </Tooltip>

              <Button variant="outline">Browse courses</Button>
            </div>

            <div className="mt-8 w-full max-w-md">
              <Card>
                <CardHeader>
                  <CardTitle>Join our newsletter</CardTitle>
                  <CardDescription>Get learning tips and new course announcements.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input placeholder="Email address" type="email" />
                    <Button>Subscribe</Button>
                  </div>
                </CardContent>
                <CardFooter />
              </Card>
            </div>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-2xl font-semibold text-indigo-700">
                Featured Course
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-10" />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Interactive labs</CardTitle>
              <CardDescription>Learn by building real projects with guided tasks.</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Button size="sm">Explore</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expert mentors</CardTitle>
              <CardDescription>Get feedback from industry professionals.</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Button size="sm">Meet mentors</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Career support</CardTitle>
              <CardDescription>Resume reviews, interview prep, and job guidance.</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Button size="sm">Learn more</Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-muted-foreground">© {new Date().getFullYear()} LMS — Built with shadcn/ui</div>
      </footer>
    </div>
  )
}

export default App
