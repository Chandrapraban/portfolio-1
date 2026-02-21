import { MapPin, Calendar } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const EXPERIENCE = [
  {
    company: 'Cybrid',
    role: 'Student Consultant',
    context: 'Duke University',
    location: 'Remote / Durham, NC',
    period: 'Jan 2026 – Present',
    current: true,
    logo: '/Cybrid-logo.png',
    bullets: [
      'Own the competitive and customer analysis workstream for UK market entry of a stablecoin payments product — mapping business models, pricing dynamics, and flow-of-funds use cases across target verticals',
      'Built a corridor prioritization framework to identify the highest-impact launch markets, balancing regulatory friction, TAM, and competitive density',
      'Synthesizing findings into executive-ready recommendations that directly shape product and go-to-market decisions',
    ],
  },
  {
    company: 'Crayon Data',
    role: 'Platform & Delivery Engineer',
    context: 'Chennai, India',
    location: 'Chennai, India',
    period: 'Nov 2022 – May 2025',
    current: false,
    logo: '/Crayon-logo.png',
    bullets: [
      'Owned delivery and reliability for an AI banking platform serving millions of customers across Asia and Africa — platform contributed to ~$400M in new revenue across client portfolios',
      'Decided to re-architect the core recommendation engine to cloud-agnostic multi-cloud (AWS, Azure, GCP, OCI) — traded operational complexity for resilience and a 30% latency improvement, achieving <100ms API response',
      'Shipped automated cloud cost-visibility tooling that cut infrastructure spend by 40% — chose automation over manual audits because the problem was compounding, not static',
      'Built and standardized CI/CD and IaC platforms across the org — cut deployment time by 60% and client onboarding time by 60%; made self-service delivery possible at scale',
      'Drove incident management standards that reduced average resolution time by 75% — making on-call predictable enough to retain engineers, not just fix incidents',
      'Led end-to-end delivery of a secure AI-powered KYC application for a Tier-1 African bank — no prior playbook, coordinated across security, cloud, and product teams',
      'Owned disaster recovery strategy and RTO/RPO commitments for a platform where downtime had direct financial and compliance consequences',
    ],
  },
  {
    company: 'Crayon Data',
    role: 'Customer Scientist',
    context: 'Chennai, India',
    location: 'Chennai, India',
    period: 'Mar 2022 – Oct 2022',
    current: false,
    logo: '/Crayon-logo.png',
    bullets: [
      'Built customer spending behavior visualizations and analytics tools for HDFC, HSBC, ADIB, and Amex — developed early instinct for how data quality shapes decision quality',
      'Shipped automated data cleaning, pattern-matching, and image standardization pipelines that reduced manual onboarding overhead for client deployments',
    ],
  },
  {
    company: 'NLC India Limited',
    role: 'Project Intern',
    context: 'Neyveli, India',
    location: 'Neyveli, India',
    period: 'Apr 2021 – May 2021',
    current: false,
    logo: '/NLC-logo.png',
    bullets: [
      'Quantified the cost impact of auxiliary boiler outages on a thermal power regenerative system — identified ~$250K USD in excess annual costs',
      'Delivered actionable recommendations to plant management; findings directly informed maintenance scheduling decisions',
    ],
  },
]

function TimelineItem({ exp, index, isLast }) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="relative flex gap-6 sm:gap-8">
        {/* Timeline column */}
        <div className="flex flex-col items-center">
          <div className="relative flex-shrink-0 w-3.5 h-3.5 rounded-full bg-white ring-4 ring-white/10 z-10 mt-1.5">
            {exp.current && (
              <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
            )}
          </div>
          {!isLast && (
            <div className="flex-grow w-px bg-gradient-to-b from-zinc-700 to-transparent mt-3" />
          )}
        </div>

        {/* Content */}
        <div style={{ paddingBottom: isLast ? '0' : '3.5rem' }} className="flex-grow">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-7 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  {exp.logo && (
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white flex items-center justify-center overflow-hidden p-1">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                  {exp.current && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white border border-white/15">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-zinc-300 font-semibold text-base">{exp.role}</p>
                {exp.context !== exp.location && (
                  <p className="text-zinc-600 text-xs mt-0.5">{exp.context}</p>
                )}
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-800/70 px-3 py-1.5 rounded-lg">
                  <Calendar size={12} className="text-zinc-600" />
                  {exp.period}
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-600 px-3 py-1.5">
                  <MapPin size={12} />
                  {exp.location}
                </div>
              </div>
            </div>

            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-zinc-600" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#0a0a0a]">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-zinc-600 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Career
            </p>
            <h2 className="section-heading">Work Experience</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              From shipping AI infrastructure at scale to advising on market entry strategy — a track record of owning outcomes, not just executing tasks.
            </p>
          </div>
        </ScrollReveal>

        <div>
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem
              key={`${exp.company}-${exp.role}`}
              exp={exp}
              index={i}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
