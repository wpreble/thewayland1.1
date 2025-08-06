import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EarlyAccessHero } from "@/components/early-access-hero"
import { WaitlistForm } from "@/components/waitlist-form"
import { PriorityAccess } from "@/components/priority-access"
import { HowItWorks } from "@/components/how-it-works"
import { EarlyAccessCTA } from "@/components/early-access-cta"
import { SupportSection } from "@/components/support-section"

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EarlyAccessHero />
      <EarlyAccessCTA />
      <WaitlistForm />
      <PriorityAccess />
      <HowItWorks />
      <SupportSection />
      <Footer />
    </main>
  )
}
