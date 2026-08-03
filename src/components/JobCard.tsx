import { Link } from 'react-router-dom'
import type { Job } from '../lib/jobs'
import { jobSlug } from '../lib/jobs'
import { useForm } from '../context/FormContext'

export default function JobCard({ job }: { job: Job }) {
  const { openForm } = useForm()

  return (
    <article className="bg-white text-black rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow">
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
      {job.link ? (
        <a
          href={job.link}
          target={job.link.startsWith('http') ? '_blank' : undefined}
          rel={job.link.startsWith('http') ? 'noreferrer' : undefined}
          className="mt-auto inline-block text-center text-sm font-semibold py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Apply Now
        </a>
      ) : (
        <button
          type="button"
          onClick={openForm}
          className="mt-auto w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Apply Now
        </button>
      )}
      <Link
        to={`/jobs/${jobSlug(job)}`}
        className="text-center text-sm font-medium text-blue-600 hover:underline"
      >
        View full details →
      </Link>
    </article>
  )
}
