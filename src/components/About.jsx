import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCheckCircle } from 'react-icons/fi'
import './About.css'

const features = [
  'Berpengalaman melayani ribuan pelanggan',
  'Menggunakan deterjen & pewangi premium',
  'Proses cepat, hasil maksimal',
  'Tersedia layanan antar jemput gratis',
  'Harga terjangkau dengan promo menarik',
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="tentang" className="about" ref={ref}>
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="about-image-card">
            <div className="about-icon-grid">
              <div className="about-icon-item">
                <svg viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="16" fill="#e0f2fe" />
                  <circle cx="40" cy="44" r="20" stroke="#0ea5e9" strokeWidth="2.5" fill="none" />
                  <circle cx="40" cy="44" r="12" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
                  <rect x="26" y="20" width="6" height="6" rx="3" fill="#0ea5e9" />
                  <rect x="36" y="20" width="6" height="6" rx="3" fill="#0ea5e9" opacity="0.5" />
                </svg>
                <span>Mesin Modern</span>
              </div>
              <div className="about-icon-item">
                <svg viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="16" fill="#fff7ed" />
                  <path d="M30 52 L40 28 L50 52" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M33 46 H47" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="40" cy="55" r="3" fill="#f97316" opacity="0.5" />
                </svg>
                <span>Sabun Premium</span>
              </div>
              <div className="about-icon-item">
                <svg viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="16" fill="#ecfdf5" />
                  <path d="M28 40 L38 50 L54 30" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span>Hasil Terjamin</span>
              </div>
              <div className="about-icon-item">
                <svg viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="16" fill="#fdf2f8" />
                  <circle cx="40" cy="34" r="10" stroke="#ec4899" strokeWidth="2" fill="none" />
                  <path d="M28 56 C28 48 52 48 52 56" stroke="#ec4899" strokeWidth="2" fill="none" />
                </svg>
                <span>Tim Profesional</span>
              </div>
            </div>
          </div>
          <motion.div
            className="about-experience-badge"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <strong>2 Cabang</strong>
            <span>di Tangerang</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="section-tag">Tentang Kami</span>
          <h2 className="section-title">
            Solusi Laundry Terpercaya untuk Keluarga Anda
          </h2>
          <p className="about-desc">
            <strong>Owie Laundry</strong> adalah layanan laundry profesional yang berlokasi
            di Tangerang dan Tangerang Selatan. Kami berkomitmen memberikan hasil cucian
            terbaik dengan harga yang ramah di kantong. Dengan dua cabang yang siap
            melayani, kami memastikan pakaian Anda bersih, wangi, dan rapi.
          </p>
          <p className="about-desc">
            Kami memahami betapa berharganya waktu Anda. Oleh karena itu, kami menyediakan
            layanan express 3 jam dan antar jemput gratis agar Anda bisa fokus pada
            hal-hal yang lebih penting.
          </p>

          <ul className="about-features">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              >
                <FiCheckCircle className="check-icon" />
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
