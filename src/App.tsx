import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Twitter, Circle, Instagram, Linkedin, ChevronDown } from 'lucide-react'

const VIDEO_URL = '/hero_video.mp4'

const SERVICES = [
  'Website',
  'Mobile App',
  'Web App',
  'E-Commerce',
  'Visual Identity',
  '3D & Motion',
  'Digital Marketing',
  'Growth & Consulting',
  'Other',
]

const DOMAINS = ['Linguistic', 'Transcription', 'Annotation', 'Audio & Video recording']

const NAV_LINKS = ['Our story', 'Expertise', 'Our work']

interface Job {
  title: string
  summary: string
  details: string[]
  order: number
  link?: string
}

const jobModules = import.meta.glob('/jobs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseJob(raw: string): Job {
  let body = raw.replace(/\r\n/g, '\n')
  let title = ''
  let summary = ''
  let order = 0
  let link = ''

  const fm = body.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
  if (fm) {
    body = body.slice(fm[0].length)
    for (const line of fm[1].split('\n')) {
      const idx = line.indexOf(':')
      if (idx === -1) continue
      const key = line.slice(0, idx).trim()
      const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
      if (key === 'title') title = value
      if (key === 'summary') summary = value
      if (key === 'order') order = Number(value) || 0
      if (key === 'link') link = value
    }
  }

  const details = body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, '').trim())

  if (!title) title = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Untitled'
  if (!summary) {
    summary =
      body
        .split('\n')
        .map((line) => line.trim())
        .find((line) => line.length > 0 && !line.startsWith('#') && !/^[-*]\s+/.test(line)) ?? ''
  }

  return { title, summary, details, order, link: link || undefined }
}

const JOBS: Job[] = Object.values(jobModules)
  .map((raw) => parseJob(raw as string))
  .filter((job) => job.title && job.summary)
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))

function SocialBtn({ icon, className }: { icon: React.ReactNode; className: string }) {
  return (
    <button
      type="button"
      aria-label="social link"
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity ${className}`}
    >
      {icon}
    </button>
  )
}

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 256 256" aria-label="Forma logo">
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="black" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
    </svg>
  )
}

export default function App() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [domainsOpen, setDomainsOpen] = useState(false)
  const domainsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (domainsRef.current && !domainsRef.current.contains(e.target as Node)) {
        setDomainsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 md:p-6">
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)] relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6">
          <nav className="flex items-center justify-between gap-3">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 flex items-center gap-3 sm:gap-6">
              <Logo />
              <div className="hidden sm:flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm px-2 sm:px-3 py-2 flex items-center gap-2 sm:gap-3">
              <div ref={domainsRef} className="relative">
                <button
                  type="button"
                  onClick={() => setDomainsOpen((open) => !open)}
                  className="flex items-center gap-1 bg-white text-gray-900 text-sm font-medium px-3 sm:px-4 py-2 rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Domains
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${domainsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {domainsOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 z-50">
                    {DOMAINS.map((domain) => (
                      <a
                        key={domain}
                        href="#"
                        className="block px-3 py-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap"
                      >
                        {domain}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                className="bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Start a project
              </button>
            </div>
          </nav>

          <div className="flex-1 min-h-[2rem]" />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <p className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0">
              We craft bold ideas
              <br />
              and ship them as{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                products
              </span>
            </p>

            <div id="contact-form" className="w-full lg:w-[min(480px,45%)] shrink-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                {sent ? (
                  <div className="flex flex-col items-center py-6 gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-600">
                      ✓
                    </div>
                    <p className="text-base font-semibold text-gray-900">You're all set!</p>
                    <p className="text-sm text-gray-500">Expect a reply within 24 hours.</p>
                  </div>
                ) : (
                  <div className="p-4 sm:p-6 flex flex-col gap-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
                      Say hello! 👋
                    </h2>

                    <div className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5">
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs text-gray-500">Drop us a line</span>
                        <a
                          href="mailto:hello@forma.co"
                          className="text-blue-600 font-semibold hover:underline truncate text-sm"
                        >
                          hello@forma.co
                        </a>
                      </div>
                      <div className="flex flex-row items-center gap-1.5 shrink-0">
                        <SocialBtn
                          icon={<Twitter size={13} />}
                          className="bg-gray-100 text-gray-800"
                        />
                        <SocialBtn
                          icon={<Circle size={13} />}
                          className="bg-pink-100 text-pink-500"
                        />
                        <SocialBtn
                          icon={<Instagram size={13} />}
                          className="bg-orange-100 text-orange-400"
                        />
                        <SocialBtn
                          icon={<Linkedin size={13} />}
                          className="bg-blue-100 text-blue-600"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-gray-400 font-medium text-sm">OR</span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <label className="text-sm font-medium text-black">
                        Tell us about your vision
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full name"
                          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        />
                      </div>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="What are you looking to build or improve..."
                        className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none"
                      />
                      <label className="text-sm font-medium text-black">I need help with...</label>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICES.map((service) => {
                          const active = selected.includes(service)
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                                active
                                  ? 'bg-gray-100 text-black border-black'
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                              }`}
                            >
                              {service}
                            </button>
                          )
                        })}
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60"
                      >
                        {sending ? 'Sending...' : 'Send my message'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10 sm:mt-14">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-t from-black via-neutral-900 to-neutral-800 p-6 sm:p-8 md:p-12 shadow-xl overflow-hidden">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Active projects
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl">
            We're always looking for curious people to join the work. Here's where we need help right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {JOBS.map((job) => (
              <article
                key={job.title}
                className="bg-white text-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold tracking-tight">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.summary}</p>
                <ul className="flex flex-col gap-2.5">
                  {job.details.map((detail, d) => (
                    <li key={d} className="flex gap-2.5 text-sm text-gray-700">
                      <span className="text-black mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={job.link || '#contact-form'}
                  target={job.link?.startsWith('http') ? '_blank' : undefined}
                  rel={job.link?.startsWith('http') ? 'noreferrer' : undefined}
                  className="mt-auto inline-block text-center text-sm font-semibold py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Apply Now
                </a>
              </article>
            ))}
        </div>
        </div>
      </section>
    </div>
  )
}
