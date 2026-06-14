import { motion } from 'framer-motion'
import { COLLECTIONS, collectionFeatured } from '../data/bouquets'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

function CollectionCard({ col, onSelect }) {
  const img = collectionFeatured[col.key]
  return (
    <motion.button
      variants={fadeUp}
      onClick={() => onSelect(col.key)}
      className="group relative overflow-hidden rounded-2xl text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
      style={{ boxShadow: '0 4px 28px rgba(30,15,10,0.12)' }}
      whileHover={{ y: -4, boxShadow: '0 14px 40px rgba(30,15,10,0.20)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      {/* Background image */}
      <div className="relative overflow-hidden h-64 sm:h-72">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-106"
          loading="lazy"
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: 'linear-gradient(180deg, rgba(20,10,8,0.08) 0%, rgba(20,10,8,0.68) 100%)' }}
        />
        {/* Accent hover shimmer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${col.accent}22 0%, transparent 65%)` }}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Accent pip */}
        <span
          className="inline-block w-5 h-0.5 rounded-full mb-2.5"
          style={{ background: col.accent }}
        />
        <h3 className="font-display text-xl font-medium text-white leading-tight">
          {col.label}
        </h3>
        <p className="font-body text-xs text-white/80 mt-1.5 leading-relaxed line-clamp-2">
          {col.desc}
        </p>
        <span className="inline-flex items-center gap-1.5 mt-3 font-body text-[10px] tracking-[0.25em] uppercase text-white/70 group-hover:text-white transition-colors">
          Explore
          <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </motion.button>
  )
}

export default function Collections({ onFilterSelect }) {
  return (
    <section id="collections" className="relative px-5 py-20 sm:py-28 overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--c-blob-gold) 0%, transparent 70%)', opacity: 0.2 }}
      />

      {/* Section header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease }}
      >
        <p className="font-body text-[10px] tracking-[0.42em] uppercase text-eyebrow mb-3">
          Curated for Every Occasion
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-ink">Collections</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
          <span className="text-gold-400 text-sm">✦</span>
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
        </div>
        <p className="font-body italic text-ink-mute text-sm mt-4 max-w-xs mx-auto leading-relaxed">
          Every bouquet tells a story. Find yours.
        </p>
      </motion.div>

      {/* Collection grid */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {/* First two collections span full row on mobile, normal on larger */}
        {COLLECTIONS.slice(0, 2).map(col => (
          <CollectionCard key={col.key} col={col} onSelect={onFilterSelect} />
        ))}
        {/* Third takes 1 col */}
        <CollectionCard key={COLLECTIONS[2].key} col={COLLECTIONS[2]} onSelect={onFilterSelect} />
        {/* Last two */}
        {COLLECTIONS.slice(3).map(col => (
          <CollectionCard key={col.key} col={col} onSelect={onFilterSelect} />
        ))}
      </motion.div>
    </section>
  )
}
