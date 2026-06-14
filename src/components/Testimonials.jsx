import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const reviews = [
  {
    id: 1,
    name: 'Priya S.',
    occasion: 'Wedding Bouquet',
    quote: 'Brew & Bloom created the most breathtaking bridal bouquet I could have imagined. Every stem was perfect, and it arrived fresh on our wedding morning. The attention to detail was extraordinary — truly one of the highlights of our day.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Arjun M.',
    occasion: 'Anniversary Surprise',
    quote: 'I wanted something more personal than a shop bouquet for our 10th anniversary. The Devotion Heart arrangement left her completely speechless. It\'s clear that every bouquet is made with genuine care. Worth every rupee.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Meera K.',
    occasion: 'Birthday Gift',
    quote: 'Ordered the Magenta Muse for my best friend\'s birthday and the reaction was priceless! The colours were even more vibrant in person, and it stayed beautiful for over a week. I will absolutely be ordering again.',
    stars: 5,
  },
  {
    id: 4,
    name: 'Ravi & Sunita',
    occasion: 'The Money Bouquet',
    quote: 'We gifted the Money Bouquet for our son\'s graduation and it was the talk of the party. Unique, beautifully crafted, and delivered with such care. Brew & Bloom has a customer for life in us.',
    stars: 5,
  },
  {
    id: 5,
    name: 'Deepa N.',
    occasion: 'Corporate Gifting',
    quote: 'We\'ve used Brew & Bloom for multiple corporate events and they never disappoint. The quality is consistently premium and the communication is seamless. Our clients are always impressed by the arrangements.',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="#D4A843">
          <path d="M7 1l1.5 4h4.5l-3.5 2.5 1.5 4L7 9.5 3 11.5l1.5-4L1 5h4.5L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const touchX = useRef(null)

  const prev = () => setActive(i => (i - 1 + reviews.length) % reviews.length)
  const next = () => setActive(i => (i + 1) % reviews.length)

  const handleTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchX.current === null) return
    const delta = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 48) delta > 0 ? next() : prev()
    touchX.current = null
  }

  return (
    <section className="relative px-5 py-20 sm:py-28 overflow-hidden">
      {/* Background atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, var(--c-bg-glow) 0%, transparent 65%)' }}
      />
      <div
        className="absolute top-10 left-[-80px] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--c-blob-gold) 0%, transparent 70%)', opacity: 0.2 }}
      />
      <div
        className="absolute bottom-10 right-[-60px] w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--c-blob-blush) 0%, transparent 70%)', opacity: 0.25 }}
      />

      {/* Section header */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease }}
      >
        <p className="font-body text-[10px] tracking-[0.42em] uppercase text-eyebrow mb-3">What Our Clients Say</p>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-ink">Our Love Stories</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
          <span className="text-gold-400 text-sm">✦</span>
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
        </div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="rounded-3xl p-8 sm:p-10 text-center"
            style={{
              background: 'linear-gradient(145deg, var(--c-surface-1) 0%, var(--c-surface-2) 100%)',
              border:     '1px solid var(--c-border)',
              boxShadow:  'var(--c-card-shadow)',
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.42, ease }}
          >
            {/* Opening quote mark */}
            <span className="font-script text-6xl text-gold-400 opacity-40 leading-none block -mb-2">❝</span>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              <Stars count={reviews[active].stars} />
            </div>

            {/* Quote */}
            <p className="font-body italic text-ink-soft text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              {reviews[active].quote}
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 my-5">
              <span className="block h-px w-8 bg-gold-400 opacity-40" />
              <span className="text-gold-400 text-xs">✦</span>
              <span className="block h-px w-8 bg-gold-400 opacity-40" />
            </div>

            {/* Author */}
            <p className="font-display text-lg font-medium text-ink">{reviews[active].name}</p>
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-eyebrow mt-1">
              {reviews[active].occasion}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ border: '1px solid var(--c-border)', background: 'var(--c-surface-translucent)' }}
            aria-label="Previous"
          >
            <svg className="w-4 h-4 text-ink-soft" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width:   active === i ? '20px' : '7px',
                  height:  '7px',
                  background: active === i
                    ? 'linear-gradient(90deg, #E8C97A, #D4A843)'
                    : 'var(--c-border)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ border: '1px solid var(--c-border)', background: 'var(--c-surface-translucent)' }}
            aria-label="Next"
          >
            <svg className="w-4 h-4 text-ink-soft" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
