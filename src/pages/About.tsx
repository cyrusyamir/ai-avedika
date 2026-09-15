import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import SubPageLayout from '../components/SubPageLayout'
import SubPageBanner from '../components/SubPageBanner'
import SubPageCta from '../components/SubPageCta'
import Marquee from '../components/Marquee'
import { SITE_NAME } from '../lib/site'
import { BTN_YELLOW, BTN_VIOLET } from '../lib/ui'

const stats = [
  { value: '40+', label: 'Languages covered' },
  { value: '10k+', label: 'Hours delivered' },
  { value: '99.2%', label: 'QA accuracy' },
]

const STRIP_STYLES = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted']

export default function About() {
  return (
    <SubPageLayout>
      <SubPageBanner
        badge="About us"
        badgeClass="bg-neo-secondary"
        bandClass="bg-neo-accent"
        texture="halftone"
      >
        <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
          We turn human effort into{' '}
          <span className="text-stroke inline-block">reliable data</span>
        </h1>
        <div className="mt-10 flex flex-col sm:flex-row items-start gap-6 max-w-3xl">
          <span className="bg-black text-white border-4 border-black shadow-neo-md rotate-[-2deg] px-5 py-3 font-black uppercase text-sm tracking-widest">
            The AI data-services arm of {SITE_NAME.toLowerCase()}.com
          </span>
          <ArrowRight
            aria-hidden
            size={44}
            strokeWidth={3}
            className="text-black rotate-[-45deg] hidden sm:block shrink-0"
          />
        </div>
      </SubPageBanner>

      <Marquee />

      <section className="relative bg-neo-cream bg-grid-lines overflow-hidden">
        <span
          aria-hidden
          className="absolute top-6 left-2 lg:left-10 text-[9rem] lg:text-[13rem] font-black uppercase text-stroke leading-none opacity-40 select-none pointer-events-none"
        >
          About
        </span>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Story card */}
            <div className="lg:col-span-7 relative">
              <span className="absolute -top-6 -left-2 sm:-left-6 bg-neo-muted text-black border-4 border-black px-4 py-1.5 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-4deg] z-10">
                Who we are
              </span>
              <div className="bg-white border-4 border-black shadow-neo-lg p-6 sm:p-10">
                <div className="h-3 w-16 border-b-4 border-black bg-neo-accent" />
                <p className="mt-6 text-base sm:text-lg font-bold text-black/80 leading-relaxed">
                  {SITE_NAME} designs and runs data collection, transcription, annotation and
                  validation programs that power speech, vision and NLP systems for teams of every
                  size.
                </p>
                <p className="mt-4 text-base sm:text-lg font-bold text-black/70 leading-relaxed">
                  Built on a freelance, on-demand model, we bring together vetted specialists for
                  every engagement — from studio and field recording to multi-reviewer QA. Every
                  project runs on clear guidelines, documented consent, and measurable quality, so
                  the data you ship into training is data you can trust.
                </p>
                <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4">
                  <Link to="/projects" className={`${BTN_YELLOW} inline-block w-fit text-center`}>
                    See what we do
                  </Link>
                  <Link to="/jobs" className={`${BTN_VIOLET} inline-block w-fit text-center`}>
                    Join the work
                  </Link>
                </div>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative border-4 border-black bg-white shadow-neo-md hover:-translate-y-1 hover:rotate-0 transition-all duration-200 ease-out ${
                    i % 3 === 0 ? 'rotate-1' : i % 3 === 1 ? '-rotate-1' : 'rotate-[1.5deg]'
                  }`}
                >
                  <div
                    className={`${STRIP_STYLES[i % STRIP_STYLES.length]} h-3 w-full border-b-4 border-black`}
                  />
                  <div className="p-6 flex flex-col gap-1">
                    <p className="text-5xl sm:text-6xl font-black tracking-tighter text-black leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-bold uppercase text-sm tracking-wide text-black/70">
                      {stat.label}
                    </p>
                  </div>
                  {i === 0 && (
                    <Star
                      aria-hidden
                      size={24}
                      fill="#000"
                      strokeWidth={3}
                      className="absolute top-3 right-3 rotate-12"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SubPageCta
        bandClass="bg-black"
        heading={
          <>
            Flexible by design.
            <br />
            Reliable by process.
          </>
        }
        actions={
          <>
            <Link to="/projects" className={`${BTN_YELLOW} text-center`}>
              Explore projects
            </Link>
            <Link to="/jobs" className={`${BTN_VIOLET} text-center`}>
              Apply for work
            </Link>
          </>
        }
      />
    </SubPageLayout>
  )
}