"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const OFFICES = [
  {
    name: "Geneva",
    region: "EUROPE",
    role: "Trading & Operations",
    address: "Rue du Rhône 14, 1204 Geneva",
    x: "48%",
    y: "33%",
  },
  {
    name: "Dubai",
    region: "MIDDLE EAST HQ",
    role: "Corporate Headquarters",
    address: "Marina Plaza, Suite 2902, Dubai Marina",
    x: "59%",
    y: "42%",
  },
  {
    name: "Singapore",
    region: "ASIA PACIFIC",
    role: "Regional Logistics Hub",
    address: "10 Collyer Quay, Ocean Financial Centre",
    x: "78%",
    y: "61%",
  },
]

export function GlobalPresenceSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          entry.target.setAttribute("data-visible", "true")
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="markets-map"
      ref={ref}
      className={cn(
        "section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
              GLOBAL PRESENCE
            </span>
            <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
              STRATEGIC TRADING HUBS.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted">
              We operate from the world's most critical financial and commercial
              junctions. Our headquarters in Dubai is anchored by operational
              hubs in Geneva and Singapore, providing continuous coverage across
              major time zones.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-3">
          {OFFICES.map((office) => (
            <div key={office.name} className="flex flex-col gap-3">
              <span className="font-mono font-sans text-[10px] tracking-[0.25em] text-brand-muted uppercase">
                {office.region}
              </span>
              <h4 className="font-sans text-xl font-light tracking-[0.15em] text-brand uppercase">
                {office.name}
              </h4>
              <span className="font-sans text-[11px] font-light tracking-[0.1em] text-brand-muted uppercase">
                {office.role}
              </span>
              <p className="mt-2 font-sans text-xs leading-relaxed font-light text-brand-muted/75">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-20 flex aspect-[2/1] min-h-[250px] w-full items-center justify-center border border-border p-4 md:min-h-[400px]">
          <svg
            viewBox="0 0 1000 500"
            className="h-full w-full text-brand-muted opacity-45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="currentColor" strokeWidth="0.8" fill="none">
              <path d="M120,100 L180,80 L250,110 L280,180 L220,240 L160,250 L120,200 Z" />
              <path d="M220,250 L270,290 L300,380 L270,450 L240,430 L210,310 Z" />
              <path d="M290,40 L350,30 L380,70 L320,80 Z" />
              <path d="M430,220 L480,210 L540,250 L560,330 L500,410 L470,410 L440,320 L410,250 Z" />
              <path d="M390,140 L450,110 L520,90 L680,80 L840,110 L880,160 L800,230 L740,280 L680,310 L580,260 L480,210 L420,170 Z" />
              <path d="M600,220 L640,250 L630,280 L610,250 Z" />
              <path d="M760,350 L840,360 L860,420 L780,430 L740,390 Z" />
            </g>
          </svg>

          {OFFICES.map((office) => (
            <div
              key={office.name}
              style={{ left: office.x, top: office.y }}
              className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            >
              <span className="border-text-primary inline-flex h-2 w-2 rounded-full border bg-white shadow-sm" />
              <span className="text-text-primary mt-1 border border-border bg-white/95 px-2 py-0.5 font-mono font-sans text-[9px] tracking-[0.15em] uppercase shadow-sm">
                {office.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
