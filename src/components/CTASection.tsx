import { TALLY_ATTRS } from '../lib/tally'

export default function CTASection() {
  return (
    <section id="cta" className="bg-neo-cream p-3 sm:p-4 md:p-6 pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="relative bg-black text-white border-4 border-black shadow-neo-xl p-8 sm:p-12 md:p-16 flex flex-col items-center text-center gap-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#fff_2px,transparent_2.5px)] bg-[length:30px_30px] opacity-15" />
        <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.95]">
          Have a <span className="text-stroke-white">Project</span> in Mind?
        </h2>
        <p className="relative text-base sm:text-lg font-bold text-white/80 max-w-xl leading-relaxed">
          Tell us what you're trying to build, collect, automate, or scale. We'll help you
          determine the right people, process, and technology for the job.
        </p>
        <button
          type="button"
          {...TALLY_ATTRS}
          className="relative bg-neo-accent text-black font-bold uppercase text-sm tracking-wide px-7 py-3.5 border-4 border-black shadow-[4px_4px_0px_0px_#fff] hover:bg-[#ff5252] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
        >
          Start a conversation
        </button>
      </div>
    </section>
  )
}