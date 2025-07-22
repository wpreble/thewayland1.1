import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"
import { ArrowRight, Download, Heart } from "lucide-react"

export function ButtonShowcase() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-slate-900 mb-4">Interactive Elements</h2>
          <p className="text-lg text-slate-600">Experience our premium button designs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Liquid Glass Buttons */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">Liquid Glass Effects</h3>
            <div className="space-y-6">
              <LiquidButton size="lg" className="text-slate-900 font-medium">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </LiquidButton>

              <LiquidButton size="xl" className="text-slate-900 font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Join Community
              </LiquidButton>

              <LiquidButton size="xxl" className="text-slate-900 font-bold">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </LiquidButton>
            </div>
          </div>

          {/* Metal Buttons */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">Premium Metal Effects</h3>
            <div className="space-y-6">
              <MetalButton variant="primary">Primary Action</MetalButton>

              <MetalButton variant="gold">Premium Feature</MetalButton>

              <MetalButton variant="success">Success State</MetalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
