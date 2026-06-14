import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bouquets, FILTERS } from '../data/bouquets'

const ease = [0.22, 1, 0.36, 1]

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  const touchX = useRef(null)

  // Keyboard nav
  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft')  onPrev()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose, onPrev, onNext])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchX.current === null) return
    const delta = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 48) delta > 0 ? onNext() : onPrev()
    touchX.current = null
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(12,6,4,0.92)] backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-h-screen" onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.32, ease }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[78vh] max-w-full w-auto rounded-2xl object-contain"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <p className="font-display text-lg text-white font-medium">{item.name}</p>
          <p className="font-body text-sm text-white/65 mt-0.5 max-w-sm mx-auto">{item.desc}</p>

          {/* Order CTA */}
          <a
            href="https://wa.me/918007772681"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full font-body text-xs tracking-wide text-[#3a2e28]"
            style={{ background: 'linear-gradient(135deg, #E8C97A 0%, #D4A843 100%)', boxShadow: '0 4px 18px rgba(212,168,67,0.4)' }}
          >
            Order This Bouquet
          </a>
        </motion.div>

        {/* Counter */}
        <p className="font-body text-[10px] tracking-widest text-white/40 mt-3">
          {index + 1} / {items.length}
        </p>
      </div>

      {/* Prev / Next */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
          aria-label="Previous"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {index < items.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
          aria-label="Next"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
        aria-label="Close"
      >
        <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </motion.div>
  )
}

// ── Masonry card ───────────────────────────────────────────────────────────────
function BouquetCard({ item, onClick }) {
  return (
    <motion.figure
      layout
      className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid mb-4"
      style={{ boxShadow: '0 4px 20px rgba(30,15,10,0.10)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease }}
      whileHover={{ y: -4, boxShadow: '0 12px 34px rgba(30,15,10,0.18)' }}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${item.tall ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay — always subtle, richer on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,10,6,0.70)] via-[rgba(25,10,6,0.04)] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400" />
        {/* Gold shimmer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(232,201,122,0.12) 0%, transparent 55%)' }}
        />
        {/* Caption */}
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
          <h3 className="font-display text-base font-medium text-white leading-tight">{item.name}</h3>
          <p className="font-body text-[11px] text-white/75 mt-0.5 leading-snug line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {item.desc}
          </p>
        </figcaption>
        {/* Category tag */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(15,8,4,0.55)', border: '1px solid rgba(212,168,67,0.3)' }}
        >
          <span className="font-body text-[9px] tracking-[0.22em] uppercase text-gold-300 capitalize">
            {item.category}
          </span>
        </div>
      </div>
    </motion.figure>
  )
}

// ── Main Gallery ───────────────────────────────────────────────────────────────
export default function Gallery({ initialFilter = 'all' }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Update if parent changes the initial filter (from Collections)
  useEffect(() => { setActiveFilter(initialFilter) }, [initialFilter])

  const filtered = activeFilter === 'all'
    ? bouquets
    : bouquets.filter(b => b.category === activeFilter)

  const openLightbox  = useCallback((i) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => setLightboxIndex(i => Math.max(0, i - 1)), [])
  const nextImage = useCallback(() => setLightboxIndex(i => Math.min(filtered.length - 1, i + 1)), [filtered.length])

  return (
    <>
      <section id="gallery" className="px-5 py-20 sm:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--c-blob-blush) 0%, transparent 70%)', opacity: 0.2 }}
        />

        {/* Section header */}
        <motion.div
          className="text-center mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease }}
        >
          <p className="font-body text-[10px] tracking-[0.42em] uppercase text-eyebrow mb-3">Portfolio</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-ink">Our Work</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="block h-px w-10 bg-gold-400 opacity-50" />
            <span className="text-gold-400 text-sm">✦</span>
            <span className="block h-px w-10 bg-gold-400 opacity-50" />
          </div>
          <p className="font-body italic text-ink-mute text-sm mt-4 max-w-xs mx-auto">
            Every arrangement is crafted fresh, just for you.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10 relative z-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          {FILTERS.map(f => (
            <motion.button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className="relative px-4 py-2 rounded-full font-body text-xs tracking-wide transition-colors"
              style={{
                background: activeFilter === f.key ? 'linear-gradient(135deg, #E8C97A 0%, #D4A843 100%)' : 'var(--c-surface-translucent)',
                color:      activeFilter === f.key ? '#3a2e28' : 'var(--c-ink-soft)',
                border:     activeFilter === f.key ? '1px solid transparent' : '1px solid var(--c-border)',
                boxShadow:  activeFilter === f.key ? '0 4px 16px rgba(212,168,67,0.3)' : 'none',
              }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Count */}
        <motion.p
          className="text-center font-body text-[10px] tracking-[0.3em] uppercase text-ink-faint mb-8 relative z-10"
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.length} {filtered.length === 1 ? 'bouquet' : 'bouquets'}
        </motion.p>

        {/* Masonry grid */}
        <div className="relative z-10 max-w-6xl mx-auto columns-2 sm:columns-3 lg:columns-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <BouquetCard
                key={item.id}
                item={item}
                onClick={() => openLightbox(i)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center font-body italic text-ink-mute py-16">No bouquets found.</p>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  )
}
