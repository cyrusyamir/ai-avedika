export default function Logo() {
  return (
    <span className="inline-flex items-center justify-center border-4 border-black bg-neo-secondary p-1">
      <svg width="28" height="28" viewBox="0 0 256 256" aria-label="Avedika logo" className="block">
        <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="black" />
        <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
      </svg>
    </span>
  )
}
