"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(() => {
      el.muted = true
      el.play()
    })
  }, [])

  return (
    <section id="hero" className="relative flex min-h-screen items-end overflow-hidden bg-[#f4f6f8]">
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-45"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-5" />

      <div className="hero-container relative z-10 w-full pb-20">
        <div className="flex flex-col items-start">
          <span className="hero-eyebrow block font-sans text-[0.68rem] font-normal tracking-[0.38em] uppercase text-brand">
            Twenty1Global Trading LLC
          </span>
          <h1 className="heading-hero font-sans text-[clamp(2.2rem,4.5vw,3.8rem)] font-extralight leading-[1.25] tracking-[0.22em] uppercase text-brand">
            Powering
            <br />
            Global Trade
          </h1>
          <p className="body-intro mt-8 max-w-[550px] font-sans text-[1.05rem] font-light leading-[1.95] text-brand-muted">
            A dynamic international trading company specialising in the sourcing and delivery of high-quality
            commodities — with reliability, precision, and strategic depth.
          </p>
          <a
            href="#contact"
            className="btn-primary mt-8 inline-block font-sans text-[0.7rem] font-normal tracking-[0.25em] uppercase text-brand border border-brand/20 px-[2.2rem] py-[0.9rem] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand hover:bg-brand/[0.05] hover:tracking-[0.28em]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-[9px] font-normal tracking-[0.35em] uppercase text-brand-muted/75">
            Scroll
          </span>
          <div className="h-9 w-[1px] animate-pulse bg-brand/30" />
        </div>
      </div>
    </section>
  )
}
