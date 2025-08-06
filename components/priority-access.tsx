"use client"

import { Button } from "@/components/ui/button"
import { Crown, ArrowRight } from 'lucide-react'

export function PriorityAccess() {
  const handlePriorityAccess = () => {
    // This would integrate with Stripe
    console.log("Redirect to Stripe for priority access")
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl border border-slate-600/50">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Crown className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">Want to Skip the Line?</h2>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Make a fully refundable, good-faith deposit to move to the top of the waitlist. If you decide to continue,
            your deposit covers your first month's membership in The Way. If you change your mind, you can request a
            full refund at any time—no questions asked.
          </p>

          <Button
            onClick={handlePriorityAccess}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-serif font-bold"
          >
            Get Priority Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-slate-400 mt-4">Powered by Stripe • 100% Refundable</p>
        </div>
      </div>
    </section>
  )
}
