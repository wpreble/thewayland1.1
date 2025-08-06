"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Crown } from "lucide-react"
import Image from "next/image"

export function EarlyAccessCTA() {
  const handleJoinWaitlist = () => {
    // Scroll to waitlist form
    document.querySelector("#waitlist-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePriorityAccess = () => {
    // This would integrate with Stripe
    console.log("Redirect to Stripe for priority access")
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 p-3">
            <Image src="/logo.png" alt="The Way Logo" width={40} height={40} className="object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            This is your call to
            <span className="block text-slate-300">Ascension.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Deepen your walk, learn the word, connect to the body, Follow The Way.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleJoinWaitlist}
            size="lg"
            className="bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-serif"
          >
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={handlePriorityAccess}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-serif font-bold"
          >
            <Crown className="mr-2 w-5 h-5" />
            Get Priority Access
          </Button>
        </div>
      </div>
    </section>
  )
}
