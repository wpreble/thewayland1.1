import { Users, Shield, CreditCard, Crown } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Crown,
      title: "Founding Member",
      description:
        "Founding members who pledge support will be eligible for future rewards including early access to new features, inclusion in a private founders community chat, and more.",
    },
    {
      icon: Users,
      title: "Weekly Invitations",
      description: "New members are invited from the waitlist in small groups each week.",
    },
    {
      icon: Shield,
      title: "100% Refundable",
      description:
        "Deposits guarantee you're first in line and are 100% refundable before you activate your membership.",
    },
    {
      icon: CreditCard,
      title: "Covers First Month",
      description: "If you stay, your deposit covers your first month.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-6">How Early Access Works:</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
