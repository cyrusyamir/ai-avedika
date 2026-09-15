const ITEMS = [
  'AI DATA',
  'RESEARCH',
  'REMOTE WORKFORCE',
  'TRANSCRIPTION',
  'SOFTWARE',
  'AUTOMATION',
  'ANNOTATION',
  'DATA COLLECTION',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y-4 border-black bg-neo-accent py-3">
      <div className="flex animate-marquee whitespace-nowrap font-black uppercase text-sm sm:text-base tracking-widest text-black">
        {/* duplicate set for seamless loop */}
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            {item}
            <span className="text-xl leading-none">*</span>
          </span>
        ))}
      </div>
    </div>
  )
}