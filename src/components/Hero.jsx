import { ArrowDown, ChevronRight, Briefcase, Cpu } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-10 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Open to opportunities · Available May 2027
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 text-balance">
          Nice that you are here, I am{' '}
          <span className="gradient-text">Chandrapraban</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          Aspiring{' '}
          <span className="text-zinc-200 font-semibold">Project / Program Manager</span>
          {' '}· Interested in{' '}
          <span className="text-zinc-300 font-semibold">Product Management</span>
          {' '}&amp;{' '}
          <span className="text-zinc-300 font-semibold">Supply Chain Management</span>
        </p>

        {/* Bio card */}
        <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm text-left max-w-2xl mx-auto mb-12 shadow-2xl">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/10">
            <Cpu size={18} className="text-black" />
          </div>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Previously a{' '}
            <span className="text-white font-semibold">DevOps Engineer</span>
            {' '}with{' '}
            <span className="text-white font-semibold">2.5+ years</span>
            {' '}at{' '}
            <span className="text-white font-semibold">Crayon Data</span>
            {' '}— building AI-powered banking platforms and cloud infrastructure at scale.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary text-base px-8 py-3.5"
          >
            View My Work
            <ChevronRight size={18} />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-outline text-base px-8 py-3.5"
          >
            <Briefcase size={18} />
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('projects')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-300 transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}
