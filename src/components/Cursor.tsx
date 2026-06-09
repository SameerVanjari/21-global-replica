"use client"

import { useEffect, useRef, useCallback } from "react"

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const posRef = useRef({ x: 0, y: 0 })
  const scaleRef = useRef(1)
  const targetScaleRef = useRef(1)
  const bgRef = useRef("")
  const borderRef = useRef("")

  const animate = useCallback(() => {
    const dx = mouseRef.current.x - posRef.current.x
    const dy = mouseRef.current.y - posRef.current.y
    posRef.current.x += dx * 0.12
    posRef.current.y += dy * 0.12

    scaleRef.current += (targetScaleRef.current - scaleRef.current) * 0.12

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) scale(${scaleRef.current})`
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

  const handleMouseEnterLink = useCallback((e: Event) => {
    const target = e.currentTarget as HTMLElement | null
    if (!target) return
    const isDotNav = target.closest(".dot-nav, [class*='dot-nav']")
    if (isDotNav) {
      targetScaleRef.current = 3
      cursorRef.current?.classList.add("bg-[#1b365d]/15", "border-[#1b365d]")
      dotRef.current?.classList.add("opacity-0")
    } else {
      targetScaleRef.current = 2
      cursorRef.current?.classList.add("bg-transparent", "border-[#1b365d]")
      dotRef.current?.classList.add("opacity-0")
    }
  }, [])

  const handleMouseLeaveLink = useCallback((e: Event) => {
    const target = e.currentTarget as HTMLElement | null
    if (!target) return
    const isDotNav = target.closest(".dot-nav, [class*='dot-nav']")
    if (isDotNav) {
      cursorRef.current?.classList.remove("bg-[#1b365d]/15", "border-[#1b365d]")
    } else {
      cursorRef.current?.classList.remove("bg-transparent", "border-white/40")
    }
    targetScaleRef.current = 1
    dotRef.current?.classList.remove("opacity-0")
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    document.documentElement.classList.add("cursor-none")
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    const attachListeners = () => {
      const selectors = [
        "a",
        "button",
        "select",
        "input",
        '[role="button"]',
        ".dot-nav-item",
        ".dot-nav a",
        ".dot-nav button",
        ".proc-num",
        ".svc-card",
        ".why-card",
        ".fmcg-country",
        ".geo-tag",
      ]
      document.querySelectorAll(selectors.join(",")).forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterLink)
        el.addEventListener("mouseleave", handleMouseLeaveLink)
      })
    }

    attachListeners()
    const observer = new MutationObserver(() => attachListeners())
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.documentElement.classList.remove("cursor-none")
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
      const selectors = [
        "a",
        "button",
        "select",
        "input",
        '[role="button"]',
        ".dot-nav-item",
        ".dot-nav a",
        ".dot-nav button",
        ".proc-num",
        ".svc-card",
        ".why-card",
        ".fmcg-country",
        ".geo-tag",
      ]
      document.querySelectorAll(selectors.join(",")).forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterLink)
        el.removeEventListener("mouseleave", handleMouseLeaveLink)
      })
    }
  }, [animate, handleMouseMove, handleMouseEnterLink, handleMouseLeaveLink])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/50 transition-[width,height,background-color,border-color] duration-300 ease-out md:flex"
      >
        <div className="size-1.5 rounded-full bg-transparent" />
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-200 md:block"
      />
    </>
  )
}
