"use client"

import { useEffect, useState } from "react"
import { Send, Mail } from "lucide-react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-3xl w-full space-y-12">
        <div className="space-y-8 text-center">
          <div
            className="opacity-0"
            style={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.3s forwards" : "none",
            }}
          >
            <p className="text-muted-foreground text-sm tracking-wide uppercase">Welcome</p>
          </div>

          <div
            className="opacity-0"
            style={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.5s forwards" : "none",
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-[1.1]">
              federicoschi
            </h1>
          </div>

          <div
            className="opacity-0"
            style={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.7s forwards" : "none",
            }}
          >
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              reach me out at any of the following contacts
            </p>
          </div>
        </div>

        <div
          className="opacity-0 flex flex-col sm:flex-row justify-center gap-4"
          style={{
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.9s forwards" : "none",
          }}
        >
          <div className="group relative p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 overflow-hidden flex-1 sm:max-w-xs">
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
              </div>
              <div className="space-y-2 pl-8">
                <a
                  href="mailto:me@federicoschi.systems"
                  className="block font-mono text-sm hover:text-accent transition-colors"
                >
                  me@federicoschi.systems
                </a>
                <div className="h-px bg-border" />
                <a
                  href="mailto:fede@coralmc.it"
                  className="block font-mono text-sm hover:text-accent transition-colors"
                >
                  fede@coralmc.it
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://t.me/federicoschidder"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 overflow-hidden flex-1 sm:max-w-xs"
          >
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <Send className="h-5 w-5 text-accent" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Telegram</p>
              </div>
              <p className="font-mono text-sm pl-8">@federicoschidder</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
