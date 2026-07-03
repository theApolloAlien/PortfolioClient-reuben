import { useEffect, useRef } from 'react'

/*
 * Pixel robot family. One 14x16 logical-pixel body shared by all variants;
 * each variant adds an outfit overlay, an animated arm, and a prop group.
 * Rendered as SVG <rect>s with crispEdges; idle loops and one-shot
 * signature actions are driven purely by CSS classes (see index.css).
 *
 * Map legend: . transparent · C cream · S shadow · A accent · D dark
 */

const COLORS = {
  C: 'var(--cream)',
  S: 'var(--muted)',
  A: 'var(--amber)',
  D: '#15171c',
}

// Shared body, drawn without the right arm (each variant owns its arm).
const BODY = [
  '..............',
  '...DDDDDDDD...',
  '..DCCCCCCCCD..',
  '..DCCCCCCCCD..',
  '..DCCCCCCCCD..',
  '...DDDDDDDD...',
  '.....DCCD.....',
  '....DDDDDD....',
  '....DCAACD....',
  '....DCCCCD....',
  '....DCCCCD....',
  '....DDDDDD....',
  '..............',
  '..............',
  '..............',
  '..............',
]

// Legs live outside the body map so walk cycles can step them independently.
const LEG_L = [
  { x: 4, y: 12, c: 'D' },
  { x: 5, y: 12, c: 'C' },
  { x: 4, y: 13, c: 'D' },
  { x: 5, y: 13, c: 'C' },
  { x: 3, y: 14, c: 'D' },
  { x: 4, y: 14, c: 'D' },
  { x: 5, y: 14, c: 'D' },
]
const LEG_R = [
  { x: 8, y: 12, c: 'C' },
  { x: 9, y: 12, c: 'D' },
  { x: 8, y: 13, c: 'C' },
  { x: 9, y: 13, c: 'D' },
  { x: 8, y: 14, c: 'D' },
  { x: 9, y: 14, c: 'D' },
  { x: 10, y: 14, c: 'D' },
]

// Pixel coords {x, y} + colour key, layered over/under the body.
const EYES = [
  { x: 4, y: 3, c: 'D' },
  { x: 9, y: 3, c: 'D' },
]
const MOUTH = [
  { x: 6, y: 4, c: 'S' },
  { x: 7, y: 4, c: 'S' },
]
const ANTENNA = [
  { x: 6, y: 0, c: 'A', light: true },
  { x: 7, y: 0, c: 'A', light: true },
]
const LEFT_ARM = [
  { x: 3, y: 8, c: 'C' },
  { x: 3, y: 9, c: 'C' },
  { x: 3, y: 10, c: 'S' },
]
// Right arm hanging (default) and raised (greeter/mailer/medalist start pose)
const ARM_DOWN = [
  { x: 10, y: 8, c: 'C' },
  { x: 10, y: 9, c: 'C' },
  { x: 10, y: 10, c: 'S' },
]
const ARM_UP = [
  { x: 10, y: 8, c: 'C' },
  { x: 11, y: 7, c: 'C' },
  { x: 11, y: 6, c: 'C' },
  { x: 11, y: 5, c: 'A' },
]
const ARM_SALUTE = [
  { x: 10, y: 8, c: 'C' },
  { x: 11, y: 7, c: 'C' },
  { x: 10, y: 6, c: 'C' },
  { x: 9, y: 5, c: 'S' },
]

