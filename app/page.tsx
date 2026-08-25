"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { SurfingGame } from "@/components/surfing-game"

export default function Home() {
  const [page, setPage] = useState("home")
  const [showGame, setShowGame] = useState(false)
  const spaceCountRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Easter egg: Press spacebar 3 times to open surfing game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if game is already showing or user is typing in an input
      if (showGame) return
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (e.code === "Space") {
        e.preventDefault()
        spaceCountRef.current += 1

        // Reset the timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        // If 3 spaces pressed, show the game
        if (spaceCountRef.current >= 3) {
          setShowGame(true)
          spaceCountRef.current = 0
        } else {
          // Reset counter after 1 second of no input
          timeoutRef.current = setTimeout(() => {
            spaceCountRef.current = 0
          }, 1000)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [showGame])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentPage={page} setPage={setPage} />

      {page === "home" && (
        <>
          <Hero setPage={setPage} />
          <About />
          <Services setPage={setPage} />
          <Contact />
        </>
      )}

      {page === "about" && <About />}

      {page === "services" && <Services setPage={setPage} />}

      {page === "contact" && <Contact />}

      <Footer setPage={setPage} />

      {/* Easter Egg Game */}
      <AnimatePresence>
        {showGame && <SurfingGame onClose={() => setShowGame(false)} />}
      </AnimatePresence>
    </div>
  )
}
