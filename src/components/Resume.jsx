import { Download, ExternalLink } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const RESUME_URL = '/Chandrapraban_U-%20Resume.pdf'

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32 relative bg-[#0a0a0a]">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-zinc-600 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Resume
            </p>
            <h2 className="section-heading">My Resume</h2>
            <p className="section-subheading max-w-xl mx-auto">
              View inline or download a copy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex justify-center gap-3 mb-8">
            <a
              href={RESUME_URL}
              download
              className="btn-primary text-sm px-5 py-2.5"
            >
              <Download size={15} />
              Download PDF
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm px-5 py-2.5"
            >
              <ExternalLink size={15} />
              Open in new tab
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/60">
            <iframe
              src={RESUME_URL}
              title="Chandrapraban Resume"
              className="w-full"
              style={{ height: '80vh', minHeight: '600px' }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
