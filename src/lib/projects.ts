export const DOMAINS = ['Linguistic', 'Transcription', 'Annotation', 'Audio & Video recording'] as const

export type Domain = (typeof DOMAINS)[number]

export const DOMAIN_SLUGS: Record<Domain, string> = {
  Linguistic: 'linguistic',
  Transcription: 'transcription',
  Annotation: 'annotation',
  'Audio & Video recording': 'audio-video-recording',
}

export function domainFromSlug(slug?: string): Domain {
  const match = DOMAINS.find((d) => DOMAIN_SLUGS[d] === slug)
  return match ?? 'Linguistic'
}

export interface Project {
  title: string
  summary: string
  details: string[]
  tags: string[]
}

export const PROJECTS: Record<Domain, Project[]> = {
  Linguistic: [
    {
      title: 'Multilingual Speech Corpus',
      summary:
        'Recorded and curated 10,000+ hours of speech across 40+ languages and dialects for ASR and TTS training.',
      details: [
        'Speaker recruitment and screening',
        'Native-speaker validation at every stage',
        'Balanced demographics per target language',
      ],
      tags: ['40+ languages', '10k+ hours', 'Validated'],
    },
    {
      title: 'Low-Resource Language Collection',
      summary:
        'Field collection for under-represented languages in remote regions, with full data rights.',
      details: [
        'On-ground recording teams',
        'Documented consent and data rights',
        'Linguistic QA by native speakers',
      ],
      tags: ['Field collection', 'Low-resource'],
    },
  ],
  Transcription: [
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
  ],
  Annotation: [
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
  ],
  'Audio & Video recording': [
    {
      title: 'Studio Audio Capture',
      summary:
        'High-quality studio voice and acoustic captures for speech systems and media production.',
      details: [
        'Pro-grade mic setups and scripts',
        'Controlled room acoustics',
        'Pronunciation-matched talent',
      ],
      tags: ['Studio', 'Voice'],
    },
    {
      title: 'Field Video Corpus',
      summary:
        'Real-world video capture across use cases, environments and lighting conditions.',
      details: [
        'Multi-camera field teams',
        'Scene and object variability',
        'Sync and metadata pipeline',
      ],
      tags: ['Field', 'Video'],
    },
  ],
}
