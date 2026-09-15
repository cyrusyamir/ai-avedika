export interface Project {
  title: string
  summary: string
  details: string[]
  tags: string[]
}

export interface ProjectCategory {
  slug: string
  label: string
  intro: string
  projects: Project[]
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    slug: 'ai-data',
    label: 'AI Data Operations',
    intro: 'Annotation, evaluation and validation programs that feed cleaner training data into AI systems.',
    projects: [
      {
        title: 'Image Segmentation Dataset',
        summary:
          'Pixel-level segmentation for autonomous driving and computer-vision model training.',
        details: [
          'Semantic, instance and panoptic masks',
          'Multi-reviewer consensus annotation',
          'Custom label ontologies',
        ],
        tags: ['Computer vision', 'Pixel-level'],
      },
      {
        title: 'Conversation & Intent Annotation',
        summary:
          'Dialogue tagging for virtual assistants, search and support automation pipelines.',
        details: [
          'Intent, slot and sentiment labeling',
          'Consistency audits with active learning',
          'Style-guide-driven labeling',
        ],
        tags: ['NLP', 'Dialogue'],
      },
      {
        title: 'LLM Response Evaluation Program',
        summary:
          'Human evaluation of model outputs for accuracy, safety, helpfulness and alignment.',
        details: [
          'Rubric-based scoring across model families',
          'Adversarial prompt sampling',
          'Inter-annotator agreement tracking',
        ],
        tags: ['LLM', 'Hallucination QA'],
      },
      {
        title: 'Multimodal Dataset Validation',
        summary:
          'Automated and human-verified quality gates before datasets reach production pipelines.',
        details: [
          'Schema and ontology conformance checks',
          'Sampled human re-review',
          'Versioned delivery reports',
        ],
        tags: ['QA pipeline', 'Multimodal'],
      },
    ],
  },
  {
    slug: 'research',
    label: 'Research & Surveys',
    intro: 'Recruitment, fieldwork and survey operations that deliver reliable responses from real people.',
    projects: [
      {
        title: 'Nationwide Consumer Survey',
        summary:
          '10,000+ completed surveys across demographics with fraud screening and attention checks.',
        details: [
          'Panel and field recruitment sourcing',
          'Lightspeed and manual quality gates',
          'Weekly cohort reporting',
        ],
        tags: ['10k+ responses', 'Consumer'],
      },
      {
        title: 'B2B Market-Research Fieldwork',
        summary:
          'Qualitative and quantitative fieldwork for executive and industry decision-maker studies.',
        details: [
          'Role-specific respondent targeting',
          'Calendar-based interview coordination',
          'Verbatim capture and transcription',
        ],
        tags: ['B2B', 'Fieldwork'],
      },
      {
        title: 'Pharma Respondent Screening',
        summary:
          'Pre-qualified health-professional panels matched to strict screening criteria.',
        details: [
          'Verification-based pre-screening',
          'Inclusion/exclusion compliance',
          'Dedicated account management',
        ],
        tags: ['Healthcare', 'Screening'],
      },
      {
        title: 'High-Volume Survey QC',
        summary:
          'In-field monitoring, fraud detection and response validation for fast-turnaround studies.',
        details: [
          'Real-time completion monitoring',
          'Speed, straight-line and duplicate checks',
          'Post-collection deduplication',
        ],
        tags: ['QC', 'Fraud detection'],
      },
    ],
  },
  {
    slug: 'workforce',
    label: 'Remote Workforce',
    intro: 'Recruit, onboard, train and manage distributed teams without building the infrastructure.',
    projects: [
      {
        title: '200-Agent Labeling Team',
        summary:
          'A fully managed distributed labeling team stood up, trained and run end-to-end.',
        details: [
          'Recruitment and screening at volume',
          'Role-specific onboarding and training',
          'Daily QC and performance dashboards',
        ],
        tags: ['200 agents', 'Managed'],
      },
      {
        title: 'Distributed QC Program',
        summary:
          'Multi-tier review workflow for continuous quality assurance across outsourced work.',
        details: [
          'Two-pass review with consensus',
          'Error taxonomy and root-cause reporting',
          'Retraining loops for underperformers',
        ],
        tags: ['Multi-tier QC', 'Reporting'],
      },
      {
        title: 'Train-and-Scale Data Ops',
        summary:
          'Pilot-to-production scale-up of a data operations team for a growing workload.',
        details: [
          'Pilot cohort with shadowing',
          'Structured scale-up roadmap',
          'Capacity planning and forecasting',
        ],
        tags: ['Scale-up', 'Data ops'],
      },
      {
        title: 'SOP Onboarding for 500 Gig Workers',
        summary:
          'Standardized onboarding and training system for a high-volume gig workforce.',
        details: [
          'Video, quiz and assessment modules',
          'Verification and documentation flow',
          'Certification before first assignment',
        ],
        tags: ['Onboarding', '500 workers'],
      },
    ],
  },
  {
    slug: 'transcription',
    label: 'Transcription & Speech',
    intro: 'Accurate human transcription, correction and speech-data preparation in multiple languages.',
    projects: [
      {
        title: 'Medical Transcription Pipeline',
        summary:
          'Secure, HIPAA-aligned transcription for clinical notes and telehealth calls with specialist QA.',
        details: [
          'Specialist medical transcriptionists',
          'Two-pass QA with terminology checks',
          'PHI-compliant handling',
        ],
        tags: ['HIPAA', 'Medical'],
      },
      {
        title: 'Conversational QA Dataset',
        summary:
          'High-accuracy transcription of noisy, multi-speaker conversations ready for ASR retraining.',
        details: [
          'Speaker diarization support',
          'Noise-robust training sets',
          'Per-turn quality scoring',
        ],
        tags: ['Multi-speaker', 'ASR ready'],
      },
      {
        title: 'Hindi & English ASR Correction',
        summary:
          'Human correction of machine-generated transcripts in Hindi, English and code-switched audio.',
        details: [
          'Native-fluency transcriptionists',
          'Code-switch handling guidelines',
          'Word-error-rate reporting',
        ],
        tags: ['Hindi', 'English'],
      },
      {
        title: 'Speaker-Labeled Call-Center Audio',
        summary:
          'Word-level timestamped transcripts with speaker labels for support-call analytics.',
        details: [
          'Word and segment timestamps',
          'Agent-vs-customer channel labeling',
          'Consistent formatting for analytics',
        ],
        tags: ['Call center', 'Timestamped'],
      },
    ],
  },
  {
    slug: 'technology',
    label: 'Technology & Automation',
    intro: 'Websites, internal tools and automation that remove repetitive work and streamline operations.',
    projects: [
      {
        title: 'WordPress / WooCommerce Store Build',
        summary:
          'Custom theme and WooCommerce storefront with product, order and payment flows.',
        details: [
          'Custom WordPress theme',
          'WooCommerce product and cart flows',
          'Performance and mobile optimization',
        ],
        tags: ['WordPress', 'WooCommerce'],
      },
      {
        title: 'Playwright Lead-Capture Automation',
        summary:
          'Browser automation that periodically collects structured leads from web directories.',
        details: [
          'Headless browser runs on schedule',
          'Dedupe and enrichment pipeline',
          'Dashboard with exportable CSVs',
        ],
        tags: ['Playwright', 'Automation'],
      },
      {
        title: 'Python Survey-Cleaning Pipeline',
        summary:
          'Automated cleaning, deduplication and consistency checks for survey response data.',
        details: [
          'Automated validation rules',
          'Duplicate and outlier detection',
          'Clean dataset exports',
        ],
        tags: ['Python', 'Data pipeline'],
      },
      {
        title: 'Headless CMS + Dashboard',
        summary:
          'Content architecture and a live dashboard for a headless content platform.',
        details: [
          'Strapi-style headless backend',
          'Custom admin and analytics views',
          'API-first content delivery',
        ],
        tags: ['Headless CMS', 'Dashboard'],
      },
    ],
  },
]

export function categoryFromSlug(slug?: string): ProjectCategory | undefined {
  return PROJECT_CATEGORIES.find((c) => c.slug === slug)
}