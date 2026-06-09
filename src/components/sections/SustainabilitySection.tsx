"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const PILLARS = [
  {
    title: "Environmental Stewardship",
    subtitle: "ENVIRONMENTAL",
    points: [
      "Low-carbon maritime routing and fuel optimisation across all shipping operations",
      "IMO 2023 compliance with proactive emissions monitoring and reporting",
      "Investment in carbon offset programmes certified by Verra and Gold Standard",
    ],
  },
  {
    title: "Social Responsibility",
    subtitle: "SOCIAL",
    points: [
      "Strict adherence to UN Guiding Principles on Business and Human Rights",
      "Supplier code of conduct enforcement across labour, health, and safety standards",
      "Community investment programmes in our core operating regions",
    ],
  },
  {
    title: "Governance & Compliance",
    subtitle: "GOVERNANCE",
    points: [
      "Board-level ESG oversight embedded in all trading and investment decisions",
      "Third-party audit cycles for anti-bribery, sanctions compliance, and KYC protocols",
      "Full supply chain transparency with end-to-end digital tracking and reporting",
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
      id="sustainability"
      ref={ref}
      className={cn(
        "section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20",
        "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.06]" />

      <div className="relative z-10">
        <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
          Sustainability
        </span>

        <div className="mb-20 flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
              Responsible
              <br />
              Operations
            </h2>
          </div>
          <div className="flex-1">
            <p className="body-text font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted">
              We integrate risk management, environmental compliance, and social
              responsibility directly into our core trading frameworks,
              safeguarding long-term capital and resource reliability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3">
          {PILLARS.map(({ title, subtitle, points }) => (
            <div key={title} className="flex flex-col gap-6">
              <div>
                <span className="mb-2 block font-mono font-sans text-[10px] tracking-[0.25em] text-brand-muted uppercase">
                  {subtitle}
                </span>
                <h3 className="font-sans text-[1.1rem] font-light tracking-[0.15em] text-brand uppercase">
                  {title}
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {points.map((point) => (
                  <li
                    key={point}
                    className="border-l-2 border-brand/15 pl-5 font-sans text-[0.82rem] leading-[1.7] font-light text-brand-muted/80"
                  >
                    {point}
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
