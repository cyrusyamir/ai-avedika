import { ArrowRight } from 'lucide-react'
import { TALLY_ATTRS } from '../lib/tally'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative bg-neo-accent border-t-4 border-black p-3 sm:p-4 md:p-6 py-16 sm:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-halftone opacity-[0.18]" />
      <ArrowRight
        aria-hidden
        size={200}
        strokeWidth={3}
        className="absolute -bottom-12 -right-8 rotate-[-10deg] opacity-20 hidden md:block"
      />
      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7">
        <span className="inline-block w-fit bg-black text-white border-4 border-black rounded-full px-5 py-1.5 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-3deg]">
          Let's talk
        </span>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
          Have a <span className="text-stroke inline-block">Project</span>
          <br />
          in mind?
        </h2>
        <p className="max-w-xl text-base sm:text-lg font-bold text-black/75 leading-relaxed">
          Tell us what you're trying to build, collect, automate, or scale. We'll help you
          determine the right people, process, and technology for the job.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto items-center">
          <button
            type="button"
            {...TALLY_ATTRS}
            className="w-full sm:w-auto bg-black text-white font-black uppercase text-sm tracking-wide px-7 py-3.5 border-4 border-black shadow-[4px_4px_0px_0px_#fff] hover:bg-[#1a1a1a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            Start a conversation
          </button>
          <a
            href="#services"
            className="w-full sm:w-auto bg-white text-black font-black uppercase text-sm tracking-wide px-7 py-3.5 border-4 border-black shadow-neo-sm hover:bg-neo-secondary active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            Explore our work
          </a>
        </div>
      </div>
    </section>
  )
}