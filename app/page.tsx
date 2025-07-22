import { HeroSection } from "@/components/hero-section"
import { MovementSection } from "@/components/movement-section"
import { AppShowcase } from "@/components/app-showcase"
import { JourneySection } from "@/components/journey-section"
import { TheWayPricing } from "@/components/the-way-pricing"
import { CallToAction } from "@/components/call-to-action"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <Navigation />
      <HeroSection />
      <MovementSection />
      <AppShowcase />
      <JourneySection />
      <TheWayPricing />
      <CallToAction />
      <Footer />
    </main>
  )
}
