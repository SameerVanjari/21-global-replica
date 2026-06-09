"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const MARKETS = [
  {
    region: "Middle East",
    hub: "Dubai",
    address: "Dubai Multi Commodities Centre, UAE",
    desc: "Gateway to GCC, MENA, and South Asian markets with deep regional expertise and established trading relationships.",
  },
  {
    region: "Asia Pacific",
    hub: "Singapore",
    address: "Ocean Financial Centre, Singapore",
    desc: "Hub for Southeast Asian and Far East operations, leveraging Singapore's position as a global trade nexus.",
  },
  {
    region: "Europe",
    hub: "Geneva",
    address: "Rue du Rhone, Geneva, Switzerland",
    desc: "European trading desk and financial operations centre with access to continental commodity markets.",
  },
]

export function MarketsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true")
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="markets"
      ref={ref}
      className={cn(
        "section relative px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20 bg-white",
        "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
      )}
    >
      <span className="eyebrow block font-sans text-[0.65rem] font-normal tracking-[0.35em] uppercase text-brand mb-8">
        Markets
      </span>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 mb-20">
        <div className="lg:col-span-5">
          <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand">
            Global
            <br />
            Presence
          </h2>
        </div>
        <div className="lg:col-span-6">
          <p className="body-text font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted">
            Our tri-continental presence provides unparalleled access to key trading corridors, enabling
            seamless cross-border operations and deep market penetration across the world&apos;s most dynamic
            economies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {MARKETS.map(({ region, hub, address, desc }, i) => (
          <div
            key={region}
            className="geo-tag group relative flex flex-col transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="mb-6 h-[1px] w-12 bg-brand/20 transition-all duration-[400ms] group-hover:w-20 group-hover:bg-brand/40" />
            <span className="font-sans text-[0.6rem] font-normal tracking-[0.3em] uppercase text-brand-muted/60">
              {region}
            </span>
            <h3 className="mt-2 font-sans text-[1.1rem] font-light tracking-[0.1em] uppercase text-brand">
              {hub}
            </h3>
            <p className="mt-1 font-sans text-[0.72rem] font-light tracking-[0.05em] uppercase text-brand-muted/50">
              {address}
            </p>
            <p className="mt-3 font-sans text-[0.85rem] font-light leading-[1.8] text-brand-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
