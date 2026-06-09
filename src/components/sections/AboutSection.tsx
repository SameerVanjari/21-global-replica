"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { CloudParticles } from "@/components/CloudParticles"

export function AboutSection() {
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
      id="about"
      ref={ref}
      className={cn(
        "section relative overflow-hidden border-none px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
      )}
      style={{
        backgroundImage: "url('/about_clouds_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-48"
        style={{
          background: "linear-gradient(to bottom, var(--color-charcoal-navy, #f4f6f8) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48"
        style={{
          background: "linear-gradient(to top, var(--color-charcoal-navy, #f4f6f8) 0%, transparent 100%)",
        }}
      />
      <CloudParticles />

      <div className="relative z-10 mx-auto max-w-7xl">
        <span className="eyebrow block font-sans text-[0.65rem] font-normal tracking-[0.35em] uppercase text-brand mb-8">
          About Us
        </span>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1 flex flex-col items-">
            <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand">
              Where Markets
              <br />
              Connect With
              <br />
              Precision
            </h2>
            <div className='mt-6'>

              <p className="body-text font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted">
                Twenty1Global operates at the intersection of commodity expertise and financial precision. With
                headquarters across Dubai, Singapore, and Geneva, we deliver strategic sourcing and distribution
                solutions that span continents and industries.
              </p>
              <p className="body-text mt-6 font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted">
                Our team brings decades of combined experience in international trade, asset management, and supply
                chain optimisation. We pride ourselves on reliability, transparency, and the ability to execute
                complex transactions with discretion.
              </p>
            </div>
          </div>

          <div className="flex-1">

            <div className="">
              {[
                { num: "01", label: "Global Network", desc: "Strategic relationships across the Middle East, Asia, Europe, and CIS regions built on trust and long-term commitment." },
                { num: "02", label: "Logistical Precision", desc: "End-to-end supply chain management with board-level compliance, documentation audits, and timely transit execution." },
                { num: "03", label: "Capital Protection", desc: "Sophisticated risk mitigation and credit frameworks protecting global capital in high-value resource movements." },
                { num: "04", label: "Market Intelligence", desc: "Data-driven insights and structured commercial agreements ensuring optimal pricing terms across key demand centers." },
              ].map(({ num, label, desc }) => (
                <div key={num} className="flex flex-col gap-2 mb-8">
                  <div className="flex items-baseline justify-between">
                    <h4 className="heading-sub font-sans text-[0.95rem] font-normal tracking-[0.15em] uppercase text-brand">
                      {label}
                    </h4>
                    <span className="proc-num font-sans text-[0.65rem] font-normal tracking-[0.25em] uppercase text-brand-muted/60 mt-1">
                      {num}
                    </span>
                  </div>

                  <p className="font-sans text-[0.8rem] font-light leading-[1.7] text-brand-muted/75">
                    {desc}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
