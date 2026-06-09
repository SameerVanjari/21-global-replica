"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function ContactSection() {
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
      id="contact"
      ref={ref}
      className={cn(
        "section relative bg-white px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
          Contact
        </span>

        <h2 className="heading-section mb-20 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
          Secure Connection
          <br />
          Hubs
        </h2>

        <div className="grid grid-cols-1 gap-12 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted">
              HQ Location
            </p>
            <p className="text-sm font-light leading-relaxed text-brand">
              Dubai, United Arab Emirates
              <br />
              <span className="font-sans text-xs text-brand-muted">Marina Plaza, Suite 2902</span>
            </p>
          </div>

          <div>
            <p className="mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted">
              Email Inquiries
            </p>
            <a
              href="mailto:info@twenty1global.com"
              className="text-sm font-light leading-relaxed text-brand transition-colors hover:text-brand-muted"
            >
              info@twenty1global.com
            </a>
          </div>

          <div>
            <p className="mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted">
              Trading Sectors
            </p>
            <p className="text-xs font-light uppercase leading-relaxed tracking-wide text-brand-muted">
              Oil & Gas &middot; Industrial Goods &middot; Energy &middot; FMCG
            </p>
          </div>

          <div>
            <p className="mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted">
              Operational Centers
            </p>
            <p className="text-xs font-light uppercase leading-relaxed tracking-wide text-brand-muted">
              Geneva &middot; Dubai HQ &middot; Singapore
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
