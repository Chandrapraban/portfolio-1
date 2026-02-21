import { ExternalLink } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    title: 'Cloud Cost Governance',
    description:
      'Cloud spend was outpacing revenue growth with no per-client visibility into where money was going. I shipped automated cost-visibility tooling with rightsizing recommendations. The tradeoff: automation required upfront tagging discipline, but manual audits wouldn\'t scale.',
    takeaway: 'The cost of inaction was compounding monthly. Invest in tooling, not workarounds. Outcome: 40% cost reduction.',
    tags: ['Cost Governance', 'Automation', 'Multi-cloud', 'Analytics'],
  },
  {
    title: 'Multi-Cloud Re-Architecture',
    description:
      'A single-cloud dependency was both a reliability risk and a pricing risk. I led the re-architecture of our core recommendation engine to cloud-agnostic design across AWS, Azure, GCP, and OCI with a CDN layer — trading operational complexity for resilience and negotiating leverage.',
    takeaway: 'Complexity is only worth adding if it solves a problem you can\'t solve otherwise. Outcome: 30% latency improvement, <100ms API response.',
    tags: ['Architecture Decision', 'Multi-cloud', 'Resilience', 'Tradeoffs'],
  },
  {
    title: 'Developer Productivity Platform',
    description:
      'Engineers were spending more time on manual provisioning than building. I standardized CI/CD and IaC across the org, enabling self-service delivery for internal teams and new clients. One early call shaped everything: standardize before the org grows too large to change.',
    takeaway: 'Productivity tooling is a force multiplier. One hour saved per engineer per day compounds fast. Outcome: 60% faster deployments, 60% faster client onboarding.',
    tags: ['Developer Productivity', 'Platform', 'IaC', 'Standardization'],
  },
  {
    title: 'Human Body Fatigue Measuring Device',
    description:
      'COVID-19 created an urgent need: scalable, non-invasive fatigue screening at crowded workplaces. I designed and fabricated a biometric device from scratch. The defining constraint: hardware has no patch cycle — prioritize ruthlessly before you build, not after.',
    takeaway: 'Hardware forces honesty. You can\'t ship a fix after the fact.',
    tags: ['Product Design', 'Hardware', 'Prototyping', 'Constraints'],
  },
  {
    title: 'Drilling Analysis of Magnesium MMCs',
    description:
      'Magnesium MMCs were emerging as lightweight manufacturing materials, but sparse machinability data created real adoption risk. I designed a controlled experiment evaluating tool wear, surface quality, and cutting parameters — applying the same logic I use in product work: define your variables, control what you can, be honest about what you can\'t.',
    takeaway: 'Research design is product design. Define your constraints before you start.',
    tags: ['Structured Research', 'Manufacturing', 'Experiment Design', 'Analysis'],
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
        <p className="text-zinc-500 text-sm leading-relaxed flex-grow mb-4">
          {project.description}
        </p>

        {/* Takeaway */}
        {project.takeaway && (
          <p className="text-zinc-600 text-xs italic leading-relaxed mb-5 border-t border-zinc-800 pt-4">
            {project.takeaway}
          </p>
        )}

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
            <h2 className="section-heading">Featured Work</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Each project had a real constraint, a decision to make, and an outcome that mattered. Here's how I think through problems.
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
