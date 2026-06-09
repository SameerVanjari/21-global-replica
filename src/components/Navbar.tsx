"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#markets", label: "Markets" },
  { href: "#fmcg", label: "FMCG" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [navState, setNavState] = useState<"transparent" | "white" | "hidden">("transparent")
  const [activeSection, setActiveSection] = useState("")
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY

    if (scrollY <= 80) {
      setNavState("transparent")
    } else if (scrollY > lastScrollY) {
      setNavState("hidden")
    } else {
      setNavState("white")
    }

    const heroHeight = window.innerHeight
    if (scrollY > heroHeight * 0.5) {
      setNavState((prev) => (prev === "transparent" ? "white" : prev))
    }

    setLastScrollY(scrollY)

    for (const { href } of NAV_LINKS) {
      const id = href.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
          setActiveSection(href)
          break
        }
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const navClasses = cn(
    "fixed z-[1000] flex items-center justify-between rounded-[15px] border border-transparent px-[2.2rem] py-[1.1rem]",
    "transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
    "left-[10.3%] right-[10.3%] max-md:left-[1.5rem] max-md:right-[1.5rem] max-md:px-[1.2rem]",
    {
      "bg-transparent border-transparent shadow-none text-brand top-6": navState === "transparent",
      "bg-white/95 border-brand/5 text-brand top-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] backdrop-blur-md":
        navState === "white",
      "opacity-0 pointer-events-none top-6 -translate-y-[130%]": navState === "hidden",
    },
  )

  const linkBase = cn(
    "relative text-[13px] font-light tracking-[0.15em] uppercase transition-colors duration-300",
    "after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-[400ms] after:ease-[cubic-bezier(0.16,1,0.3,1)]",
    "hover:after:w-full",
  )

  return (
    <header className={navClasses}>
      <a href="#" className="text-[15px] font-extralight tracking-[0.22em] uppercase whitespace-nowrap text-brand">
        TWENTY1GLOBAL
      </a>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={cn(
                  linkBase,
                  navState === "transparent" ? "text-brand" : "text-[#2b3e50]/70 hover:text-brand",
                  activeSection === href && "after:w-full text-brand",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="#contact"
        className={cn(
          "inline-block font-sans text-[0.7rem] font-normal tracking-[0.25em] uppercase px-[2.2rem] py-[0.9rem]",
          "border transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          navState === "transparent"
            ? "text-brand border-brand/30 hover:border-brand hover:bg-brand/5 hover:tracking-[0.28em]"
            : "text-brand border-[#2b3e50]/25 hover:border-brand hover:bg-brand/5 hover:tracking-[0.28em]",
        )}
      >
        Get in touch
      </a>
    </header>
  )
}
