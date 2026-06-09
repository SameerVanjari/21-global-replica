"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const MARKETS = [
  {
    title: "Oil & Gas",
    desc: "Active sourcing, contract structuring, and compliance navigation for crude oil, refined distillates, and specialized gas resources.",
  },
  {
    title: "Industrial Materials",
    desc: "Coordination of critical minerals, chemical products, and bulk industrial inputs for manufacturing clusters worldwide.",
  },
  {
    title: "Energy Resources",
    desc: "Providing global supply nodes with reliable energy allocations, managing transit risk and hedging credit exposures.",
  },
]

const REGIONS = ["Middle East", "Asia Pacific", "Western Europe", "CIS Regions"]

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
        MARKETS
      </span>

      <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand mb-20">
        OPERATING SECTORS &
        <br />
        GLOBAL COMMODITIES
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16 mb-20">
        {MARKETS.map(({ title, desc }, i) => (
          <div
            key={title}
            className="pt-8"
          >
            <h3 className="font-sans text-[clamp(1rem,1.5vw,1.1rem)] font-light tracking-[0.15em] uppercase text-brand mb-4">
              {title}
            </h3>
            <p className="font-sans text-[0.85rem] font-light leading-relaxed text-brand-muted">{desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8">
        {REGIONS.map((region) => (
          <span
            key={region}
            className="font-sans text-[0.55rem] tracking-[0.25em] uppercase text-brand-muted font-light"
          >
            {region}
          </span>
        ))}
      </div>
    </section>
  )
}
