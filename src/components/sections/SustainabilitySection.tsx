"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function SustainabilitySection() {
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
      id="sustainability"
      ref={ref}
      className={cn(
        "section relative px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20 bg-[#f4f6f8]",
        "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.06]" />

      <div className="relative z-10">
        <span className="eyebrow block font-sans text-[0.65rem] font-normal tracking-[0.35em] uppercase text-brand mb-8">
          Sustainability
        </span>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand">
              Responsible
              <br />
              Commerce
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="body-text font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted">
              We are committed to conducting business in a manner that respects environmental boundaries and
              supports the communities in which we operate. Our sustainability framework guides every transaction
              and partnership, embedding ESG principles into our core operations.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { title: "ESG Integration", desc: "Environmental, social, and governance factors embedded in every investment and trading decision across our portfolio." },
                { title: "Carbon Offset", desc: "Active participation in verified carbon offset programmes to neutralise operational emissions throughout our supply chain." },
                { title: "Ethical Sourcing", desc: "Rigorous supplier assessment frameworks ensuring responsible procurement and fair labour practices across all markets." },
                { title: "Community Investment", desc: "Strategic reinvestment in local communities through infrastructure, education, and economic development initiatives." },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="why-card border-l-2 border-brand/15 pl-6 transition-all duration-300 hover:border-brand/40"
                >
                  <h4 className="heading-sub font-sans text-[0.95rem] font-normal tracking-[0.15em] uppercase text-brand">
                    {title}
                  </h4>
                  <p className="mt-2 font-sans text-[0.82rem] font-light leading-[1.7] text-brand-muted/80">
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
