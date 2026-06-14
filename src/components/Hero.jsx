import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

const navItems = [
  { id: 'collections', label: 'Collections' },
  { id: 'gallery',     label: 'Our Work' },
  { id: 'how-it-works',label: 'How It Works' },
  { id: 'contact',     label: 'Get in Touch' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// Boutique blossom icon — rose-blush petals with brand-gold centre
function BloomIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <radialGradient id="hbPetal" gradientUnits="userSpaceOnUse" cx="12" cy="12" r="11">
          <stop offset="0%" stopColor="#C07088" />
          <stop offset="52%" stopColor="#E8AABF" />
          <stop offset="100%" stopColor="#FDE8F2" />
        </radialGradient>
        <radialGradient id="hbInner" gradientUnits="userSpaceOnUse" cx="12" cy="12" r="7">
          <stop offset="0%" stopColor="#9A4460" />
          <stop offset="60%" stopColor="#D4849C" />
          <stop offset="100%" stopColor="#F2C4D8" />
        </radialGradient>
        <radialGradient id="hbCore" gradientUnits="userSpaceOnUse" cx="12" cy="11.2" r="2.8">
          <stop offset="0%" stopColor="#FFF8E4" />
          <stop offset="55%" stopColor="#E2B84A" />
          <stop offset="100%" stopColor="#A87A10" />
        </radialGradient>
      </defs>
      <g>
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse key={`o${i}`} cx="12" cy="3.8" rx="1.9" ry="3.4" fill="url(#hbPetal)" transform={`rotate(${a} 12 12)`} />
        ))}
      </g>
      <g>
        {[30, 90, 150, 210, 270, 330].map((a, i) => (
          <ellipse key={`i${i}`} cx="12" cy="6.4" rx="1.45" ry="2.6" fill="url(#hbInner)" transform={`rotate(${a} 12 12)`} />
        ))}
      </g>
      <circle cx="12" cy="12" r="2.3" fill="url(#hbCore)" />
      <circle cx="12" cy="11.5" r="0.85" fill="#FFF8E4" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* ── Background atmosphere ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-500"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, var(--c-bg-glow) 0%, var(--c-bg) 65%)' }}
      />
      <div
        className="absolute top-[-80px] right-[-60px] w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--c-blob-blush) 0%, transparent 70%)', opacity: 0.45 }}
      />
      <div
        className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--c-blob-gold) 0%, transparent 70%)', opacity: 0.3 }}
      />

      {/* ── Copy ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-24 text-center max-w-3xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="font-body text-[10px] tracking-[0.45em] uppercase text-eyebrow mb-5"
          {...fadeUp(0.1)}
        >
          Artisanal Florist · Est. 2026
        </motion.p>

        {/* Wordmark */}
        <motion.h1
          className="font-script text-[2.6rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-ink leading-[1.22] py-1 w-full"
          {...fadeUp(0.22)}
        >
          <span className="block">Brew <span className="text-blush-400">&amp;</span></span>
          <span className="block">Bloom</span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className="flex items-center gap-3 my-6 justify-center w-full"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.42, ease }}
        >
          <span className="block h-px w-12 bg-gold-400 opacity-55" />
          <span className="text-gold-400">✦</span>
          <span className="block h-px w-12 bg-gold-400 opacity-55" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-body italic text-ink-soft text-lg sm:text-xl max-w-sm leading-relaxed"
          {...fadeUp(0.52)}
        >
          Handcrafted bouquets, made with love — delivered to your door.
        </motion.p>

        {/* Primary + Secondary CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-8"
          {...fadeUp(0.68)}
        >
          {/* Primary: Order on WhatsApp */}
          <motion.a
            href="https://wa.me/918007772681"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm tracking-wide text-[#3a2e28]"
            style={{
              background: 'linear-gradient(135deg, #E8C97A 0%, #D4A843 100%)',
              boxShadow: '0 4px 22px rgba(212,168,67,0.38)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 6px 30px rgba(212,168,67,0.52)' }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order a Bouquet
          </motion.a>

          {/* Secondary: Browse collections */}
          <motion.button
            onClick={() => scrollTo('collections')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-body text-sm tracking-wide text-ink-soft transition-colors"
            style={{
              background: 'var(--c-surface-translucent)',
              border: '1px solid var(--c-border)',
              boxShadow: '0 2px 14px rgba(212,168,67,0.10)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(212,168,67,0.18)' }}
            whileTap={{ scale: 0.97 }}
          >
            Browse Collections
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Nav pills */}
        <motion.nav
          className="flex flex-wrap items-center justify-center gap-2.5 mt-8"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } } }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group inline-flex items-center gap-1.5 rounded-full pl-2.5 pr-4 py-2 font-body text-xs text-ink-soft backdrop-blur-sm transition-colors"
              style={{
                background: 'var(--c-surface-translucent)',
                border: '1px solid var(--c-border)',
              }}
              variants={{
                hidden:  { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              whileHover={{ y: -2, borderColor: 'rgba(212,168,67,0.7)' }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <BloomIcon />
              </span>
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-body text-[9px] tracking-[0.35em] uppercase text-ink-soft opacity-50">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-transparent via-gold-400 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
