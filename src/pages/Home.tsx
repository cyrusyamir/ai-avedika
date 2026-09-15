import HeroSection from '../components/HeroSection'
import Marquee from '../components/Marquee'
import CapabilitiesGrid from '../components/CapabilitiesGrid'
import ServiceSection from '../components/ServiceSection'
import ProcessSteps from '../components/ProcessSteps'
import ValueProps from '../components/ValueProps'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import { SERVICES } from '../lib/services'

const ACCENTS = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted']

export default function Home() {
  return (
    <div className="min-h-screen bg-neo-cream">
      <HeroSection />
      <Marquee />

      <CapabilitiesGrid />

      {SERVICES.map((section, i) => (
        <ServiceSection
          key={section.id}
          id={section.id}
          badge={section.badge}
          title={section.title}
          subtitle={section.subtitle}
          items={section.items}
          accent={ACCENTS[i % ACCENTS.length]}
        />
      ))}

      <ProcessSteps />
      <ValueProps />
      <CTASection />
      <Footer />
    </div>
  )
}