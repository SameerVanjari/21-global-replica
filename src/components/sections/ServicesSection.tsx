"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const SERVICES = [
  {
    num: "01",
    title: "Commodity Sourcing",
    subtitle: "COMMODITY SOURCING",
    desc: "We identify and procure high-quality energy resources and industrial goods from vetted global suppliers, ensuring supply security and pricing optimization.",
  },
  {
    num: "02",
    title: "Trade Facilitation",
    subtitle: "TRADE FACILITATION",
    desc: "Airtight negotiation, contract structuring, legal compliance, and multi-jurisdictional clearing processes for seamless international resource trades.",
  },
  {
    num: "03",
    title: "Supply Chain Operations",
    subtitle: "END-TO-END TRANSIT LOGISTICS",
    desc: "Managing complex maritime shipping, customs clearances, storage nodes, and real-time cargo tracking to ensure zero-delay operations.",
  },
  {
    num: "04",
    title: "Market Penetration Support",
    subtitle: "GLOBAL EXPANSION INFRASTRUCTURE",
    desc: "Providing global brands and commodity producers with deep local relationships and compliance structures to scale in high-growth networks.",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          entry.target.setAttribute("data-visible", "true")
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={ref}
      className={cn(
        "section relative bg-white px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" />

      <div className="relative z-10">
        <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
          Services
        </span>

        <div className="mb-20 flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
              Structural Trade
              <br />
              Management
            </h2>
          </div>
          <div className="flex-1">
            <p className="body-text font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted">
              We offer institutional trade capability. From negotiation
              structure and customs clearing to maritime transit compliance, our
              systems secure seamless resource movements across major
              continents.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {SERVICES.map(({ num, title, subtitle, desc }, i) => (
            <div
              key={num}
              className="svc-card group items flex p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="flex-1 font-sans text-[0.6rem] font-normal tracking-[0.3em] text-brand-muted/50 uppercase">
                {num}
              </span>
              <div className="flex-5">
                <h3 className="heading-sub font-sans text-[0.95rem] font-normal tracking-[0.15em] text-brand uppercase">
                  {title}
                </h3>
                <span className="mt-1 block font-sans text-[0.55rem] tracking-[0.2em] text-brand-muted/40 uppercase">
                  {subtitle}
                </span>
              </div>
              <p className="flex-5 font-sans text-[0.85rem] leading-[1.8] font-light text-brand-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
