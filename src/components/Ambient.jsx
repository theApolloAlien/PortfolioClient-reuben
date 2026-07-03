// Decorative background layers: slow-panning grid + faint scanlines.
export default function Ambient() {
  return (
    <>
      <div className="grid-layer" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
    </>
  )
}
