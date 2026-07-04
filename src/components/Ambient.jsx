// Decorative background layers: slow-panning grid, a faint twinkling
// starfield, occasional shooting stars, and subtle scanlines.
export default function Ambient() {
  return (
    <>
      <div className="grid-layer" aria-hidden="true" />
      <div className="starfield" aria-hidden="true" />
      <div className="shooting-stars" aria-hidden="true">
        <span className="shooting-star" />
        <span className="shooting-star" />
        <span className="shooting-star" />
      </div>
      <div className="scanlines" aria-hidden="true" />
    </>
  )
}
