"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const FMCG_COUNTRIES = [
  { country: "United Arab Emirates", region: "Middle East Hub", desc: "Central distribution hub serving GCC markets and wider MENA region." },
  { country: "Singapore", region: "Southeast Asia Hub", desc: "Strategic gateway to ASEAN markets and Asia-Pacific distribution networks." },
  { country: "India", region: "South Asia Operations", desc: "Key sourcing and distribution partner for the subcontinent's growing consumer base." },
  { country: "Nigeria", region: "West Africa Gateway", desc: "Primary entry point for African consumer goods distribution and market penetration." },
  { country: "Saudi Arabia", region: "GCC Expansion", desc: "Growing market presence supporting Vision 2030 consumer sector transformation." },
  { country: "Vietnam", region: "Southeast Asia Growth", desc: "Emerging manufacturing and distribution hub for regional FMCG supply chains." },
  { country: "Turkey", region: "Eurasia Corridor", desc: "Bridge market connecting European and Asian FMCG distribution networks." },
  { country: "Brazil", region: "Latin America Entry", desc: "Key market for consumer goods expansion across South American economies." },
]

export function FMCGSection() {
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
      id="fmcg"
      ref={ref}
      className={cn(
        "section relative px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20 bg-[#f4f6f8]",
        "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
      )}
    >
      <span className="eyebrow block font-sans text-[0.65rem] font-normal tracking-[0.35em] uppercase text-brand mb-8">
        FMCG
      </span>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 mb-20">
        <div className="lg:col-span-5">
          <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand">
            Moving
            <br />
            Consumer Goods
          </h2>
        </div>
        <div className="lg:col-span-6">
          <p className="body-text font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted">
            Our FMCG division operates across multiple categories spanning food and beverage, personal care,
            household products, and health and wellness. We manage complex distribution networks that ensure
            products reach consumers efficiently across diverse geographies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FMCG_COUNTRIES.map(({ country, region, desc }, i) => (
          <div
            key={country}
            className="fmcg-country group border border-brand/10 p-6 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand/30 hover:bg-brand/[0.02]"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-sans text-[0.9rem] font-normal tracking-[0.08em] text-brand">
                  {country}
                </h3>
                <span className="mt-1 block font-sans text-[0.6rem] font-normal tracking-[0.22em] uppercase text-brand-muted/50">
                  {region}
                </span>
              </div>
              <span className="font-sans text-[0.6rem] font-normal tracking-[0.2em] uppercase text-brand-muted/30">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-4 font-sans text-[0.8rem] font-light leading-[1.7] text-brand-muted/80">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
