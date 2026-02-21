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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700/60 text-sm text-slate-400 mb-10 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities · Available May 2027
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 leading-tight mb-6 text-balance">
          Nice that you are here, I am{' '}
          <span className="gradient-text">Chandrapraban</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          Aspiring{' '}
          <span className="text-sky-400 font-semibold">Project / Program Manager</span>
          {' '}· Interested in{' '}
          <span className="text-violet-400 font-semibold">Product Management</span>
          {' '}&amp;{' '}
          <span className="text-violet-400 font-semibold">Supply Chain Management</span>
        </p>

        {/* Bio card */}
        <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm text-left max-w-2xl mx-auto mb-12 shadow-2xl">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Cpu size={18} className="text-white" />
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Previously a{' '}
            <span className="text-sky-400 font-semibold">DevOps Engineer</span>
            {' '}with{' '}
            <span className="text-slate-100 font-semibold">2.5+ years</span>
            {' '}at{' '}
            <span className="text-slate-100 font-semibold">Crayon Data</span>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-sky-400 transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce group-hover:text-sky-400" />
      </button>
    </section>
  )
}
