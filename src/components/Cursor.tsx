"use client"

import { useEffect, useRef, useCallback } from "react"

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const posRef = useRef({ x: 0, y: 0 })

  const animate = useCallback(() => {
    const dx = mouseRef.current.x - posRef.current.x
    const dy = mouseRef.current.y - posRef.current.y
    posRef.current.x += dx * 0.12
    posRef.current.y += dy * 0.12

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = e.clientX
    mouseRef.current.y = e.clientY
  }, [])

  const handleMouseEnterLink = useCallback(() => {
    cursorRef.current?.classList.add("scale-[2.5]", "bg-transparent", "border-white/40")
    dotRef.current?.classList.add("opacity-0")
  }, [])

  const handleMouseLeaveLink = useCallback(() => {
    cursorRef.current?.classList.remove("scale-[2.5]", "bg-transparent", "border-white/40")
    dotRef.current?.classList.remove("opacity-0")
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    document.documentElement.classList.add("cursor-none")
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    const attachLinkListeners = () => {
      const selectors = ["a", "button", "select", "input", '[role="button"]']
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          el.addEventListener("mouseenter", handleMouseEnterLink)
          el.addEventListener("mouseleave", handleMouseLeaveLink)
        })
      })
    }

    attachLinkListeners()
    const observer = new MutationObserver(() => attachLinkListeners())
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.documentElement.classList.remove("cursor-none")
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
      const selectors = ["a", "button", "select", "input", '[role="button"]']
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnterLink)
          el.removeEventListener("mouseleave", handleMouseLeaveLink)
        })
      })
    }
  }, [animate, handleMouseMove, handleMouseEnterLink, handleMouseLeaveLink])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/50 transition-[width,height,background-color,border-color] duration-300 ease-out md:flex"
      >
        <div className="size-1.5 rounded-full bg-transparent" />
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-200 md:block"
      />
    </>
  )
}
