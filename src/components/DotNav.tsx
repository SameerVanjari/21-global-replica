"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "markets", label: "Markets" },
  { id: "fmcg", label: "FMCG" },
  { id: "sustainability", label: "Sustainability" },
  { id: "contact", label: "Contact" },
]

export function DotNav() {
  const [activeSection, setActiveSection] = useState("hero")

  const handleScroll = useCallback(() => {
    let current = "hero"
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.5) {
          current = id
        }
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-1/2 right-8 z-[900] hidden -translate-y-1/2 flex-col gap-6 md:right-12 md:flex md:gap-7">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          aria-label={`Scroll to ${label}`}
          className="group relative flex cursor-none items-center"
        >
          <span
            className={cn(
              "block size-[5px] rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              activeSection === id
                ? "scale-[1.4] bg-[#1b365d]"
                : "bg-[#1b365d]/20 hover:scale-[1.4] hover:bg-[#1b365d]"
            )}
          />
          <span
            className={cn(
              "pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 font-sans text-[0.6rem] tracking-[0.2em] whitespace-nowrap text-[#2d628c] uppercase transition-all duration-300",
              activeSection === id
                ? "translate-x-0 opacity-100"
                : "translate-x-[10px] opacity-0",
              "group-hover:translate-x-0 group-hover:opacity-100"
            )}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  )
}
