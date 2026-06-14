// All bouquet images — auto-discovered from src/assets/images
// Categories: luxury | wedding | anniversary | birthday | seasonal

import img01 from '../assets/images/WhatsApp Image 2026-06-02 at 1.24.13 AM (1).jpeg'
import img03 from '../assets/images/WhatsApp Image 2026-06-02 at 1.24.14 AM (1).jpeg'
import img04 from '../assets/images/WhatsApp Image 2026-06-02 at 1.24.14 AM.jpeg'
import img05 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.13 AM.jpeg'
import img06 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.14 AM (1).jpeg'
import img07 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.14 AM.jpeg'
import img08 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.15 AM (1).jpeg'
import img09 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.15 AM (2).jpeg'
import img10 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.15 AM.jpeg'
import img11 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.16 AM (1).jpeg'
import img12 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.16 AM.jpeg'
import img13 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.17 AM (1).jpeg'
import img14 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.17 AM.jpeg'
import img15 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.18 AM (1).jpeg'
import img16 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.18 AM.jpeg'
import img17 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.19 AM (1).jpeg'
import img18 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.19 AM.jpeg'
import img19 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.20 AM (1).jpeg'
import img20 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.20 AM (2).jpeg'
import img21 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.20 AM.jpeg'
import img24 from '../assets/images/WhatsApp Image 2026-06-05 at 11.39.22 AM.jpeg'

export const bouquets = [
  // ── LUXURY ──────────────────────────────────────────────────────
  {
    id: 4,
    src: img04,
    alt: 'Signature custom money bouquet with luxury gift boxes',
    name: 'The Money Bouquet',
    desc: 'Our showstopper — folded notes, gift boxes, and a custom finish for milestone moments.',
    category: 'luxury',
    featured: true,
    tall: false,
  },
  {
    id: 7,
    src: img07,
    alt: 'Premium golden-tone luxury bouquet',
    name: 'Golden Moment',
    desc: 'A statement arrangement in warm gold and ivory, crafted for unforgettable celebrations.',
    category: 'luxury',
    featured: false,
    tall: true,
  },
  {
    id: 13,
    src: img13,
    alt: 'Royal deep-toned luxury bouquet',
    name: 'Royal Affair',
    desc: 'Deep, jewel-toned blooms arranged with precision for a truly regal gift.',
    category: 'luxury',
    featured: false,
    tall: false,
  },
  {
    id: 16,
    src: img16,
    alt: 'Champagne and cream luxury bouquet',
    name: 'Champagne Toast',
    desc: 'Champagne roses and soft cream blooms — the perfect toast to a milestone.',
    category: 'luxury',
    featured: false,
    tall: true,
  },
  {
    id: 24,
    src: img24,
    alt: 'Grand luxury bouquet arrangement',
    name: 'The Grand Gesture',
    desc: 'When only the most extravagant will do. A full, lush bouquet for grand occasions.',
    category: 'luxury',
    featured: false,
    tall: false,
  },

  // ── WEDDING ─────────────────────────────────────────────────────
  {
    id: 6,
    src: img06,
    alt: 'Ivory and white bridal bouquet',
    name: 'Ivory Dreams',
    desc: 'Classic ivory blooms arranged in a full, round bridal silhouette.',
    category: 'wedding',
    featured: true,
    tall: false,
  },
  {
    id: 8,
    src: img08,
    alt: 'Blush cascade wedding bouquet',
    name: 'Blush Cascade',
    desc: 'A cascade of blush and white petals that trail elegantly — perfect for the altar.',
    category: 'wedding',
    featured: false,
    tall: true,
  },
  {
    id: 15,
    src: img15,
    alt: 'White elegance bridal arrangement',
    name: 'White Elegance',
    desc: 'Pure white blooms, green foliage, and soft ribbon — timeless bridal perfection.',
    category: 'wedding',
    featured: false,
    tall: false,
  },
  {
    id: 19,
    src: img19,
    alt: 'Bridal touch bouquet with soft florals',
    name: 'The Bridal Touch',
    desc: 'Soft, feminine, and completely personal — designed around the bride\'s vision.',
    category: 'wedding',
    featured: false,
    tall: true,
  },

  // ── ANNIVERSARY ─────────────────────────────────────────────────
  {
    id: 1,
    src: img01,
    alt: 'Heart-shaped red rose anniversary bouquet',
    name: 'The Devotion Heart',
    desc: 'A heart of crimson roses — the most eloquent declaration of love.',
    category: 'anniversary',
    featured: true,
    tall: false,
  },
  {
    id: 5,
    src: img05,
    alt: 'Classic red rose romantic bouquet',
    name: 'Rose Garden',
    desc: 'A generous gathering of premium red roses for the one who holds your heart.',
    category: 'anniversary',
    featured: false,
    tall: true,
  },
  {
    id: 9,
    src: img09,
    alt: 'Crimson and deep rose anniversary bouquet',
    name: 'Crimson Affair',
    desc: 'Deep crimson roses with trailing greenery — an intimate, passionate arrangement.',
    category: 'anniversary',
    featured: false,
    tall: false,
  },
  {
    id: 17,
    src: img17,
    alt: 'Romantic bloom anniversary bouquet',
    name: 'Love in Bloom',
    desc: 'Layered blooms in romantic shades that say everything words cannot.',
    category: 'anniversary',
    featured: false,
    tall: true,
  },

  // ── BIRTHDAY ────────────────────────────────────────────────────
  {
    id: 3,
    src: img03,
    alt: 'Bold magenta roses and lilies birthday bouquet',
    name: 'Magenta Muse',
    desc: 'Bold pink roses and lilies bursting with colour — a birthday they\'ll never forget.',
    category: 'birthday',
    featured: true,
    tall: false,
  },
  {
    id: 11,
    src: img11,
    alt: 'Colourful birthday petal celebration bouquet',
    name: 'Petal Celebration',
    desc: 'A joyful riot of colour that turns any birthday into a floral celebration.',
    category: 'birthday',
    featured: false,
    tall: true,
  },
  {
    id: 12,
    src: img12,
    alt: 'Vibrant garden party birthday bouquet',
    name: 'The Garden Party',
    desc: 'Mixed blooms in vivid shades arranged with a relaxed, garden-picked charm.',
    category: 'birthday',
    featured: false,
    tall: false,
  },
  {
    id: 18,
    src: img18,
    alt: 'Confetti-bright birthday garden bouquet',
    name: 'Confetti Garden',
    desc: 'Bright, fun, and completely unexpected — the bouquet that makes them smile instantly.',
    category: 'birthday',
    featured: false,
    tall: true,
  },

  // ── SEASONAL ────────────────────────────────────────────────────
  {
    id: 10,
    src: img10,
    alt: 'Spring seasonal fresh bouquet',
    name: 'Spring Serenade',
    desc: 'Fresh, airy blooms that capture the first breath of spring in every stem.',
    category: 'seasonal',
    featured: true,
    tall: true,
  },
  {
    id: 14,
    src: img14,
    alt: 'Meadow-inspired seasonal bouquet',
    name: 'Meadow Dream',
    desc: 'Wildflower-inspired and effortlessly beautiful — like a walk through an open field.',
    category: 'seasonal',
    featured: false,
    tall: false,
  },
  {
    id: 20,
    src: img20,
    alt: 'Autumn warm-toned seasonal bouquet',
    name: 'Autumn Reverie',
    desc: 'Warm amber and terracotta blooms that celebrate the richness of the autumn season.',
    category: 'seasonal',
    featured: false,
    tall: true,
  },
  {
    id: 21,
    src: img21,
    alt: 'Sunrise golden seasonal morning bouquet',
    name: 'Sunrise Bouquet',
    desc: 'Golden, warm, and radiant — like the first light catching dew on fresh petals.',
    category: 'seasonal',
    featured: false,
    tall: false,
  },
]

