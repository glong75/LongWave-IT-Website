"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentPage: string
  setPage: (page: string) => void
}

export function Navigation({ currentPage, setPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (page: string) => {
    setPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LW-UtQ9c5lOkZfjh8QTVf1TE2HXCs1kBj.png"
              alt="LongWave Technologies"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">Long</span>
              <span className="font-bold text-lg text-primary">Wave</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              className="ml-4"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
                    currentPage === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("contact")}
                className="mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
