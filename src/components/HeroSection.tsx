import { TALLY_ATTRS } from '../lib/tally'
import UnderConstructionBanner from './UnderConstructionBanner'
import Navbar from './Navbar'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-neo-cream bg-grid-lines overflow-hidden">
      {/* decorative floating shape */}
      <div className="absolute top-20 right-8 sm:right-16 w-16 h-16 sm:w-24 sm:h-24 bg-neo-secondary border-4 border-black rotate-12 opacity-60 hidden lg:block" />

      <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 md:p-8 min-h-screen">
        {/* top bar: banner + navbar */}
        <div className="flex flex-col gap-4">
          <UnderConstructionBanner />
          <Navbar />
        </div>

        {/* hero content — centered */}
        <div className="flex-1 flex flex-col items-center justify-center py-12 sm:py-16 gap-8 max-w-4xl mx-auto text-center">
          {/* sticker badge */}
          <span className="inline-block w-fit bg-neo-accent border-4 border-black rounded-full px-4 py-1.5 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-2deg]">
            AI Data &middot; Research &middot; Workforce &middot; Technology
          </span>

          {/* headline */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              People, Data
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              &amp; Technology
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-black mt-2">
              <span className="inline-block bg-neo-secondary border-4 border-black px-4 sm:px-6 py-1 sm:py-2 rotate-[-1deg] shadow-neo-sm">
                Built to Scale
              </span>
            </h1>
          </div>

          {/* body */}
          <p className="text-base sm:text-lg font-bold text-black/80 max-w-2xl leading-relaxed">
            We help businesses collect, process, validate, and operationalize data through AI data
            services, research operations, remote workforces, and technology solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-fit">
            <button
              type="button"
              {...TALLY_ATTRS}
              className="bg-neo-accent text-black font-bold uppercase text-sm tracking-wide px-6 py-3 border-4 border-black shadow-neo-sm hover:bg-[#ff5252] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
            >
              Start a project
            </button>
            <a
              href="#capabilities"
              className="bg-neo-secondary text-black font-bold uppercase text-sm tracking-wide px-6 py-3 border-4 border-black shadow-neo-sm hover:bg-[#ffd232] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 text-center"
            >
              Explore our services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}