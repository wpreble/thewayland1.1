import Image from "next/image"

export function EarlyAccessHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-slate-200/60 to-slate-300/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-slate-300/50 to-slate-400/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-8">
          <div className="w-16 h-16 relative mx-auto mb-6">
            <Image src="/logo.png" alt="The Way Logo" width={64} height={64} className="object-contain" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-slate-900 mb-6 leading-tight">
            The Way —<span className="block text-slate-700">Early Access</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Be among the first to experience The Way—a new kind of Bible app for a spiritually activated life.
          </p>
        </div>
      </div>
    </section>
  )
}
