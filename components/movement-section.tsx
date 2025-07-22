import { Leaf, Users, BookOpen, Heart } from "lucide-react"

export function MovementSection() {
  return (
    <section id="vision" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      {/* Strategic vine accents */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-6">
            More Than an App—
            <span className="block text-slate-700">A Spiritual Movement</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The Way isn't just another Bible app; it's a spiritual movement designed to help you step boldly into the
            fullness of your calling. We're bringing biblical truth and emerging technology together to activate,
            educate, and unite the Body of Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Leaf,
              title: "Rooted in Truth",
              description:
                "Grounded in the original Way of the first followers of Christ, yet not held back by limiting systems.",
            },
            {
              icon: Users,
              title: "Unite the Body",
              description:
                "Connect with believers worldwide in a movement of radical transformation and Kingdom impact.",
            },
            {
              icon: BookOpen,
              title: "Personal & Practical",
              description: "AI-powered guidance that adapts to your unique journey, story, and spiritual rhythms.",
            },
            {
              icon: Heart,
              title: "Supernatural Support",
              description: "Experience wisdom, encouragement, and tools that support your supernatural walk with God.",
            },
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
