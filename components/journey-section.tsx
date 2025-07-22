"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function JourneySection() {
  const journeySteps = [
    {
      title: "Share Your Story",
      description:
        "Tell us about your spiritual journey, current season, and what you're longing for in your walk with God.",
    },
    {
      title: "Discover Your Path",
      description:
        "Receive personalized guidance, resources, and next steps tailored to your unique calling and circumstances.",
    },
    {
      title: "Grow in Community",
      description:
        "Connect with fellow believers, access tools for discipleship, and step into Kingdom impact together.",
    },
  ]

  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-6">
            Your Journey
            <span className="block text-slate-700">Starts Here</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're exploring faith, just starting out, or seeking to lead and disciple others, The Way
            personalizes encouragement, resources, and next steps for your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200/50 max-w-2xl mx-auto">
            <CheckCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Begin?</h3>
            <p className="text-slate-600 mb-6">
              Everything begins with understanding you—your story, your rhythms, and what you're longing for in this
              season.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-8 py-4 text-lg rounded-full"
              onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
