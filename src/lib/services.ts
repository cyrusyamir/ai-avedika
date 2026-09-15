export interface ServiceItem {
  title: string
  description: string
}

export interface ServiceSection {
  id: string
  badge: string
  title: string
  subtitle: string
  items: ServiceItem[]
  ctaLabel?: string
  ctaLink?: string
}

export const SERVICES: ServiceSection[] = [
  {
    id: 'service-ai-data',
    badge: 'AI Data Operations',
    title: 'Human Expertise for Better AI',
    subtitle:
      'AI systems are only as good as the data behind them. We provide human-powered data services that help organizations build, evaluate, and improve AI systems.',
    items: [
      { title: 'Data Annotation & Labeling', description: 'Structured annotation across text, image, and multimodal datasets with custom ontologies.' },
      { title: 'Text & NLP Annotation', description: 'Token classification, sentiment labeling, entity recognition, and document-level tagging.' },
      { title: 'LLM Response Evaluation', description: 'Human evaluation of model outputs for accuracy, safety, helpfulness, and alignment.' },
      { title: 'Prompt & Response Assessment', description: 'Structured review of prompt quality and model response correctness at scale.' },
      { title: 'Intent Classification', description: 'Labeled intent and utterance data for conversational AI and support automation.' },
      { title: 'Linguistic QA', description: 'Linguist-driven quality checks across all language data deliverables.' },
      { title: 'AI Response Quality Review', description: 'Multi-reviewer consensus scoring for model-generated text and code outputs.' },
      { title: 'Dataset Validation', description: 'Automated and human-verified quality gates before data reaches production pipelines.' },
      { title: 'Human Feedback', description: 'RLHF and preference data collection for model fine-tuning workflows.' },
      { title: 'Multilingual Data Operations', description: '40+ language coverage with native-speaker annotators and linguistic leads.' },
    ],
    ctaLabel: 'Talk to Us About Your AI Data Project',
    ctaLink: '/contact',
  },
  {
    id: 'service-research',
    badge: 'Research & Surveys',
    title: 'Reliable Data From Real People',
    subtitle:
      'We support market research and consumer research projects with structured recruitment and survey operations.',
    items: [
      { title: 'Consumer Survey Recruitment', description: 'Targeted respondent sourcing across demographics and regions.' },
      { title: 'Online Survey Completion', description: 'Managed survey fieldwork with attention checks and quality gates.' },
      { title: 'Market Research Fieldwork', description: 'End-to-end field coordination for qualitative and quantitative studies.' },
      { title: 'Regional Data Collection', description: 'Geo-specific data gathering with local language support.' },
      { title: 'Respondent Screening', description: 'Pre-qualification and filtering to match your exact sample criteria.' },
      { title: 'Survey Quality Control', description: 'In-field monitoring, fraud detection, and response validation.' },
      { title: 'Data Validation', description: 'Post-collection cleaning, deduplication, and consistency checks.' },
      { title: 'High-Volume Survey Operations', description: 'Scalable survey programs with consistent turnaround and reporting.' },
    ],
    ctaLabel: 'Discuss Your Research Project',
    ctaLink: '/contact',
  },
  {
    id: 'service-workforce',
    badge: 'Remote Workforce',
    title: 'Build a Workforce Without Building the Infrastructure',
    subtitle:
      'We handle the operational layer — from finding suitable workers to onboarding, training, communication, quality control, and project coordination.',
    items: [
      { title: 'Recruitment', description: 'Find and screen project-specific workers matched to your requirements.' },
      { title: 'Onboarding', description: 'Structured forms, verification, training, and documentation for every new hire.' },
      { title: 'Workforce Management', description: 'Coordinate distributed teams, daily operations, and project timelines.' },
      { title: 'Quality Control', description: 'Track performance metrics and maintain project standards across the team.' },
      { title: 'Process Management', description: 'Create SOPs and repeatable workflows for large-scale, ongoing projects.' },
    ],
  },
  {
    id: 'service-transcription',
    badge: 'Transcription & Speech',
    title: 'Turn Audio Into Usable Data',
    subtitle:
      'We support speech and language-data projects requiring accurate human transcription and review.',
    items: [
      { title: 'Audio Transcription', description: 'Verbatim and clean-read transcription for any audio format.' },
      { title: 'Hindi & English Transcription', description: 'Native-fluency transcription in Hindi, English, and code-switched audio.' },
      { title: 'Bilingual Transcription', description: 'Multi-language audio handling with consistent formatting.' },
      { title: 'ASR Transcript Correction', description: 'Human correction of machine-generated transcripts for ASR retraining.' },
      { title: 'Speaker Labeling', description: 'Accurate speaker diarization and identity tagging across multi-speaker audio.' },
      { title: 'Timestamping', description: 'Word-level and segment-level timestamps for alignment and search.' },
      { title: 'Audio Quality Review', description: 'Noise, clipping, and artifact review before processing or delivery.' },
      { title: 'Speech Dataset Preparation', description: 'Clean, formatted, metadata-tagged datasets ready for model training.' },
      { title: 'Linguistic QA', description: 'Final-pass quality assurance by trained linguists.' },
    ],
    ctaLabel: 'Start a Transcription Project',
    ctaLink: '/contact',
  },
  {
    id: 'service-tech',
    badge: 'Technology & Automation',
    title: 'Technology That Makes Operations Easier',
    subtitle:
      'We build websites, internal tools, integrations, and automation that reduce repetitive work and improve operational efficiency.',
    items: [
      { title: 'WordPress & WooCommerce', description: 'Custom themes, plugins, and full-stack WordPress and WooCommerce builds.' },
      { title: 'JavaScript & Next.js', description: 'Modern frontend development with React, Next.js, and TypeScript.' },
      { title: 'REST APIs', description: 'Backend API design and integration for data pipelines and web services.' },
      { title: 'Headless CMS', description: 'Content architecture with Strapi, Sanity, or custom headless backends.' },
      { title: 'Custom Web Applications', description: 'Full-stack apps built for specific business workflows and operations.' },
      { title: 'Python Automation', description: 'Scripts, crawlers, and data processing pipelines in Python.' },
      { title: 'Browser Automation', description: 'Selenium, Playwright, and Puppeteer-based web automation workflows.' },
      { title: 'Workflow Automation', description: 'End-to-end business process automation connecting tools and data sources.' },
    ],
    ctaLabel: 'Build Something With Us',
    ctaLink: '/contact',
  },
]

