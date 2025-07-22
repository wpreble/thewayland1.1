"use client"

import Image from "next/image"

export function AppShowcase() {
  return (
    <section id="app" className="relative py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-6">
            Experience
            <span className="block text-slate-700">WayFinder AI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Your personal Christ-centered AI assistant for Scripture, prayer, and historical perspective. Designed to
            understand your story, rhythms, and spiritual longings.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-white shadow-inner">
              <Image
                src="/app-dark.png"
                alt="The Way App Interface"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating feature cards */}
          <div className="absolute -left-8 top-1/4 hidden lg:block">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
              <h4 className="font-semibold text-slate-900 mb-2">Personalized Guidance</h4>
              <p className="text-sm text-slate-600">AI that understands your unique spiritual journey</p>
            </div>
          </div>

          <div className="absolute -right-8 top-1/3 hidden lg:block">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
              <h4 className="font-semibold text-slate-900 mb-2">Scripture & Prayer</h4>
              <p className="text-sm text-slate-600">Deep biblical insights and prayer generation</p>
            </div>
          </div>

          <div className="absolute -left-12 bottom-1/4 hidden lg:block">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
              <h4 className="font-semibold text-slate-900 mb-2">Historical Context</h4>
              <p className="text-sm text-slate-600">Rich historical perspectives on Scripture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
