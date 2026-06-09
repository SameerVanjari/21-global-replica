"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const ADVANTAGES = [
  {
    roman: "I",
    title: "Strong Global Network",
    desc: "Established relationships across key trading zones, ensuring secure resource flows.",
  },
  {
    roman: "II",
    title: "Reliable Execution",
    desc: "Structured commercial clearing, documentation audits, and zero-compromise logistics.",
  },
  {
    roman: "III",
    title: "Risk Abatement",
    desc: "Rigorous capital protections, credit lines, and geopolitical risk mitigation.",
  },
  {
    roman: "IV",
    title: "Operational Transparency",
    desc: "Institutional governance, anti-corruption standards, and transparent transactions.",
  },
  {
    roman: "V",
    title: "Bespoke Strategy",
    desc: "Commercial structures tailored precisely to regional trade requirements.",
  },
  {
    roman: "VI",
    title: "Absolute Discretion",
    desc: "Professional compliance, strict confidentiality, and reserved corporate standards.",
  },
]

export function AdvantagesSection() {
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
      id="advantages"
      ref={ref}
      className={cn(
        "section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
          ADVANTAGES
        </span>

        <h2 className="heading-section mb-20 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
          THE Twenty1Global
          <br />
          CREDENTIAL
        </h2>

        <div className="flex flex-col">
          {ADVANTAGES.map(({ roman, title, desc }, i) => (
            <div
              key={roman}
              className="grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-12"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-mono text-[11px] tracking-[0.25em] text-brand-muted md:col-span-1">
                {roman}
              </div>
              <div className="md:col-span-4">
                <h4 className="heading-sub font-sans text-[0.95rem] font-medium tracking-[0.15em] text-brand uppercase">
                  {title}
                </h4>
              </div>
              <div className="md:col-span-7">
                <p className="font-sans text-[13px] leading-relaxed font-light text-brand-muted">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