export const CAPABILITIES = [
  {
    title: 'AI Data Operations',
    description: 'Data annotation, labeling, LLM evaluation, linguistic QA, and dataset validation.',
    badge: 'AI Data',
  },
  {
    title: 'Research & Surveys',
    description: 'Consumer surveys, market research fieldwork, respondent recruitment, and survey operations.',
    badge: 'Research',
  },
  {
    title: 'Transcription & Speech',
    description: 'Audio transcription, ASR correction, speaker labeling, timestamping, and speech-data preparation.',
    badge: 'Transcription',
  },
  {
    title: 'Remote Workforce',
    description: 'Recruitment, screening, onboarding, training, quality control, and distributed workforce management.',
    badge: 'Workforce',
  },
  {
    title: 'Software Development',
    description: 'Websites, WordPress, WooCommerce, web applications, APIs, and custom digital solutions.',
    badge: 'Development',
  },
  {
    title: 'Automation & Data Processing',
    description: 'Python, Selenium, browser automation, data processing, and business workflow automation.',
    badge: 'Automation',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Understand',
    description: 'We understand your requirements, data, volume, timeline, and quality expectations.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We design the appropriate workforce, workflow, tools, and quality-control process.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Our team performs the work using documented processes and project-specific guidelines.',
  },
  {
    number: '04',
    title: 'Review',
    description: 'Data and outputs go through quality checks before delivery.',
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Once the process works, we scale the workforce and infrastructure according to your requirements.',
  },
]

export const VALUE_PROPS = [
  {
    title: 'Human + Technology',
    description: 'We combine skilled human workers with software and automation.',
  },
  {
    title: 'Scalable Workforce',
    description: 'Build project-specific teams without maintaining a permanent workforce.',
  },
  {
    title: 'Quality Focused',
    description: 'Structured guidelines, training, review, and quality-control processes.',
  },
  {
    title: 'Multiple Capabilities',
    description: 'From data collection and annotation to software and automation.',
  },
  {
    title: 'Flexible Engagement',
    description: 'Work with us on a project, ongoing contract, or scalable operational requirement.',
  },
]
