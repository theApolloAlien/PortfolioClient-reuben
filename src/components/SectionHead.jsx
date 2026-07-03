import PixelBot from './PixelBot.jsx'
import ScrambleText from './ScrambleText.jsx'

export default function SectionHead({ index, title, note, bot }) {
  return (
    <div className="section-head reveal">
      <span className="section-index mono">{index}</span>
      <h2 className="section-title display">
        <ScrambleText text={title} />
      </h2>
      <PixelBot variant={bot} size={52} className="section-bot" />
      {note && <span className="section-note mono">{note}</span>}
    </div>
  )
}
