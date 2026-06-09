"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleScroll = () => {
      if (!el) return
      const scrolled = window.scrollY
      const bg = el.querySelector<HTMLDivElement>(".parallax-bg")
      if (bg) bg.style.transform = `translateY(${scrolled * 0.35}px)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-end overflow-hidden bg-brand"
    >
      <div
        className="parallax-bg pointer-events-none absolute inset-0 size-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/about_clouds_bg.png')" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.08]" />

      <div className="hero-container relative z-10 w-full pb-20">
        <div className="flex flex-col items-start">
          <span className="hero-eyebrow block font-sans text-[0.68rem] font-normal tracking-[0.38em] text-white/80 uppercase">
            Twenty1Global Trading LLC
          </span>
          <h1 className="heading-hero font-sans text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.25] font-extralight tracking-[0.22em] text-white uppercase">
            Powering
            <br />
            Global Trade
            <br />
            With Certainty
          </h1>
          <p className="body-intro mt-8 max-w-[550px] font-sans text-[1.05rem] leading-[1.95] font-light text-white/70">
            A dynamic international trading company specialising in the sourcing
            and delivery of high-quality commodities — with reliability,
            precision, and strategic depth.
          </p>
          <a
            href="#contact"
            className="btn-primary mt-8 inline-block border border-white/30 px-[2.2rem] py-[0.9rem] font-sans text-[0.7rem] font-normal tracking-[0.25em] text-white uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white hover:bg-white/10 hover:tracking-[0.28em]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-[9px] font-normal tracking-[0.35em] text-white/60 uppercase">
            Scroll
          </span>
          <div className="h-9 w-[1px] animate-pulse bg-white/30" />
        </div>
      </div>
    </section>
  )
}
