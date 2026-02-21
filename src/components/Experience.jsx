import { Briefcase, MapPin, Calendar } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const EXPERIENCE = [
  {
    company: 'Cybrid',
    role: 'Student Consultant',
    context: 'Duke University',
    location: 'Remote / Durham, NC',
    period: 'Jan 2026 – Present',
    current: true,
    accent: 'bg-sky-400',
    ringColor: 'ring-sky-400/30',
    bullets: [
      'Driving UK market entry strategy for a stablecoin payments product',
      'Leading competitive and customer analysis across business models, target verticals, pricing dynamics, and flow-of-funds use cases',
      'Evaluating remittance and B2B payment corridors to prioritize high-impact launch markets',
    ],
  },
  {
    company: 'Crayon Data',
    role: 'DevOps Engineer',
    context: 'Chennai, India',
    location: 'Chennai, India',
    period: 'Nov 2022 – May 2025',
    current: false,
    accent: 'bg-violet-400',
    ringColor: 'ring-violet-400/30',
    bullets: [
      'Contributed to an AI-integrated banking platform driving ~$400M in new revenue across client portfolios',
      'Reduced cloud infrastructure costs by 40% through automated cost-visibility tools',
      'Re-architected core recommendation platform to multi-cloud (AWS, Azure, GCP, OCI), improving global latency by 30% and achieving <100ms API response',
      'Increased deployment velocity by 60% via CI/CD and IaC platforms; reduced client onboarding time by 60%',
      'Cut average incident resolution time by 75% through standardized incident management',
      'Reduced manual operational effort by 85%+ by scaling cloud automation standards',
      'Led delivery of a secure AI-enabled onboarding application for a Tier-1 African bank',
      'Owned disaster recovery strategy ensuring compliance with agreed RTO/RPO commitments',
    ],
  },
  {
    company: 'Crayon Data',
    role: 'Customer Scientist',
    context: 'Chennai, India',
    location: 'Chennai, India',
    period: 'Mar 2022 – Oct 2022',
    current: false,
    accent: 'bg-emerald-400',
    ringColor: 'ring-emerald-400/30',
    bullets: [
      'Developed data visualizations for customer spending behaviour analysis',
      'Built tools for data cleaning, pattern matching, and automated image standardization for clients including HDFC, HSBC, ADIB, and Amex',
    ],
  },
  {
    company: 'NLC India Limited',
    role: 'Project Intern',
    context: 'Neyveli, India',
    location: 'Neyveli, India',
    period: 'Apr 2021 – May 2021',
    current: false,
    accent: 'bg-amber-400',
    ringColor: 'ring-amber-400/30',
    bullets: [
      'Assessed efficiency and cost impact of auxiliary high-pressure boiler outages on thermal power plant regenerative system',
      'Identified approximately INR 2 Cr (~$250K USD) in excess costs from heater outages, providing actionable recommendations',
    ],
  },
]

function TimelineItem({ exp, index, isLast }) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="relative flex gap-6 sm:gap-8">
        {/* Left column: timeline */}
        <div className="flex flex-col items-center">
          {/* Dot */}
          <div className={`relative flex-shrink-0 w-4 h-4 rounded-full ${exp.accent} ring-4 ${exp.ringColor} z-10 mt-1`}>
            {exp.current && (
              <span className={`absolute inset-0 rounded-full ${exp.accent} animate-ping opacity-40`} />
            )}
          </div>
          {/* Line */}
          {!isLast && (
            <div className="flex-grow w-px bg-gradient-to-b from-zinc-700 to-transparent mt-3" />
          )}
        </div>

        {/* Right column: content */}
        <div className={`group flex-grow pb-${isLast ? '0' : '12'} sm:pb-${isLast ? '0' : '14'}`}
          style={{ paddingBottom: isLast ? '0' : '3.5rem' }}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-7 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-100">{exp.company}</h3>
                  {exp.current && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sky-500/15 text-sky-400 border border-sky-500/20">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sky-400 font-semibold text-base">{exp.role}</p>
                {exp.context !== exp.location && (
                  <p className="text-slate-500 text-xs mt-0.5">{exp.context}</p>
                )}
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-zinc-800/70 px-3 py-1.5 rounded-lg">
                  <Calendar size={12} className="text-slate-500" />
                  {exp.period}
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 px-3 py-1.5">
                  <MapPin size={12} />
                  {exp.location}
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className={`mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full ${exp.accent}`} />
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
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-sky-500/30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sky-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Career
            </p>
            <h2 className="section-heading">Work Experience</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              From cloud infrastructure and DevOps to consulting and data science — a track record of impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
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
