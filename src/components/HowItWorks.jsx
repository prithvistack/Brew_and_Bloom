import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    num: '01',
    title: 'Choose a Bouquet',
    body: 'Browse our gallery and collections. Find a style that speaks to your occasion, or tell us your vision.',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none">
        <circle cx="22" cy="22" r="20" stroke="var(--c-border-strong)" strokeWidth="1.2" />
        <path d="M15 22 C15 17.5 18 14 22 14 C26 14 29 17.5 29 22 C29 26.5 26 30 22 30 C18 30 15 26.5 15 22Z" stroke="#D4A843" strokeWidth="1.4" fill="none" />
        <path d="M22 11 L22 13 M22 31 L22 33 M11 22 L13 22 M31 22 L33 22" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="22" cy="22" r="3.5" fill="#D4A843" opacity="0.9" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Discuss & Customise',
    body: 'Reach out via WhatsApp or Instagram. Share your occasion, colours, flowers, and budget — we love your ideas.',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none">
        <circle cx="22" cy="22" r="20" stroke="var(--c-border-strong)" strokeWidth="1.2" />
        <path d="M13 17 C13 15.9 13.9 15 15 15 L29 15 C30.1 15 31 15.9 31 17 L31 25 C31 26.1 30.1 27 29 27 L18 27 L14 31 L14 27 L15 27 C13.9 27 13 26.1 13 25 Z" stroke="#D4A843" strokeWidth="1.4" />
        <path d="M17 20 L27 20 M17 23 L24 23" stroke="#D4A843" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Handcrafted for You',
    body: 'Every bouquet is made fresh to order with the finest blooms — no two are ever the same.',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none">
        <circle cx="22" cy="22" r="20" stroke="var(--c-border-strong)" strokeWidth="1.2" />
        <path d="M22 31 C22 31 13 24 13 18.5 C13 15 16.5 13 22 16.5 C27.5 13 31 15 31 18.5 C31 24 22 31 22 31Z" fill="#F9C4D2" fillOpacity="0.5" stroke="#D4A843" strokeWidth="1.3" />
        <path d="M19 24 C19 24 21 26.5 25 24" stroke="#D4A843" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Personal Delivery',
    body: 'Your bouquet is hand-delivered by us — fresh, wrapped beautifully, and right on time.',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none">
        <circle cx="22" cy="22" r="20" stroke="var(--c-border-strong)" strokeWidth="1.2" />
        <path d="M12 25 L19 18 L23 22 L28 16 L32 20" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="20" r="2" fill="#D4A843" />
        <path d="M13 28 L31 28" stroke="#D4A843" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const card = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-20 sm:py-28 relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #D4A843 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div
        className="absolute top-[-50px] right-[-90px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--c-blob-blush) 0%, transparent 70%)', opacity: 0.3 }}
      />

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease }}
      >
        <p className="font-body text-[10px] tracking-[0.42em] uppercase text-eyebrow mb-3">Simple &amp; Personal</p>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-ink">How It Works</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
          <span className="text-gold-400 text-sm">✦</span>
          <span className="block h-px w-10 bg-gold-400 opacity-50" />
        </div>
        <p className="font-body italic text-ink-mute text-sm mt-4 max-w-xs mx-auto leading-relaxed">
          From inspiration to doorstep — a process made just for you.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="relative rounded-3xl p-7 flex flex-col items-center text-center transition-shadow"
            style={{
              background:  'linear-gradient(145deg, var(--c-surface-1) 0%, var(--c-surface-2) 100%)',
              boxShadow:   'var(--c-card-shadow)',
              border:      '1px solid var(--c-border)',
            }}
            variants={card}
            whileHover={{ y: -5, boxShadow: 'var(--c-card-shadow-hover)' }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
          >
            {/* Step number — decorative */}
            <span
              className="absolute top-5 right-5 font-display text-xs font-medium"
              style={{ color: 'var(--c-border-strong)' }}
            >
              {step.num}
            </span>

            {/* Icon */}
            <div className="mb-5">{step.icon}</div>

            {/* Title */}
            <h3 className="font-display text-lg font-medium text-ink mb-2.5">{step.title}</h3>

            {/* Divider */}
            <span className="block h-px w-8 bg-gold-400 opacity-40 mb-3" />

            {/* Body */}
            <p className="font-body text-sm text-ink-mute leading-relaxed">{step.body}</p>

            {/* Connector arrow (not last on lg) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M12 6L16 10L12 14" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12 relative z-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.3, ease }}
      >
        <a
          href="https://wa.me/918007772681"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-body text-sm tracking-wide text-[#3a2e28] transition-all"
          style={{
            background:  'linear-gradient(135deg, #E8C97A 0%, #D4A843 100%)',
            boxShadow:   '0 4px 22px rgba(212,168,67,0.36)',
          }}
        >
          Start Your Order
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
