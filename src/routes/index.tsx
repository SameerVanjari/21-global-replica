import { createFileRoute } from "@tanstack/react-router"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Cursor } from "@/components/Cursor"
import { DotNav } from "@/components/DotNav"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { SustainabilitySection } from "@/components/sections/SustainabilitySection"
import { MarketsSection } from "@/components/sections/MarketsSection"
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { FMCGSection } from "@/components/sections/FMCGSection"
import { ContactSection } from "@/components/sections/ContactSection"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <>
      <Cursor />
      <DotNav />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MarketsSection />
      <GlobalPresenceSection />
      <ProcessSection />
      <FMCGSection />
      <SustainabilitySection />
      <ContactSection />

      <Footer />
    </>
  )
}