const VARIANTS = {
  greeter: {
    arm: ARM_UP,
    armOrigin: [10.5, 8.5],
    action: 'wave',
    motion: 'hop',
  },
  reader: {
    arm: ARM_DOWN,
    armOrigin: [10.5, 8.5],
    action: 'none',
    motion: 'pace',
    outfit: [
      // tablet held in front
      { x: 5, y: 10, c: 'D' },
      { x: 6, y: 10, c: 'A' },
      { x: 7, y: 10, c: 'A' },
      { x: 8, y: 10, c: 'D' },
    ],
    prop: [
      // "HI" speech bubble, tips in on action
      { x: 10, y: 0, c: 'C' },
      { x: 11, y: 0, c: 'C' },
      { x: 12, y: 0, c: 'C' },
      { x: 13, y: 0, c: 'C' },
      { x: 10, y: 1, c: 'C' },
      { x: 11, y: 1, c: 'D' },
      { x: 12, y: 1, c: 'D' },
      { x: 13, y: 1, c: 'C' },
      { x: 11, y: 2, c: 'C' },
    ],
    propAction: 'bubble',
  },
  officer: {
    arm: ARM_SALUTE,
    armOrigin: [10.5, 8.5],
    action: 'salute',
    motion: 'march',
    outfit: [
      // service cap
      { x: 3, y: 1, c: 'A' },
      { x: 4, y: 1, c: 'A' },
      { x: 5, y: 1, c: 'A' },
      { x: 6, y: 1, c: 'A' },
      { x: 7, y: 1, c: 'A' },
      { x: 8, y: 1, c: 'A' },
      { x: 9, y: 1, c: 'A' },
      { x: 10, y: 1, c: 'A' },
      { x: 2, y: 2, c: 'S' },
      { x: 3, y: 2, c: 'S' },
    ],
  },
  builder: {
    arm: ARM_DOWN,
    armOrigin: [10.5, 8.5],
    action: 'none',
    prop: [
      // wrench, tightens on action
      { x: 11, y: 8, c: 'S' },
      { x: 12, y: 7, c: 'S' },
      { x: 12, y: 9, c: 'S' },
      { x: 12, y: 8, c: 'A' },
    ],
    propOrigin: [12, 8.5],
    propAction: 'tighten',
  },
  tinkerer: {
    arm: ARM_DOWN,
    armOrigin: [10.5, 8.5],
    action: 'none',
    outfit: [
      // goggles band
      { x: 3, y: 2, c: 'A' },
      { x: 4, y: 2, c: 'A' },
      { x: 5, y: 2, c: 'A' },
      { x: 6, y: 2, c: 'A' },
      { x: 7, y: 2, c: 'A' },
      { x: 8, y: 2, c: 'A' },
      { x: 9, y: 2, c: 'A' },
      { x: 10, y: 2, c: 'A' },
    ],
    prop: [
      // gear, spins on action
      { x: 12, y: 6, c: 'S' },
      { x: 12, y: 8, c: 'S' },
      { x: 11, y: 7, c: 'S' },
      { x: 13, y: 7, c: 'S' },
      { x: 12, y: 7, c: 'A' },
    ],
    propOrigin: [12.5, 7.5],
    propAction: 'spin',
  },
  medalist: {
    arm: ARM_UP,
    armOrigin: [10.5, 8.5],
    action: 'raise',
    motion: 'jump',
    outfit: [
      // ribbon + chest medal
      { x: 6, y: 9, c: 'A' },
      { x: 7, y: 9, c: 'A' },
    ],
    prop: [
      // medal disc held aloft (rides the raised arm)
      { x: 11, y: 3, c: 'A' },
      { x: 12, y: 3, c: 'A' },
      { x: 11, y: 4, c: 'A' },
      { x: 12, y: 4, c: 'A' },
    ],
    propAction: 'raise',
  },
  mailer: {
    arm: ARM_UP,
    armOrigin: [10.5, 8.5],
    action: 'wave',
    motion: 'run',
    outfit: [
      // hoodie rim
      { x: 2, y: 1, c: 'S' },
      { x: 3, y: 0, c: 'S' },
      { x: 4, y: 0, c: 'S' },
      { x: 5, y: 0, c: 'S' },
      { x: 8, y: 0, c: 'S' },
      { x: 9, y: 0, c: 'S' },
      { x: 10, y: 0, c: 'S' },
      { x: 11, y: 1, c: 'S' },
    ],
    prop: [
      // envelope, blips in on action
      { x: 0, y: 6, c: 'C' },
      { x: 1, y: 6, c: 'C' },
      { x: 2, y: 6, c: 'C' },
      { x: 0, y: 7, c: 'C' },
      { x: 1, y: 7, c: 'A' },
      { x: 2, y: 7, c: 'C' },
    ],
    propAction: 'blip',
  },
}

function rects(pixels, keyPrefix) {
  return pixels.map((p, i) => (
    <rect key={`${keyPrefix}${i}`} x={p.x} y={p.y} width="1" height="1" fill={COLORS[p.c]} />
  ))
}

function mapRects(map) {
  const out = []
  map.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const c = row[x]
      if (c !== '.') out.push({ x, y, c })
    }
  })
  return out
}

const BODY_PIXELS = mapRects(BODY)

export default function PixelBot({ variant = 'greeter', size = 56, className = '' }) {
  const ref = useRef(null)
  const v = VARIANTS[variant] || VARIANTS.greeter

  // Signature action fires once on scroll-into-view; loops pause offscreen.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let acted = false
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          el.classList.toggle('bot-running', e.isIntersecting)
          if (e.isIntersecting && !acted) {
            acted = true
            el.classList.add('bot-act')
            setTimeout(() => el.classList.remove('bot-act'), 2600)
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const antennaHidden = variant === 'mailer' // hood covers the antenna row

  return (
    <span ref={ref} className={`bot bot-${variant} bot-m-${v.motion || 'idle'} ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size * (16 / 14)}
        viewBox="0 0 14 16"
        shapeRendering="crispEdges"
        focusable="false"
      >
        <g className="bot-body">
          {rects(BODY_PIXELS, 'b')}
          {!antennaHidden && (
            <>
              <rect x="6.5" y="0.6" width="1" height="0.8" fill={COLORS.D} />
              <g className="bot-light">{rects(ANTENNA, 'a')}</g>
            </>
          )}
          <g className="bot-light">
            <rect x="6" y="8" width="2" height="1" fill={COLORS.A} />
          </g>
          {rects(MOUTH, 'm')}
          <g className="bot-eyes">{rects(EYES, 'e')}</g>
          {v.outfit && rects(v.outfit, 'o')}
          <g className="bot-leg bot-leg-l">{rects(LEG_L, 'gl')}</g>
          <g className="bot-leg bot-leg-r">{rects(LEG_R, 'gr')}</g>
          {rects(LEFT_ARM, 'l')}
          <g
            className={`bot-arm bot-arm-${v.action}`}
            style={{ transformOrigin: `${v.armOrigin[0]}px ${v.armOrigin[1]}px` }}
          >
            {rects(v.arm, 'r')}
          </g>
          {v.prop && (
            <g
              className={`bot-prop bot-prop-${v.propAction}`}
              style={v.propOrigin ? { transformOrigin: `${v.propOrigin[0]}px ${v.propOrigin[1]}px` } : undefined}
            >
              {rects(v.prop, 'p')}
            </g>
          )}
        </g>
      </svg>
    </span>
  )
}
