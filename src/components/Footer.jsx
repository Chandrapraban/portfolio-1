import { Mail, Linkedin, Phone, Code2, ArrowUp } from 'lucide-react'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Code2 size={16} className="text-black" />
            </div>
            <div>
              <p className="text-zinc-100 font-bold text-sm">Chandrapraban</p>
              <p className="text-zinc-600 text-xs">Aspiring PM · MEM @ Duke</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: 'mailto:cu28@duke.edu', icon: Mail, label: 'Email' },
              { href: 'tel:+19196856721', icon: Phone, label: 'Phone' },
              { href: 'https://www.linkedin.com/in/chandrapraban-u-057402121/', icon: Linkedin, label: 'LinkedIn', external: true },
            ].map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-white hover:border-zinc-600 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="text-zinc-700 text-xs">
              © {year} Chandrapraban. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-white hover:border-zinc-600 transition-all duration-200"
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
