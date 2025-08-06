"use client"

export function WaitlistForm() {
  return (
    <section id="waitlist-form" className="py-16 bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-6">Join the Waitlist</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Enter your email below to reserve your spot.
          <br />
          You'll receive early access updates, exclusive invites, and transformative resources from The Way team.
        </p>

        <div className="max-w-md mx-auto">
          <iframe
            src="https://tally.so/embed/wL2W7z?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="The Way Product Waitlist"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
