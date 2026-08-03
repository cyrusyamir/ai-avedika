import LegalCard, { LegalBlock } from '../components/LegalCard'

export default function Privacy() {
  return (
    <LegalCard title="Privacy Policy">
      <LegalBlock title="1. Data we collect">
        <p>
          We collect information you provide directly, such as your name, email address and the
          details of your project when you contact us. We also collect basic analytics data, such
          as pages visited, to improve the site.
        </p>
      </LegalBlock>
      <LegalBlock title="2. How we use your data">
        <p>
          We use your information to respond to enquiries, manage projects, deliver services and
          improve our offerings. We do not sell your personal data.
        </p>
      </LegalBlock>
      <LegalBlock title="3. Sharing & disclosure">
        <p>
          We share data only with service providers who help us operate (such as hosting and
          analytics), and where required by law. Sub-processors are bound by confidentiality and
          data protection obligations.
        </p>
      </LegalBlock>
      <LegalBlock title="4. Security">
        <p>
          We use appropriate technical and organizational measures to protect your data, including
          encryption in transit and restricted access controls.
        </p>
      </LegalBlock>
      <LegalBlock title="5. Cookies">
        <p>
          The site may use cookies and similar technologies to support functionality and analytics.
          You can control cookies through your browser settings.
        </p>
      </LegalBlock>
      <LegalBlock title="6. Data retention">
        <p>
          We keep personal data only as long as needed for the purposes described above or as
          required by law, after which it is deleted or anonymized.
        </p>
      </LegalBlock>
      <LegalBlock title="7. Your rights">
        <p>
          Depending on your location, you may have rights to access, correct, delete or restrict
          the use of your personal data. To exercise them, contact us using the details below.
        </p>
      </LegalBlock>
      <LegalBlock title="8. Contact">
        <p>
          For privacy enquiries, email{' '}
          <a
            href="mailto:contact.ai@avedika.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            contact.ai@avedika.com
          </a>
          .
        </p>
      </LegalBlock>
    </LegalCard>
  )
}
