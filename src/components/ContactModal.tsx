import { useEffect, useState, type FormEvent } from 'react'
import { Twitter, Circle, Instagram, Linkedin, X } from 'lucide-react'
import SocialBtn from './SocialBtn'
import { CONTACT_EMAIL } from '../lib/site'

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

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return
    setSent(false)
    setSending(false)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

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
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X size={16} />
        </button>
        {sent ? (
          <div className="flex flex-col items-center py-6 gap-3 p-4 sm:p-6">
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-600 font-semibold hover:underline truncate text-sm"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex flex-row items-center gap-1.5 shrink-0">
                <SocialBtn icon={<Twitter size={13} />} className="bg-gray-100 text-gray-800" />
                <SocialBtn icon={<Circle size={13} />} className="bg-pink-100 text-pink-500" />
                <SocialBtn
                  icon={<Instagram size={13} />}
                  className="bg-orange-100 text-orange-400"
                />
                <SocialBtn icon={<Linkedin size={13} />} className="bg-blue-100 text-blue-600" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 font-medium text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-sm font-medium text-black">Tell us about your vision</label>
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
  )
}
