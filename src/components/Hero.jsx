import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiTruck, FiStar } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const stats = [
  { icon: <FiClock />, value: '3 Jam', label: 'Proses Cepat' },
  { icon: <FiTruck />, value: 'Gratis', label: 'Antar Jemput' },
  { icon: <FiStar />, value: '4.4 - 5.0', label: 'Rating Google' },
]

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="beranda" className="hero" ref={ref}>
      <div className="hero-bg">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-blob blob-3" />
      </div>
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            #1 Laundry Terpercaya di Tangerang
          </motion.span>

          <h1 className="hero-title">
            Cucian Bersih, Wangi &
            <span className="hero-highlight"> Selesai dalam 3 Jam!</span>
          </h1>

          <p className="hero-desc">
            Owie Laundry hadir untuk memudahkan urusan laundry Anda. Layanan cuci setrika
            profesional dengan sabun berkualitas, tersedia antar jemput, dan promo menarik
            setiap bulannya.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/6281355000957"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              Pesan via WhatsApp <FiArrowRight />
            </a>
            <a href="#layanan" className="btn btn-secondary">
              Lihat Layanan
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-card-main">
            <div className="hero-washing-icon">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="24" fill="url(#heroGrad)" />
                <circle cx="60" cy="66" r="30" stroke="white" strokeWidth="3" fill="none" />
                <circle cx="60" cy="66" r="20" stroke="white" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.6" />
                <rect x="35" y="28" width="8" height="8" rx="4" fill="white" opacity="0.8" />
                <rect x="48" y="28" width="8" height="8" rx="4" fill="white" opacity="0.6" />
                <rect x="70" y="26" width="18" height="6" rx="3" fill="white" opacity="0.4" />
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="120" y2="120">
                    <stop stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>Bersih & Wangi</h3>
            <p>Menggunakan deterjen premium</p>
          </div>

          <motion.div
            className="hero-floating-card card-top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiClock className="float-icon" />
            <div>
              <strong>Express 3 Jam</strong>
              <span>Selesai kilat!</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-card card-bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <FiTruck className="float-icon" />
            <div>
              <strong>Antar Jemput</strong>
              <span>Gratis ongkir!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="container hero-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-icon">{stat.icon}</span>
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
