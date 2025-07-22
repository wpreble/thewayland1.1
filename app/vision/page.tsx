import { Navigation } from "@/components/navigation"
import { CallToAction } from "@/components/call-to-action"
import Image from "next/image"

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      {/* Background Vine Decoration - Growing from right side */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 z-0 pointer-events-none">
        <Image src="/horizontal-vine.png" alt="" fill className="object-contain rotate-90 scale-150" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 relative mx-auto mb-6">
              <Image src="/logo.png" alt="The Way Logo" width={64} height={64} className="object-contain" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-8 leading-tight">Our Vision</h1>
            <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              Rediscovering the original Way of Christ for a new generation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-light text-slate-900 mb-8">Beyond Traditional Bible Study</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                This generation is being invited to rediscover the original Way—the path of the first followers of
                Christ, rooted in the faith of those who have gone before us, yet not held back by the systems,
                structures, or strongholds that hinder you from directly experiencing the fullness of God.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To help every believer step boldly into the fullness of their calling through personalized,
                  Scripture-centered guidance that bridges ancient wisdom with modern technology.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Our Approach</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We're bringing biblical truth and emerging technology together to activate, educate, and unite the
                  Body of Christ. Here, you'll find a path that's personal, practical, and supernatural.
                </p>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-light text-slate-900 mb-8">Three Pillars of The Way</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Activate</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Awaken your spiritual gifts and calling through personalized guidance and biblical insight.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Educate</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Deepen your biblical understanding with historical context and practical application.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Unite</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Connect the global Body of Christ in a movement of transformation and Kingdom impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-12 text-center">
              <blockquote className="text-2xl font-serif font-light text-slate-700 leading-relaxed mb-6">
                "You were created for more than the mundane. Step boldly into a life of deep connection with God,
                radical transformation, and Kingdom impact—right where you are, right now."
              </blockquote>
              <p className="text-slate-500 font-medium">— The Way Movement</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
