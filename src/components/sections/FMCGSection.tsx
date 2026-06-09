"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const MARKETS = [
  {
    num: "Market 01",
    title: "Northern Region Integration",
    text: "Navigating regulatory standards and regional distributor pipelines to deliver consumer brands across CIS and Eastern European zones.",
  },
  {
    num: "Market 02",
    title: "Southern Asia Hubs",
    text: "Leveraging trade routes to connect consumer products with high-demand distribution links across India and Southern Asia.",
  },
]

export function FMCGSection() {
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
      id="fmcg"
      ref={ref}
      className={cn(
        "section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
            FMCG LOGISTICS
          </span>

          <h2 className="heading-section mb-8 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
            MARKET ACCESS & HUB INTEGRATION
          </h2>

          <p className="body-text mb-8 font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted">
            We provide specialized market access frameworks for Fast-Moving
            Consumer Goods (FMCG). Leveraging our local partnerships, trade
            links, and compliance expertise, we coordinate access to complex,
            high-volume consumer markets.
          </p>

          <p className="body-text font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted">
            Our systems manage customs, distributor networking, warehousing
            logistics, and regional regulatory clearances to unlock high-growth
            networks.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-6">
          {MARKETS.map(({ num, title, text }) => (
            <div key={num} className="pt-6">
              <span className="mb-2 block font-mono font-sans text-[10px] tracking-[0.25em] text-brand-muted">
                {num}
              </span>
              <h4 className="heading-sub mb-3 font-sans text-[0.95rem] font-light tracking-[0.15em] text-brand uppercase">
                {title}
              </h4>
              <p className="font-sans text-[13px] leading-relaxed font-light text-brand-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