// One featured per collection for collection cards
export const collectionFeatured = {
  luxury:      bouquets[0],  // The Money Bouquet
  wedding:     bouquets[5],  // Ivory Dreams
  anniversary: bouquets[9],  // The Devotion Heart
  birthday:    bouquets[13], // Magenta Muse
  seasonal:    bouquets[17], // Spring Serenade
}

export const FILTERS = [
  { key: 'all',         label: 'All Work' },
  { key: 'luxury',      label: 'Luxury' },
  { key: 'wedding',     label: 'Wedding' },
  { key: 'anniversary', label: 'Anniversary' },
  { key: 'birthday',    label: 'Birthday' },
  { key: 'seasonal',    label: 'Seasonal' },
]

export const COLLECTIONS = [
  {
    key:   'luxury',
    label: 'Luxury Collection',
    desc:  'Extravagant arrangements crafted for milestone moments and grand gestures.',
    accent: '#D4A843',
  },
  {
    key:   'wedding',
    label: 'Wedding Collection',
    desc:  'Timeless bridal bouquets and wedding florals for your most special day.',
    accent: '#F9C4D2',
  },
  {
    key:   'anniversary',
    label: 'Anniversary Collection',
    desc:  'Romantic arrangements that speak every language of love.',
    accent: '#E8638A',
  },
  {
    key:   'birthday',
    label: 'Birthday Collection',
    desc:  'Vibrant, joyful bouquets that turn any birthday into a floral celebration.',
    accent: '#F7B23C',
  },
  {
    key:   'seasonal',
    label: 'Seasonal Collection',
    desc:  'Curated blooms that honour each season\'s unique beauty and palette.',
    accent: '#82B88A',
  },
]
