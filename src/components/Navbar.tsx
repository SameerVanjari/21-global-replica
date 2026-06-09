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
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    if (menuOpen) return
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
  }, [lastScrollY, menuOpen])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const navClasses = cn(
    "fixed z-[1000] flex items-center justify-between rounded-[15px] border border-transparent px-[2.2rem] py-[1.1rem]",
    "transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
    "left-[10.3%] right-[10.3%] max-lg:left-[6%] max-lg:right-[6%] max-md:left-[1.2rem] max-md:right-[1.2rem] max-md:px-[1.2rem]",
    {
      "bg-transparent border-transparent shadow-none text-brand top-6": navState === "transparent" && !menuOpen,
      "bg-white/95 border-brand/5 text-brand top-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] backdrop-blur-md":
        navState === "white" || menuOpen,
      "opacity-0 pointer-events-none top-6 -translate-y-[130%]": navState === "hidden" && !menuOpen,
    },
  )

  const linkBase = cn(
    "relative text-[13px] font-light tracking-[0.15em] uppercase transition-colors duration-300",
    "after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-[400ms] after:ease-[cubic-bezier(0.16,1,0.3,1)]",
    "hover:after:w-full",
  )

  return (
    <>
      <header className={navClasses}>
        <a href="#" className="text-[15px] font-extralight tracking-[0.22em] uppercase whitespace-nowrap text-brand">
          TWENTY1GLOBAL
        </a>

        <nav className="hidden lg:block">
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

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={cn(
              "hidden lg:inline-block font-sans text-[0.7rem] font-normal tracking-[0.25em] uppercase px-[1.4rem] py-[0.7rem]",
              "border transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              navState === "transparent"
                ? "text-brand border-brand/30 hover:border-brand hover:bg-brand/5 hover:tracking-[0.28em]"
                : "text-brand border-[#2b3e50]/25 hover:border-brand hover:bg-brand/5 hover:tracking-[0.28em]",
            )}
          >
            Get in touch
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="relative z-[1001] flex size-8 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-5 bg-brand transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                menuOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-brand transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-brand transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                menuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[999] flex flex-col bg-white transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex flex-1 flex-col items-center justify-center px-7">
          <nav className="w-full">
            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map(({ href, label }, i) => (
                <li
                  key={href}
                  style={{
                    transitionDelay: menuOpen ? `${200 + i * 80}ms` : "0ms",
                  }}
                  className={cn(
                    "transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0",
                  )}
                >
                  <button
                    onClick={() => scrollTo(href.replace("#", ""))}
                    className="font-sans text-[1.4rem] font-extralight tracking-[0.2em] uppercase text-brand transition-colors hover:text-brand/60"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={cn(
            "flex flex-col items-center gap-5 pb-12 transition-all duration-[600ms] delay-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="border border-brand/30 px-10 py-3.5 font-sans text-[0.8rem] font-normal tracking-[0.25em] uppercase text-brand transition-all hover:border-brand hover:bg-brand/5"
          >
            Get in touch
          </button>
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-muted/60">
              info@twenty1global.com
            </span>
            <span className="font-sans text-[9px] tracking-[0.2em] text-brand-muted/40">
              Dubai &middot; Geneva &middot; Singapore
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
