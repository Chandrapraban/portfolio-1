import { useState } from 'react'
import { Mail, Phone, Linkedin, Send, CheckCircle, MapPin } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'cu28@duke.edu',
    href: 'mailto:cu28@duke.edu',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(919) 685-6721',
    href: 'tel:+19196856721',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/chandrapraban-u-057402121/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Durham, NC',
    href: null,
  },
]

function ContactInfo() {
  return (
    <div className="space-y-4">
      {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-center gap-4 group">
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center group-hover:border-zinc-500 group-hover:bg-zinc-700 transition-all duration-200">
            <Icon size={18} className="text-zinc-500 group-hover:text-white transition-colors duration-200" />
          </div>
          <div>
            <p className="text-xs text-zinc-600 mb-0.5">{label}</p>
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-zinc-300 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                {value}
              </a>
            ) : (
              <p className="text-zinc-300 text-sm font-medium">{value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-64 text-center py-12">
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-zinc-500 text-sm max-w-xs">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
          className="mt-6 text-zinc-400 text-sm hover:text-white transition-colors duration-200"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass = (err) =>
    `w-full px-4 py-3 bg-zinc-800 border rounded-xl text-zinc-100 text-sm placeholder-zinc-600
     focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500
     transition-all duration-200 ${err ? 'border-rose-500/60' : 'border-zinc-700'}`

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="contact-name">Full Name</label>
        <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange}
          placeholder="John Doe" className={fieldClass(errors.name)} />
        {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="contact-email">Email Address</label>
        <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="john@example.com" className={fieldClass(errors.email)} />
        {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          className={`${fieldClass(errors.message)} resize-none`} />
        {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
      </div>

      <button type="submit" className="w-full btn-primary justify-center py-3.5 text-base">
        <Send size={17} />
        Send Message
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#0a0a0a]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-zinc-600 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="section-heading">Contact</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Whether it's an opportunity, a collaboration, or just a hello — my inbox is always open.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal delay={0}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 sm:p-9 h-full">
              <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                I'm currently pursuing my MEM at Duke University and actively exploring roles in
                project management, product management, and supply chain. Feel free to reach out
                for collaborations, opportunities, or just to connect.
              </p>
              <ContactInfo />
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse flex-shrink-0" />
                  <span>Available for full-time roles starting May 2027</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 sm:p-9">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
