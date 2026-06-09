"use client"

const ENTITIES = [
  { label: "Twenty1Global Group", href: "#group" },
  { label: "Twenty1Global Trading", href: "#trading" },
  { label: "Twenty1Global Capital", href: "#capital" },
  { label: "Twenty1Global Maritime", href: "#maritime" },
  { label: "Fort Energy", href: "#energy" },
]

const BOTTOM_LINKS = [
  { label: "Contact", href: "#contact" },
  { label: "ESG", href: "#esg" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Use", href: "#terms" },
]

const OFFICES = [
  {
    city: "Geneva,<br/>Switzerland",
    address: "Rue du Rhône 14, 1204 Geneva<br/>Switzerland",
    email: "geneva@twenty1global.com",
  },
  {
    city: "Dubai,<br/>UAE",
    address: "Marina Plaza, Suite 2902, Dubai Marina<br/>Dubai, United Arab Emirates",
    email: "info@twenty1global.com",
  },
  {
    city: "Singapore<br/>&nbsp;",
    address: "10 Collyer Quay, Ocean Financial Centre<br/>Singapore 049315",
    email: "singapore@twenty1global.com",
  },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#1b365d]/10 bg-white px-[10.3%] pb-16 pt-24 text-[#1b365d] max-lg:px-[6%] max-md:px-7">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-12">
          <div className="flex min-h-[220px] flex-col justify-between">
            <div>
              <div className="flex flex-col gap-3 text-[9px] font-light tracking-[0.22em]">
                {ENTITIES.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="uppercase transition-colors hover:text-[#1b365d]/60"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-[9px] font-light tracking-[0.22em] text-[#1b365d]/60">
              {BOTTOM_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="uppercase transition-colors hover:text-[#1b365d]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {OFFICES.map((office) => (
            <div key={office.city} className="flex min-h-[220px] flex-col justify-between">
              <div>
                <h4
                  className="mb-8 font-sans text-[13px] font-light uppercase leading-[1.6] tracking-[0.22em] text-[#1b365d]"
                  dangerouslySetInnerHTML={{ __html: office.city }}
                />
                <p
                  className="max-w-[220px] text-[10px] font-light leading-[1.8] tracking-[0.05em] text-[#5d7488]/90"
                  dangerouslySetInnerHTML={{ __html: office.address }}
                />
              </div>
              <a
                href={`mailto:${office.email}`}
                className="mt-8 text-[10px] font-light tracking-[0.08em] text-[#1b365d] transition-colors hover:text-[#1b365d]/70"
              >
                {office.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mb-8 w-full border-t border-[#1b365d]/10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-[#1b365d]/80" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="4" r="1.2" />
              <circle cx="9" cy="6.2" r="1.2" />
              <circle cx="15" cy="6.2" r="1.2" />
              <circle cx="6" cy="8.4" r="1.2" />
              <circle cx="12" cy="8.4" r="1.2" />
              <circle cx="18" cy="8.4" r="1.2" />
              <circle cx="9" cy="10.6" r="1.2" />
              <circle cx="15" cy="10.6" r="1.2" />
              <circle cx="12" cy="12.8" r="1.2" />
              <circle cx="6" cy="15" r="1.2" />
              <circle cx="18" cy="15" r="1.2" />
              <circle cx="9" cy="17.2" r="1.2" />
              <circle cx="15" cy="17.2" r="1.2" />
              <circle cx="12" cy="19.4" r="1.2" />
            </svg>
            <div className="mx-4 h-5 w-px bg-[#1b365d]/20" />
            <span className="text-[12px] font-light uppercase tracking-[0.3em] text-[#1b365d]">
              TWENTY1GLOBAL
            </span>
          </div>
          <span className="text-[9px] font-light tracking-[0.1em] text-[#5d7488]/80">
            &copy; {new Date().getFullYear()} | Twenty1Global - All rights reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
