import { ExternalLink } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    title: 'AI-Integrated Banking Platform',
    description:
      'Contributed to an AI-powered banking platform generating ~$400M in revenue for clients across South and Southeast Asia, delivering personalized financial experiences at scale.',
    tags: ['AI', 'Cloud', 'Banking', 'DevOps'],
  },
  {
    title: 'Cloud Cost Optimization',
    description:
      'Automated cost-visibility tools reducing cloud infrastructure costs by 40%, providing granular spend analytics and rightsizing recommendations across multi-cloud environments.',
    tags: ['AWS', 'Azure', 'Automation', 'Cost Optimization'],
  },
  {
    title: 'Multi-Cloud Re-Architecture',
    description:
      'Re-architected a core recommendation platform into a cloud-agnostic multi-cloud solution (AWS, Azure, GCP, OCI + CDN), improving global latency by 30% and achieving <100ms API response.',
    tags: ['AWS', 'Azure', 'GCP', 'Multi-Cloud'],
  },
  {
    title: 'CI/CD Developer Productivity Platform',
    description:
      'Built CI/CD and IaC platforms increasing deployment velocity by 60% and reducing client onboarding time by 60%, enabling rapid infrastructure provisioning and delivery.',
    tags: ['CI/CD', 'Terraform', 'Ansible', 'Jenkins'],
  },
  {
    title: 'Secure AI-Enabled Customer Onboarding',
    description:
      'Led end-to-end delivery of a secure AI-enabled onboarding application for a Tier-1 African bank, streamlining KYC and reducing onboarding friction significantly.',
    tags: ['AI', 'Security', 'Banking', 'Cloud'],
  },
  {
    title: 'Human Body Fatigue Measuring Device',
    description:
      'Designed and fabricated a device to measure human body fatigue for COVID-19 detection at crowded workplaces, combining hardware sensing with data analysis.',
    tags: ['Hardware', 'Product Design', 'Fabrication'],
  },
  {
    title: 'Drilling Analysis of Magnesium MMCs',
    description:
      'Experimental research project evaluating drilling characteristics of magnesium metal matrix composites with B4C reinforcement, analyzing tool wear and surface quality.',
    tags: ['Research', 'Manufacturing', 'Materials'],
  },
]

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="group relative flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60">
        {/* Top line on hover */}
        <div className="absolute top-0 left-6 right-6 h-px rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-200">
            <span className="text-zinc-400 font-bold text-sm group-hover:text-white transition-colors duration-200">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <ExternalLink
            size={16}
            className="text-zinc-700 group-hover:text-zinc-300 transition-colors duration-200 mt-1"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-500 text-sm leading-relaxed flex-grow mb-5">
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
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-zinc-600 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              A selection of work spanning cloud infrastructure, AI platforms, and engineering research.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
