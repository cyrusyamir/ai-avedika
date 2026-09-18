import HeroSection from '../components/HeroSection'
import Marquee from '../components/Marquee'
import CapabilitiesGrid from '../components/CapabilitiesGrid'
import ServiceHub from '../components/ServiceHub'
import ProcessSteps from '../components/ProcessSteps'
import ValueProps from '../components/ValueProps'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-neo-cream">
      <HeroSection />
      <Marquee />

      <CapabilitiesGrid />

      <ServiceHub />

      <ProcessSteps />
      <ValueProps />
      <CTASection />
      <Footer />
    </div>
  )
}