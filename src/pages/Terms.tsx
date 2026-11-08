import LegalCard, { LegalBlock } from '../components/LegalCard'
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from '../lib/site'

export default function Terms() {
  return (
    <LegalCard
      title="Terms & Conditions"
      badge="Legal"
      badgeClass="bg-neo-secondary"
      bandClass="bg-neo-muted"
    >
      <LegalBlock title="Introduction">
        <p>
          Welcome to {SITE_LEGAL_NAME}, trading as {SITE_NAME}. These Terms &amp; Conditions govern
          your use of our website and services, including data collection, transcription,
          annotation and validation work. By accessing the site or engaging our services, you agree
          to these terms.
        </p>
      </LegalBlock>
      <LegalBlock title="Services">
        <p>
          {SITE_NAME} provides end-to-end data services: linguistic data collection, transcription,
          annotation, audio and video recording, and validation. Specific scope, deliverables and
          timelines are agreed per project in a written statement of work.
        </p>
      </LegalBlock>
      <LegalBlock title="Client responsibilities">
        <p>
          You agree to provide accurate project requirements and to hold the necessary rights for
          any materials you submit. You are responsible for obtaining consent from end users where
          required by applicable law.
        </p>
      </LegalBlock>
      <LegalBlock title="Intellectual property">
        <p>
          Deliverables created for you under a project are yours once payment is complete, unless
          otherwise agreed in writing. {SITE_NAME} retains ownership of its internal tools, processes
          and methodologies.
        </p>
      </LegalBlock>
      <LegalBlock title="Privacy">
        <p>
          Our handling of personal data is described in the Privacy Policy. By using the site, you
          acknowledge and agree to that policy.
        </p>
      </LegalBlock>
      <LegalBlock title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, {SITE_NAME} is not liable for indirect, incidental or
          consequential damages arising from use of the site or services. Our total liability is
          limited to the amounts paid for the services in question.
        </p>
      </LegalBlock>
      <LegalBlock title="Changes to these terms">
        <p>
          We may update these terms from time to time. The latest version will always be published
          on this page, with the date of the last update shown above.
        </p>
      </LegalBlock>
      <LegalBlock title="Contact">
        <p>
          Questions about these terms can be sent to{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-neo-accent text-black font-black uppercase text-xs tracking-wide px-3 py-1 border-4 border-black italic hover:bg-[#ff5252] transition-colors duration-100"
          >
            {CONTACT_EMAIL}
          </a>
          , or visit us at{' '}
          <a
            href={SITE_URL}
            className="bg-neo-accent text-black font-black uppercase text-xs tracking-wide px-3 py-1 border-4 border-black italic hover:bg-[#ff5252] transition-colors duration-100"
          >
            {SITE_DOMAIN}
          </a>
          .
        </p>
      </LegalBlock>
    </LegalCard>
  )
}