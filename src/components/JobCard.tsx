import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Job } from '../lib/jobs'
import { jobSlug } from '../lib/jobs'
import { TALLY_ATTRS } from '../lib/tally'

const STRIP_STYLES = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted']

export default function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <article className="relative bg-white text-black border-4 border-black shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out pt-5 pb-10 overflow-visible">
      <span className="absolute -top-5 -left-5 w-14 h-14 bg-neo-accent border-4 border-black shadow-neo-sm rotate-[-4deg] flex items-center justify-center font-black text-xl text-black">
        {String(index).padStart(2, '0')}
      </span>
      <div className={`${STRIP_STYLES[index % STRIP_STYLES.length]} h-3 w-full border-y-4 border-black`} />
      <div className="p-5 sm:p-6 flex flex-col gap-4">
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black leading-tight pr-6">
          {job.title}
        </h3>
        <p className="text-sm sm:text-base font-bold text-black/70 leading-relaxed line-clamp-2">
          {job.summary}
        </p>
        {job.highlights.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {job.highlights.map((highlight, h) => (
              <li
                key={h}
                className="font-black uppercase text-[11px] tracking-widest px-3 py-1 border-4 border-black bg-neo-cream text-black"
              >
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <Link
          to={`/jobs/${jobSlug(job)}`}
          className="w-fit mt-auto text-sm font-bold uppercase tracking-wide text-black px-2 py-1 hover:bg-black hover:text-neo-secondary transition-colors duration-100"
        >
          View full details →
        </Link>
      </div>
      {job.link ? (
        <a
          href={job.link}
          target={job.link.startsWith('http') ? '_blank' : undefined}
          rel={job.link.startsWith('http') ? 'noreferrer' : undefined}
          className="absolute -bottom-5 right-4 flex items-center gap-1 bg-neo-secondary text-black font-black uppercase text-sm tracking-wide px-5 py-3 border-4 border-black shadow-neo-md rotate-1 hover:bg-[#ffd232] hover:rotate-0 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
        >
          Apply now
          <ArrowUpRight size={18} strokeWidth={3} />
        </a>
      ) : (
        <button
          type="button"
          {...TALLY_ATTRS}
          className="absolute -bottom-5 right-4 flex items-center gap-1 bg-neo-secondary text-black font-black uppercase text-sm tracking-wide px-5 py-3 border-4 border-black shadow-neo-md rotate-1 hover:bg-[#ffd232] hover:rotate-0 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
        >
          Apply now
          <ArrowUpRight size={18} strokeWidth={3} />
        </button>
      )}
    </article>
  )
}