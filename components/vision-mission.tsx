import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function VisionMission() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
      {/* Corner vine accent */}
      <div className="absolute bottom-8 left-8 w-48 h-48 opacity-8 z-10">
        <Image src="/vine-accent-3.png" alt="" fill className="object-contain scale-75" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-8">
          Our
          <span className="block text-slate-700">Mission</span>
        </h2>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200/50 mb-12">
          <blockquote className="text-2xl md:text-3xl font-serif font-light text-slate-700 leading-relaxed mb-8">
            "To help every believer step boldly into the fullness of their calling through personalized,
            Scripture-centered guidance that bridges ancient wisdom with modern technology."
          </blockquote>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-slate-900 mb-2">Activate</div>
              <p className="text-slate-600">Awaken your spiritual gifts and calling</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-slate-900 mb-2">Educate</div>
              <p className="text-slate-600">Deepen your biblical understanding</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-slate-900 mb-2">Unite</div>
              <p className="text-slate-600">Connect the global Body of Christ</p>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Join The Movement
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
