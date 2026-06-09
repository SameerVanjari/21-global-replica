"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const OFFICES = [
  {
    city: "Geneva",
    address: "Rue du Rhône 14, 1204 Geneva, Switzerland",
    email: "geneva@21-global.com",
  },
  {
    city: "Dubai",
    address: "Marina Plaza, Suite 2902, Dubai Marina, UAE",
    email: "dubai@21-global.com",
  },
  {
    city: "Singapore",
    address: "10 Collyer Quay, Ocean Financial Centre, Singapore",
    email: "singapore@21-global.com",
  },
]

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
      <span className="eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase">
        Contact
      </span>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <h2 className="heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase">
            Get In
            <br />
            Touch
          </h2>
          <p className="mt-6 max-w-[400px] font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted">
            We welcome inquiries from potential partners, suppliers, and
            investors. Reach out to discuss opportunities for collaboration.
          </p>
          <a
            href="mailto:info@21-global.com"
            className="btn-primary mt-8 inline-block border border-brand/20 px-[2.2rem] py-[0.9rem] font-sans text-[0.7rem] font-normal tracking-[0.25em] text-brand uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand hover:bg-brand/[0.05] hover:tracking-[0.28em]"
          >
            info@21-global.com
          </a>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="flex flex-col gap-10">
            {OFFICES.map(({ city, address, email }) => (
              <div
                key={city}
                className="border-l-2 border-brand/15 pl-6 transition-all duration-300 hover:border-brand/40"
              >
                <span className="font-sans text-[0.6rem] font-normal tracking-[0.3em] text-brand-muted/50 uppercase">
                  {city}
                </span>
                <p className="mt-2 font-sans text-[0.85rem] leading-[1.8] font-light text-brand">
                  {address}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 inline-block font-sans text-[0.7rem] font-light tracking-[0.08em] text-brand-muted/60 transition-colors duration-300 hover:text-brand"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
