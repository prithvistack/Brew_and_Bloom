import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PETAL_TYPES = [
  { fill: '#F9C4D2', stroke: '#E8A0B0' }, // blush
  { fill: '#FFD6E4', stroke: '#F4B8C8' }, // light blush
  { fill: '#F4B8C8', stroke: '#E090A5' }, // rose
  { fill: '#FBE3C0', stroke: '#E8C97A' }, // warm cream
]

function rand(min, max) {
  return Math.random() * (max - min) + min
}

function Petal({ fill, stroke }) {
  return (
    <svg viewBox="0 0 20 28" width="100%" height="100%" aria-hidden="true">
      <path
        d="M10 0 C 2 8 0 18 10 28 C 20 18 18 8 10 0 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.6"
        strokeOpacity="0.5"
      />
      <path d="M10 4 C 9 12 9 20 10 26" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
    </svg>
  )
}

function GoldSparkle() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" aria-hidden="true">
      <path d="M8 0 L9.4 6.6 L16 8 L9.4 9.4 L8 16 L6.6 9.4 L0 8 L6.6 6.6 Z" fill="#E8C97A" opacity="0.85" />
    </svg>
  )
}

export default function PetalField({ count = 22, fixed = false }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const isSparkle = Math.random() < 0.22
        const type = PETAL_TYPES[Math.floor(Math.random() * PETAL_TYPES.length)]
        const size = isSparkle ? rand(8, 14) : rand(12, 24)
        const startX = rand(0, 100)
        const drift = rand(20, 70) * (Math.random() < 0.5 ? -1 : 1)
        return {
          id: i,
          isSparkle,
          type,
          size,
          startX,
          drift,
          duration: rand(9, 18),
          delay: rand(0, 12),
          rotateEnd: rand(180, 520) * (Math.random() < 0.5 ? -1 : 1),
          startRotate: rand(0, 360),
          maxOpacity: isSparkle ? rand(0.4, 0.7) : rand(0.5, 0.85),
        }
      }),
    [count]
  )

  return (
    <div
      className={`${fixed ? 'fixed z-20' : 'absolute'} inset-0 overflow-hidden pointer-events-none`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0"
          style={{ left: `${p.startX}%`, width: p.size, height: p.size }}
          initial={{ y: '-12vh', x: 0, rotate: p.startRotate, opacity: 0 }}
          animate={{
            y: ['-12vh', '112vh'],
            x: [0, p.drift * 0.6, -p.drift * 0.4, p.drift, 0],
            rotate: [p.startRotate, p.startRotate + p.rotateEnd],
            opacity: [0, p.maxOpacity, p.maxOpacity, p.maxOpacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.12, 0.5, 0.88, 1],
          }}
        >
          {p.isSparkle ? <GoldSparkle /> : <Petal {...p.type} />}
        </motion.div>
      ))}
    </div>
  )
}
