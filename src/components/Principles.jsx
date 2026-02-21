import { Target, ArrowLeftRight, Eye, Shield } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Work backwards from the outcome',
    body: 'I start with the measurable result, then figure out the work. It keeps scope honest, priorities defensible, and conversations grounded in what actually matters.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Make the tradeoff explicit',
    body: "Every product and program decision involves a tradeoff. My job isn't to hide it — it's to name it, quantify it, and make sure the right person owns the call.",
  },
  {
    icon: Eye,
    title: 'Clarity over cleverness',
    body: "The best solution is the one your team can execute and your stakeholders can understand. If it needs a 10-slide explainer, it isn't ready.",
  },
  {
    icon: Shield,
    title: 'Reliability is a product feature',
    body: 'After shipping infrastructure to millions of banking customers, I learned that uptime, latency, and recovery time are product decisions — not just engineering ones.',
  },
]

export default function Principles() {
  return (
    <section id="principles" className="py-24 sm:py-32 relative bg-black">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-zinc-600 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              How I Think
            </p>
            <h2 className="section-heading">Operating Principles</h2>
            <p className="section-subheading max-w-xl mx-auto">
              These aren't values on a slide — they're patterns I've developed from shipping real products under real constraints.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRINCIPLES.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="group flex gap-5 p-6 sm:p-7 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 group-hover:border-zinc-500 transition-all duration-200">
                  <Icon size={18} className="text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
