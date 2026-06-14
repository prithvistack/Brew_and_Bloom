import { useState } from 'react'
import Hero        from './components/Hero'
import Collections from './components/Collections'
import Gallery     from './components/Gallery'
import Testimonials from './components/Testimonials'
import HowItWorks  from './components/HowItWorks'
import Contact     from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import PetalField  from './components/PetalField'

function SectionDivider({ blush = false }) {
  return (
    <div className="flex items-center px-8 gap-4 opacity-25">
      <span
        className={`flex-1 h-px bg-gradient-to-r from-transparent ${blush ? 'via-blush-200' : 'via-gold-400'} to-transparent`}
      />
    </div>
  )
}

export default function App() {
  // Selecting a collection card scrolls to gallery + sets filter
  const [galleryFilter, setGalleryFilter] = useState('all')

  function handleCollectionSelect(category) {
    setGalleryFilter(category)
    setTimeout(() => {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <main className="bg-canvas min-h-screen transition-colors duration-500 overflow-x-hidden">
      {/* Ambient drifting petals — full page */}
      <PetalField count={24} fixed />
      <ThemeToggle />

      {/* ① Hero */}
      <Hero />

      <SectionDivider />

      {/* ② Collections */}
      <Collections onFilterSelect={handleCollectionSelect} />

      <SectionDivider blush />

      {/* ③ Gallery (masonry + lightbox) */}
      <Gallery initialFilter={galleryFilter} />

      <SectionDivider />

      {/* ④ How It Works */}
      <HowItWorks />

      <SectionDivider blush />

      {/* ⑤ Testimonials */}
      <Testimonials />

      <SectionDivider />

      {/* ⑥ Contact */}
      <Contact />
    </main>
  )
}
