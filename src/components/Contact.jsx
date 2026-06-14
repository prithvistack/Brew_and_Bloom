import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// Deep blue-violet lavender — for LIGHT mode (dark hue contrasts against cream)
const wreathLight = {
  stem: '#3E6448', leaf1: '#4A7852', leaf2: '#3E6848',
  f1: '#7B6BC0', f2: '#6555AC', f3: '#524096', f4: '#443286', f5: '#352770',
}
// Soft pink lavender — for DARK mode (bright hue glows against plum)
const wreathDark = {
  stem: '#6FA277', leaf1: '#84B88C', leaf2: '#74A87E',
  f1: '#F4BEDE', f2: '#EAA4D0', f3: '#DE8AC2', f4: '#D274B6', f5: '#C460A8',
}

// Lavender heart wreath — sprigs placed along the parametric heart curve
function HeartWreath({ c, idp }) {
  const N = 46
  const cx = 50, cy = 44, scale = 1.65

  const sprigs = Array.from({ length: N }, (_, i) => {
    const t = (i / N) * 2 * Math.PI
    const s = Math.sin(t)
    const x = cx + scale * 16 * s * s * s
    const y = cy - scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
    // Angle pointing outward from heart visual centre
    const angle = Math.atan2(y - (cy + 4), x - cx) * (180 / Math.PI) - 90
    // Subtle size variation for a natural, hand-placed look
    const sz = 0.82 + 0.36 * ((i * 13) % 17) / 17
    return { x, y, angle, sz, flip: i % 2 === 0 }
  })

  return (
    <svg width="118" height="118" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        {/* Whisper-soft blur to round every edge */}
        <filter id={`${idp}-soft`} x="-8%" y="-8%" width="116%" height="116%">
          <feGaussianBlur stdDeviation="0.22" />
        </filter>
      </defs>
      <g filter={`url(#${idp}-soft)`}>
        {sprigs.map((s, i) => (
          <g key={i} transform={`translate(${s.x.toFixed(1)},${s.y.toFixed(1)}) rotate(${s.angle.toFixed(1)}) scale(${s.sz.toFixed(2)})`}>
            {/* Main stem */}
            <line x1="0" y1="-4" x2="0" y2="5.5" stroke={c.stem} strokeWidth="0.85" strokeLinecap="round" />
            {/* Leaf */}
            <ellipse
              cx={s.flip ? -2 : 2} cy="-1.8"
              rx="2.2" ry="0.7"
              fill={c.leaf1}
              transform={`rotate(${s.flip ? -38 : 38} ${s.flip ? -2 : 2} -1.8)`}
            />
            {/* Tiny side leaf */}
            <ellipse
              cx={s.flip ? 1.4 : -1.4} cy="0.4"
              rx="1.5" ry="0.55"
              fill={c.leaf2}
              transform={`rotate(${s.flip ? 28 : -28} ${s.flip ? 1.4 : -1.4} 0.4)`}
            />
            {/* Soft glow base — melts the florets into one bloom */}
            <ellipse cx="0" cy="3" rx="2.1" ry="3.4" fill={c.f3} opacity="0.28" />
            {/* Florets — five small blooms along the spike */}
            <ellipse cx="0"    cy="1.2" rx="1.25" ry="0.95" fill={c.f1} />
            <ellipse cx="-1"   cy="2.3" rx="1.05" ry="0.82" fill={c.f2} />
            <ellipse cx="1"    cy="2.3" rx="1.05" ry="0.82" fill={c.f2} />
            <ellipse cx="0"    cy="3.3" rx="0.95" ry="0.72" fill={c.f3} />
            <ellipse cx="0"    cy="4.2" rx="0.8"  ry="0.62" fill={c.f4} />
            {/* Tiny tip bud */}
            <ellipse cx="0" cy="5" rx="0.6" ry="0.5" fill={c.f5} />
            {/* Soft highlight */}
            <ellipse cx="-0.35" cy="1" rx="0.4" ry="0.32" fill="#ffffff" opacity="0.3" />
          </g>
        ))}
      </g>
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:py-32 overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--c-blob-blush) 0%, transparent 65%)', opacity: 0.35 }}
      />
      <div
        className="absolute top-10 left-[-60px] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--c-blob-gold) 0%, transparent 70%)', opacity: 0.2 }}
      />

      <motion.div
        className="relative z-10 max-w-lg mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Lavender heart wreath — deep violet in light, soft pink in dark */}
        <motion.div variants={fadeUp} className="flex justify-center mb-4">
          <span className="block dark:hidden">
            <HeartWreath c={wreathLight} idp="wl" />
          </span>
          <span className="hidden dark:block">
            <HeartWreath c={wreathDark} idp="wd" />
          </span>
        </motion.div>

        {/* Label */}
        <motion.p variants={fadeUp} className="font-body text-[10px] tracking-[0.4em] uppercase text-eyebrow mb-3">
          Let's Connect
        </motion.p>

        {/* Heading */}
        <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-light text-ink mb-4">
          Get in Touch
        </motion.h2>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
          <span className="text-gold-400 text-sm">✦</span>
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
        </motion.div>

        {/* Sub copy */}
        <motion.p variants={fadeUp} className="font-body italic text-ink-mute text-base leading-relaxed mb-10 max-w-xs mx-auto">
          Every bouquet is made to order, just for you.
        </motion.p>

        {/* Instagram button */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <motion.a
            href="https://www.instagram.com/brew.and.bloom09/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-body text-sm tracking-wide text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              boxShadow: '0 4px 20px rgba(220,39,67,0.30)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 6px 28px rgba(220,39,67,0.42)' }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="relative z-10 mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Floral divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold-400 opacity-40" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <g stroke="#D4A843" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85">
              <path d="M12 21 V 9" />
              <circle cx="12" cy="6" r="3" />
              <path d="M12 15 C 8 14 6 11 6 8" />
              <path d="M12 13 C 16 12 18 9 18 6" />
            </g>
          </svg>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold-400 opacity-40" />
        </div>

        <p className="font-body text-[11px] tracking-widest uppercase text-ink-soft">
          © {new Date().getFullYear()} Brew and Bloom · All rights reserved
        </p>
        <p className="font-body italic text-[11px] text-ink-soft mt-1">
          Handcrafted with love
        </p>
      </motion.footer>
    </section>
  )
}
