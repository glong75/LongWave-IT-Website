"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Obstacle {
  id: number
  x: number
  type: "rock" | "shark" | "seaweed"
}

interface SurfingGameProps {
  onClose: () => void
}

export function SurfingGame({ onClose }: SurfingGameProps) {
  const [gameState, setGameState] = useState<"start" | "playing" | "gameover">("start")
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [surferY, setSurferY] = useState(50)
  const [obstacles, setObstacles] = useState<Obstacle[]>([])
  const gameLoopRef = useRef<number | null>(null)
  const obstacleIdRef = useRef(0)

  const jump = useCallback(() => {
    if (gameState === "playing") {
      setSurferY((prev) => Math.max(prev - 25, 10))
    }
  }, [gameState])

  const duck = useCallback(() => {
    if (gameState === "playing") {
      setSurferY((prev) => Math.min(prev + 25, 80))
    }
  }, [gameState])

  const startGame = () => {
    setGameState("playing")
    setScore(0)
    setSurferY(50)
    setObstacles([])
    obstacleIdRef.current = 0
  }

  // Game loop
  useEffect(() => {
    if (gameState !== "playing") return

    const gameLoop = () => {
      // Move obstacles
      setObstacles((prev) => {
        const updated = prev
          .map((obs) => ({ ...obs, x: obs.x - 1.2 }))
          .filter((obs) => obs.x > -10)

        // Check collision
        updated.forEach((obs) => {
          if (obs.x > 5 && obs.x < 20) {
            const obsY = obs.type === "shark" ? 60 : obs.type === "seaweed" ? 70 : 50
            if (Math.abs(surferY - obsY) < 20) {
              setGameState("gameover")
              setHighScore((prev) => Math.max(prev, score))
            }
          }
        })

        return updated
      })

      // Spawn obstacles
      if (Math.random() < 0.008) {
        const types: ("rock" | "shark" | "seaweed")[] = ["rock", "shark", "seaweed"]
        setObstacles((prev) => [
          ...prev,
          {
            id: obstacleIdRef.current++,
            x: 100,
            type: types[Math.floor(Math.random() * types.length)],
          },
        ])
      }

      // Gravity - slowly return to middle
      setSurferY((prev) => {
        if (prev < 50) return prev + 1
        if (prev > 50) return prev - 0.5
        return prev
      })

      // Increase score
      setScore((prev) => prev + 1)

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, surferY, score])

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault()
        jump()
      } else if (e.code === "ArrowDown") {
        e.preventDefault()
        duck()
      } else if (e.code === "Escape") {
        onClose()
      } else if (e.code === "Enter" && gameState !== "playing") {
        startGame()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [jump, duck, onClose, gameState])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-2xl">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute -top-12 right-0"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-primary">LongWave Surfer</h2>
              <p className="text-xs text-muted-foreground">
                Press Space/Up to jump, Down to duck
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">{score}</p>
              <p className="text-xs text-muted-foreground">High: {highScore}</p>
            </div>
          </div>

          {/* Game Area */}
          <div
            className="relative h-64 bg-gradient-to-b from-sky-900 via-blue-800 to-blue-950 overflow-hidden cursor-pointer"
            onClick={jump}
          >
            {/* Waves Background */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-4 bg-blue-600/30"
                  style={{ top: `${30 + i * 25}%` }}
                  animate={{
                    x: [0, -100, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Water Line */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent" />

            {/* Surfer */}
            <motion.div
              className="absolute left-[10%] w-16 h-16"
              style={{ top: `${surferY}%` }}
              animate={{ y: gameState === "playing" ? [0, -3, 0] : 0 }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <div className="relative">
                {/* Surfboard */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform -rotate-6" />
                {/* Surfer Body */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-8 bg-foreground rounded-t-full" />
                {/* Surfer Head */}
                <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-5 h-5 bg-foreground rounded-full" />
                {/* Surfer Arms */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10 h-2 bg-foreground rounded-full" />
              </div>
            </motion.div>

            {/* Obstacles */}
            {obstacles.map((obs) => (
              <motion.div
                key={obs.id}
                className="absolute w-10 h-10"
                style={{
                  left: `${obs.x}%`,
                  top: obs.type === "shark" ? "60%" : obs.type === "seaweed" ? "70%" : "50%",
                }}
              >
                {obs.type === "rock" && (
                  <div className="w-10 h-10 bg-gray-600 rounded-full shadow-lg" />
                )}
                {obs.type === "shark" && (
                  <div className="relative">
                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-gray-400 absolute -top-2 left-1/2 -translate-x-1/2" />
                    <div className="w-10 h-6 bg-gray-500 rounded-full" />
                  </div>
                )}
                {obs.type === "seaweed" && (
                  <div className="flex gap-1">
                    <div className="w-2 h-10 bg-green-600 rounded-full" />
                    <div className="w-2 h-8 bg-green-700 rounded-full mt-2" />
                    <div className="w-2 h-10 bg-green-600 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Start Screen */}
            {gameState === "start" && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    LongWave Surfer
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Avoid obstacles and ride the wave!
                  </p>
                  <Button onClick={startGame}>Start Game</Button>
                </div>
              </div>
            )}

            {/* Game Over Screen */}
            {gameState === "gameover" && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-destructive mb-2">
                    Wipeout!
                  </h3>
                  <p className="text-foreground text-xl mb-1">Score: {score}</p>
                  <p className="text-muted-foreground mb-4">
                    High Score: {highScore}
                  </p>
                  <Button onClick={startGame}>Try Again</Button>
                </div>
              </div>
            )}
          </div>

          {/* Controls hint */}
          <div className="p-3 bg-secondary/50 text-center">
            <p className="text-xs text-muted-foreground">
              <span className="text-foreground font-medium">Space/Up:</span> Jump{" "}
              <span className="mx-2">|</span>
              <span className="text-foreground font-medium">Down:</span> Duck{" "}
              <span className="mx-2">|</span>
              <span className="text-foreground font-medium">ESC:</span> Close
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
