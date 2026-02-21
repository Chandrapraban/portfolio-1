import { GraduationCap, BookOpen, Users, FileText, Award } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const EDUCATION = [
  {
    school: 'Duke University',
    location: 'Durham, NC',
    degree: 'Masters in Engineering Management (MEM)',
    period: 'Aug 2025 – May 2027',
    gpa: '3.8',
    gpaLabel: 'GPA',
    logoText: 'DU',
    coursework: [
      'Product Management',
      'Competitive Strategy',
      'Marketing',
      'Managing AI in Business',
      'Project Management',
      'Consulting Practicum',
    ],
    leadership: [
      'External Affairs Lead – MEM Supply Chain Management Club',
      'Cabinet Member – MEM Vibe Coding Club',
    ],
    docs: [
      { label: 'View Transcript', href: '#' },
      { label: 'View Degree Certificate', href: '#' },
    ],
  },
  {
    school: 'SSN College of Engineering',
    location: 'Chennai, India',
    degree: 'Bachelor of Engineering, Mechanical',
    period: 'Aug 2018 – Jun 2022',
    gpa: '3.84',
    gpaLabel: 'First Class with Distinction',
    logoText: 'SSN',
    coursework: [
      'Machine Learning Applications',
      'Product Design and Development',
      'Operations Research',
    ],
    leadership: [
      'Member of College Racing Team (SAE)',
      'Member of SSN Music Club',
    ],
    docs: [
      { label: 'View Transcript', href: '#' },
      { label: 'View Degree Certificate', href: '#' },
    ],
  },
]

function EducationCard({ edu, index }) {
  return (
    <ScrollReveal delay={index * 150}>
      <div className="group relative flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 hover:-translate-y-1">
        {/* Top bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

        <div className="p-6 sm:p-8 flex flex-col h-full">
          {/* School header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/10">
              <span className="text-black font-bold text-xs tracking-tight">{edu.logoText}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">{edu.school}</h3>
              <p className="text-zinc-600 text-sm mt-0.5">{edu.location}</p>
            </div>
          </div>

          {/* Degree & meta */}
          <div className="mb-6 pb-6 border-b border-zinc-800">
            <p className="text-zinc-200 font-semibold text-base mb-3">{edu.degree}</p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-800/60 px-3 py-1.5 rounded-lg">
                <GraduationCap size={13} className="text-zinc-600" />
                {edu.period}
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-800/60 px-3 py-1.5 rounded-lg font-medium">
                <Award size={13} className="text-zinc-400" />
                GPA {edu.gpa} · {edu.gpaLabel}
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={14} className="text-zinc-500" />
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Relevant Coursework
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Leadership / Activities */}
          <div className="mb-6 flex-grow">
            <div className="flex items-center gap-2 mb-3">
              <Users size={14} className="text-zinc-500" />
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Leadership &amp; Activities
              </h4>
            </div>
            <ul className="space-y-2">
              {edu.leadership.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Document buttons */}
          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-zinc-800">
            {edu.docs.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium border border-zinc-700 text-zinc-500 hover:text-white hover:border-zinc-500 hover:bg-white/5 transition-all duration-200"
              >
                <FileText size={13} />
                {doc.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative bg-[#0a0a0a]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-zinc-600 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Academic Background
            </p>
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Graduate and undergraduate studies spanning engineering management, mechanical engineering, and business strategy.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.school} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
