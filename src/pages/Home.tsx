import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import UnderConstructionBanner from '../components/UnderConstructionBanner'

const VIDEO_URL = '/hero_video.mp4'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <div className="h-screen w-full relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-20">
          <UnderConstructionBanner />
        </div>

        <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 md:p-8 gap-6">
          <Navbar />

          <div className="flex-1 min-h-[2rem]" />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 sm:pb-3">
            <div className="shrink-0 bg-white/50 backdrop-blur-2xl backdrop-saturate-150 border border-white/25 rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-4">
              <h1 className="text-black text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight lg:max-w-lg xl:max-w-2xl">
                Turning Human Input Into{' '}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  Valuable Data
                </span>
              </h1>
              <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed lg:max-w-2xl xl:max-w-3xl">
                End-to-end transcription, annotation, data collection, audio recording, video
                recording, and validation services at scale.
              </p>
              <button
                type="button"
                onClick={() => navigate('/jobs')}
                className="w-fit bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-xl border border-transparent hover:bg-gray-800 active:bg-white active:text-black active:border-gray-900 transition-colors"
              >
                Apply for job
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden">
        <AboutSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  )
}
