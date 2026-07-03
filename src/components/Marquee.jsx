const items = [
  'CLOUD ARCHITECTURE',
  'CYBERSECURITY',
  'OBSERVABILITY',
  'CTF · 1ST PLACE',
  'AWS CERTIFIED',
  'AI PRODUCTS',
  'NETWORKING',
]

export default function Marquee() {
  const row = items.map((t, i) => (
    <span key={i} className="marquee-item mono">
      {t} <span className="marquee-star">✦</span>
    </span>
  ))
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}
