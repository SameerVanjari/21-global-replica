"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const PILLARS = [
  {
    title: "Environmental Stewardship",
    desc: "Minimizing ecological impact through logistically optimized transport routing and low-carbon maritime compliance.",
    bullets: [
      { label: "Maritime Compliance", text: "Partnering exclusively with ocean carriers meeting strict emissions standards." },
      { label: "Logistics Efficiency", text: "Optimizing sea routes to reduce carbon footprint per metric ton." },
    ],
  },
  {
    title: "Social Integrity",
    desc: "Fostering safe workplaces, respecting local communities, and supporting economic equity in our operational regions.",
    bullets: [
      { label: "Labor Standards", text: "Strict compliance with fair labor laws across all regional operations." },
      { label: "Community Reinvestment", text: "Fostering development within our sourcing hubs." },
    ],
  },
  {
    title: "Institutional Governance",
    desc: "Operating with transparency, compliance audits, and board-level risk management frameworks.",
    bullets: [
      { label: "Trade Compliance", text: "Airtight auditing of all transactional and customs structures." },
      { label: "Risk Framework", text: "Continuous evaluation of geopolitical, credit, and operational risks." },
    ],
  },
]

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
        "section relative px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
              Sustainability
            </span>
            <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] text-brand uppercase">
              Responsible
              <br />
              Operations.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm font-light leading-relaxed text-brand-muted max-w-[500px]">
              We integrate risk management, environmental compliance, and social responsibility directly into
              our core trading frameworks, safeguarding long-term capital and resource reliability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="pt-8">
              <h3 className="mb-4 font-sans text-lg font-light uppercase tracking-[0.15em] text-brand">
                {pillar.title}
              </h3>
              <p className="mb-6 text-[13px] font-light leading-relaxed text-brand-muted">
                {pillar.desc}
              </p>
              <ul className="flex list-none flex-col gap-4 p-0">
                {pillar.bullets.map(({ label, text }) => (
                  <li
                    key={label}
                    className="border-l border-brand/15 pl-4 text-xs font-light leading-relaxed text-brand-muted/80"
                  >
                    <strong className="mb-1 block font-normal uppercase tracking-wider text-brand">
                      {label}
                    </strong>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
