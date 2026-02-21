import { Mail, Linkedin, Phone, Code2, ArrowUp } from 'lucide-react'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <p className="text-slate-100 font-bold text-sm">Chandrapraban</p>
              <p className="text-slate-500 text-xs">Aspiring PM · MEM @ Duke</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:cu28@duke.edu"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:+19196856721"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/chandrapraban-u-057402121/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>

          {/* Copyright & scroll top */}
          <div className="flex items-center gap-4">
            <p className="text-slate-600 text-xs">
              © {year} Chandrapraban. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
