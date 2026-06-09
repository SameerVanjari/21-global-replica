"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const SERVICES = [
  {
    num: "01",
    title: "Commodity Trading",
    desc: "Strategic sourcing and delivery of high-quality commodities across global markets with precision execution and deep supply chain integration.",
  },
  {
    num: "02",
    title: "Asset Investment",
    desc: "Disciplined investment strategies across diverse asset classes with a focus on long-term value creation and risk-managed portfolio allocation.",
  },
  {
    num: "03",
    title: "FMCG Distribution",
    desc: "End-to-end distribution solutions for fast-moving consumer goods across emerging and developed markets with robust logistical frameworks.",
  },
  {
    num: "04",
    title: "Downstream Oil",
    desc: "Integrated downstream petroleum operations including refining, distribution, and retail network management across strategic corridors.",
  },
  {
    num: "05",
    title: "Global Logistics",
    desc: "Comprehensive supply chain management and logistics solutions optimised for international trade flows and cross-border efficiency.",
  },
  {
    num: "06",
    title: "Strategic Advisory",
    desc: "Bespoke advisory services leveraging deep market intelligence and cross-border transaction expertise for institutional and sovereign clients.",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true")
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={ref}
      className={cn(
        "section relative px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20 bg-white",
        "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" />

      <div className="relative z-10">
        <span className="eyebrow block font-sans text-[0.65rem] font-normal tracking-[0.35em] uppercase text-brand mb-8">
          Services
        </span>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand">
              Delivering
              <br />
              Trusted Execution
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="body-text font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted">
              Our integrated service model spans the full value chain — from strategic sourcing and asset
              management to logistics and distribution. Each division operates with the same commitment to
              precision, transparency, and results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICES.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className="svc-card group border border-brand/10 p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand/30 hover:bg-brand/[0.02]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-sans text-[0.6rem] font-normal tracking-[0.3em] uppercase text-brand-muted/50">
                {num}
              </span>
              <h3 className="heading-sub mt-4 font-sans text-[0.95rem] font-normal tracking-[0.15em] uppercase text-brand">
                {title}
              </h3>
              <p className="mt-4 font-sans text-[0.85rem] font-light leading-[1.8] text-brand-muted">{desc}</p>
              <div className="mt-6 h-[1px] w-6 bg-brand/20 transition-all duration-[400ms] group-hover:w-full group-hover:bg-brand/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
