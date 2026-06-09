"use client"

import { useRef, useEffect } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const bg = bgRef.current
    const img = imgRef.current
    if (!bg || !img) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const vh = window.innerHeight
          const progress = Math.min(scrollY / vh, 1)

          const r = Math.round(203 + 41 * progress)
          const g = Math.round(211 + 35 * progress)
          const b = Math.round(219 + 29 * progress)
          bg.style.backgroundColor = `rgb(${r},${g},${b})`

          const scale = 1.08 + progress * 0.17
          const translateY = progress * -12
          const opacity =
            progress < 0.15 ? 1 : Math.max(0, 1 - (progress - 0.15) / 0.6)
          img.style.transform = `scale(${scale}) translateY(${translateY}%)`
          img.style.opacity = String(opacity)

          ticking = false
        })
      }
    }

    let mouseCache = { scale: 1.08, translateY: 0 }
    const onMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = ((e.clientX - cx) / cx) * 1.5
      const dy = ((e.clientY - cy) / cy) * 0.8
      const s = img.style.transform.match(/scale\(([\d.]+)\)/)
      const ty = img.style.transform.match(/translateY\(([-\d.]+)%\)/)
      const currScale = s ? parseFloat(s[1]) : mouseCache.scale
      const currY = ty ? parseFloat(ty[1]) : mouseCache.translateY
      img.style.transform = `scale(${currScale}) translateY(${currY}%) translate(${dx}%, ${dy}%)`
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("mousemove", onMouse, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMouse)
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-20"
    >
      <div
        ref={bgRef}
        className="pointer-events-none fixed inset-0 z-0 size-full overflow-hidden bg-[#cbd3db]"
      >
        <img
          ref={imgRef}
          src="/hero-gif.gif"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
          style={{
            objectPosition: "center bottom",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            transition: "opacity 0.05s linear",
            filter: "saturate(0.85) brightness(1.02)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0"
          style={{
            height: "35%",
            background: "linear-gradient(to bottom, transparent, #f4f6f8)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(27,54,93,0.15) 100%)",
          }}
        />
      </div>

      <div className="hero-container relative z-10 w-full px-[10.3%] max-lg:px-[6%] max-md:px-7">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-start">
            <span className="hero-eyebrow mb-8 md:mb-12 flex items-center gap-4 font-sans text-[10px] font-normal tracking-[0.35em] text-[#1b365d] uppercase">
              Twenty1Global Trading
            </span>
            <h1 className="heading-hero mb-8 md:mb-12 font-sans text-[clamp(1.6rem,5.5vw,3.8rem)] leading-[1.2] font-extralight tracking-[0.18em] text-[#0a0e17] uppercase">
              Powering Global Trade.
              <br />
              Delivering Trusted Execution.
              <br />
              Managing Strategic Assets.
            </h1>
            <p className="body-intro max-w-[620px] font-sans text-[0.95rem] md:text-[1.05rem] leading-relaxed font-light text-[#2b3e50]">
              Headquartered in Dubai with a strategic presence in Geneva and
              Singapore. We leverage deep logistical depth, board-level risk
              management, and structured execution to connect critical resources
              with high-demand global markets.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-[10.3%] bottom-28 z-10 hidden flex-col gap-10 text-right lg:flex">
        <div className="hero-stat">
          <span className="stat-num font-sans text-2xl font-extralight tracking-[0.05em] text-[#0a0e17] uppercase">
            GLOBAL
          </span>
          <span className="stat-label mt-1 block text-[9px] tracking-[0.25em] text-[#1b365d] uppercase">
            Operating Network
          </span>
        </div>
        <div className="hero-stat">
          <span className="stat-num font-sans text-2xl font-extralight tracking-[0.05em] text-[#0a0e17] uppercase">
            SECURE
          </span>
          <span className="stat-label mt-1 block text-[9px] tracking-[0.25em] text-[#1b365d] uppercase">
            Airtight Compliance
          </span>
        </div>
        <div className="hero-stat">
          <span className="stat-num font-sans text-2xl font-extralight tracking-[0.05em] text-[#0a0e17] uppercase">
            TRUSTED
          </span>
          <span className="stat-label mt-1 block text-[9px] tracking-[0.25em] text-[#1b365d] uppercase">
            Strategic Capital
          </span>
        </div>
      </div>

      <div className="absolute bottom-16 left-0 right-0 z-10 flex justify-center gap-12 px-7 lg:hidden">
        <div className="text-center">
          <span className="block font-sans text-[0.7rem] font-extralight tracking-[0.05em] text-[#0a0e17] uppercase">
            GLOBAL
          </span>
          <span className="mt-0.5 block text-[7px] tracking-[0.2em] text-[#1b365d] uppercase">
            Operating Network
          </span>
        </div>
        <div className="text-center">
          <span className="block font-sans text-[0.7rem] font-extralight tracking-[0.05em] text-[#0a0e17] uppercase">
            SECURE
          </span>
          <span className="mt-0.5 block text-[7px] tracking-[0.2em] text-[#1b365d] uppercase">
            Airtight Compliance
          </span>
        </div>
        <div className="text-center">
          <span className="block font-sans text-[0.7rem] font-extralight tracking-[0.05em] text-[#0a0e17] uppercase">
            TRUSTED
          </span>
          <span className="mt-0.5 block text-[7px] tracking-[0.2em] text-[#1b365d] uppercase">
            Strategic Capital
          </span>
        </div>
      </div>
    </section>
  )
}
