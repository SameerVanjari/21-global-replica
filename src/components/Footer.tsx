"use client"

import { cn } from "@/lib/utils"

const FOOTER_LINKS = {
  Sectors: ["Commodity Trading", "Asset Investment", "FMCG Distribution", "Downstream Oil", "Global Logistics"],
  Company: ["About", "Sustainability", "Markets", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

const OFFICES = [
  { city: "Dubai", region: "UAE" },
  { city: "Singapore", region: "Southeast Asia" },
  { city: "Geneva", region: "Switzerland" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0e17] text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-[10.3%] max-md:px-6 py-28 max-md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <a
              href="#"
              className="font-sans text-[clamp(1.2rem,2vw,1.5rem)] font-extralight tracking-[0.22em] uppercase text-[#a3b3c2]"
            >
              TWENTY1GLOBAL
            </a>
            <p className="mt-8 max-w-[320px] font-sans text-[0.95rem] font-light leading-[1.8] text-[#5d7488]">
              A dynamic international trading company specialising in high-quality commodities — with reliability,
              precision, and strategic depth.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="md:col-span-2 lg:col-span-2">
              <h4 className="mb-6 font-sans text-[10px] font-normal tracking-[0.35em] uppercase text-[#5d7488]">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-[0.8rem] font-light text-[#a3b3c2] transition-colors duration-300 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="mb-6 font-sans text-[10px] font-normal tracking-[0.35em] uppercase text-[#5d7488]">
              Offices
            </h4>
            <ul className="flex flex-col gap-4">
              {OFFICES.map(({ city, region }) => (
                <li key={city} className="flex flex-col gap-0.5">
                  <span className="font-sans text-[0.8rem] font-normal text-white/90">{city}</span>
                  <span className="font-sans text-[0.7rem] font-light tracking-[0.08em] uppercase text-[#5d7488]">
                    {region}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[0.7rem] font-light tracking-[0.08em] text-[#5d7488]/80">
            &copy; {new Date().getFullYear()} Twenty1Global Trading LLC. All rights reserved.
          </p>
          <p className="font-sans text-[0.7rem] font-light tracking-[0.08em] text-[#5d7488]/60">
            Dubai &middot; Singapore &middot; Geneva
          </p>
        </div>
      </div>
    </footer>
  )
}
