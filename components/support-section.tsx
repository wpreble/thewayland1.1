export function SupportSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-serif font-semibold text-white mb-4">Have questions or need support?</h3>
        <p className="text-slate-300">
          Email:{" "}
          <a
            href="mailto:will@ascendance.one"
            className="text-white hover:text-slate-200 hover:underline font-medium transition-colors"
          >
            will@ascendance.one
          </a>
        </p>
      </div>
    </section>
  )
}
