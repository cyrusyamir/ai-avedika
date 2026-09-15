import LegalCard, { LegalBlock } from '../components/LegalCard'

export default function Terms() {
  return (
    <LegalCard title="Terms & Conditions">
      <LegalBlock title="1. Introduction">
        <p>
          Welcome to Avedika. These Terms & Conditions govern your use of our website and services,
          including data collection, transcription, annotation and validation work. By accessing
          the site or engaging our services, you agree to these terms.
        </p>
      </LegalBlock>
      <LegalBlock title="2. Services">
        <p>
          Avedika provides end-to-end data services: linguistic data collection, transcription,
          annotation, audio and video recording, and validation. Specific scope, deliverables and
          timelines are agreed per project in a written statement of work.
        </p>
      </LegalBlock>
      <LegalBlock title="3. Client responsibilities">
        <p>
          You agree to provide accurate project requirements and to hold the necessary rights for
          any materials you submit. You are responsible for obtaining consent from end users where
          required by applicable law.
        </p>
      </LegalBlock>
      <LegalBlock title="4. Intellectual property">
        <p>
          Deliverables created for you under a project are yours once payment is complete, unless
          otherwise agreed in writing. Avedika retains ownership of its internal tools, processes and
          methodologies.
        </p>
      </LegalBlock>
      <LegalBlock title="5. Privacy">
        <p>
          Our handling of personal data is described in the Privacy Policy. By using the site, you
          acknowledge and agree to that policy.
        </p>
      </LegalBlock>
      <LegalBlock title="6. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Avedika is not liable for indirect, incidental or
          consequential damages arising from use of the site or services. Our total liability is
          limited to the amounts paid for the services in question.
        </p>
      </LegalBlock>
      <LegalBlock title="7. Changes to these terms">
        <p>
          We may update these terms from time to time. The latest version will always be published
          on this page, with the date of the last update shown above.
        </p>
      </LegalBlock>
      <LegalBlock title="8. Contact">
        <p>
          Questions about these terms can be sent to{' '}
          <a
            href="mailto:info@avedika.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            info@avedika.com
          </a>
          .
        </p>
      </LegalBlock>
    </LegalCard>
  )
}
