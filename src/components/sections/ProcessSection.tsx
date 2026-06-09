"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const STEPS = [
  {
    num: "I",
    title: "Requirement Analysis",
    desc: "Detailing volumes, delivery timelines, product specifications, and quality parameters.",
  },
  {
    num: "II",
    title: "Sourcing & Verification",
    desc: "Engaging our verified producer network to secure allocation and confirm compliance.",
  },
  {
    num: "III",
    title: "Commercial Structuring",
    desc: "Formulating legal structures, credit facilities, risk hedging, and purchase terms.",
  },
  {
    num: "IV",
    title: "Regulatory Compliance",
    desc: "Preparing customs files, maritime documents, certificates of origin, and compliance clearing.",
  },
  {
    num: "V",
    title: "Logistics Execution",
    desc: "Coordinating vessel booking, freight tracking, cargo inspections, and terminal handovers.",
  },
]

export function ProcessSection() {
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
      id="process"
      ref={ref}
      className={cn(
        "section relative bg-white px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      )}
    >
      <div className="mx-auto max-w-7xl">
        <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
          OUR PROCESS
        </span>

        <h2 className="heading-section mb-20 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
          FIVE STAGES OF
          <br />
          FLAWLESS EXECUTION
        </h2>

        <div className="flex flex-col">
          {STEPS.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className="grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-12"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-mono text-[11px] tracking-[0.25em] text-brand-muted md:col-span-1">
                {num}
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
