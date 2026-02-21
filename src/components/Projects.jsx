import { ExternalLink } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    title: 'AI-Integrated Banking Platform',
    description:
      'Contributed to an AI-powered banking platform generating ~$400M in revenue for clients across South and Southeast Asia, delivering personalized financial experiences at scale.',
    tags: ['AI', 'Cloud', 'Banking', 'DevOps'],
    accent: 'from-sky-400 to-cyan-400',
  },
  {
    title: 'Cloud Cost Optimization',
    description:
      'Automated cost-visibility tools reducing cloud infrastructure costs by 40%, providing granular spend analytics and rightsizing recommendations across multi-cloud environments.',
    tags: ['AWS', 'Azure', 'Automation', 'Cost Optimization'],
    accent: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Multi-Cloud Re-Architecture',
    description:
      'Re-architected a core recommendation platform into a cloud-agnostic multi-cloud solution (AWS, Azure, GCP, OCI + CDN), improving global latency by 30% and achieving <100ms API response.',
    tags: ['AWS', 'Azure', 'GCP', 'Multi-Cloud'],
    accent: 'from-violet-400 to-purple-400',
  },
  {
    title: 'CI/CD Developer Productivity Platform',
    description:
      'Built CI/CD and IaC platforms increasing deployment velocity by 60% and reducing client onboarding time by 60%, enabling rapid infrastructure provisioning and delivery.',
    tags: ['CI/CD', 'Terraform', 'Ansible', 'Jenkins'],
    accent: 'from-orange-400 to-amber-400',
  },
  {
    title: 'Secure AI-Enabled Customer Onboarding',
    description:
      'Led end-to-end delivery of a secure AI-enabled onboarding application for a Tier-1 African bank, streamlining KYC and reducing onboarding friction significantly.',
    tags: ['AI', 'Security', 'Banking', 'Cloud'],
    accent: 'from-rose-400 to-pink-400',
  },
  {
    title: 'Human Body Fatigue Measuring Device',
    description:
      'Designed and fabricated a device to measure human body fatigue for COVID-19 detection at crowded workplaces, combining hardware sensing with data analysis.',
    tags: ['Hardware', 'Product Design', 'Fabrication'],
    accent: 'from-sky-400 to-indigo-400',
  },
  {
    title: 'Drilling Analysis of Magnesium MMCs',
    description:
      'Experimental research project evaluating drilling characteristics of magnesium metal matrix composites with B4C reinforcement, analyzing tool wear and surface quality.',
    tags: ['Research', 'Manufacturing', 'Materials'],
    accent: 'from-teal-400 to-emerald-400',
  },
]

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="group relative flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
        {/* Top accent line */}
        <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
            <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <ExternalLink
            size={16}
            className="text-slate-600 group-hover:text-sky-400 transition-colors duration-200 mt-1"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sky-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              A selection of work spanning cloud infrastructure, AI platforms, and engineering research.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
