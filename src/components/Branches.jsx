import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiPhone, FiClock, FiStar } from 'react-icons/fi'
import './Branches.css'

const branches = [
  {
    name: 'Owie Laundry Bintaro',
    rating: '4.4',
    reviews: '9',
    address: 'Jl. Kp. Rw. Bar., Pd. Pucung, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15229',
    phone: '0813-5500-0957',
    whatsapp: '6281355000957',
    hours: '08.00 - 20.00 (Setiap Hari)',
    mapUrl: 'https://www.google.com/maps/place/Owie+Laundry+Bintaro/',
    color: '#0ea5e9',
  },
  {
    name: 'Owie Laundry Adam Malik',
    rating: '5.0',
    reviews: '26',
    address: 'Jl. Cenderawasih II No.Kavling 274, Cipadu Jaya, Kec. Larangan, Kota Tangerang, Banten 15155',
    phone: '0851-8818-8274',
    whatsapp: '6285188188274',
    hours: '08.00 - 20.00 (Setiap Hari)',
    mapUrl: 'https://www.google.com/maps/place/Owie+Laundry+Adam+Malik/',
    color: '#8b5cf6',
  },
]

export default function Branches() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="cabang" className="branches" ref={ref}>
      <div className="container">
        <motion.div
          className="branches-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Cabang Kami</span>
          <h2 className="section-title">Temukan Owie Laundry Terdekat</h2>
          <p className="section-subtitle">
            Kami hadir di dua lokasi strategis di Tangerang dan Tangerang Selatan
            untuk melayani kebutuhan laundry Anda.
          </p>
        </motion.div>

        <div className="branches-grid">
          {branches.map((branch, i) => (
            <motion.div
              className="branch-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="branch-header" style={{ background: `linear-gradient(135deg, ${branch.color}, ${branch.color}dd)` }}>
                <h3>{branch.name}</h3>
                <div className="branch-rating">
                  <FiStar />
                  <span>{branch.rating}</span>
                  <span className="rating-count">({branch.reviews} ulasan Google)</span>
                </div>
              </div>

              <div className="branch-body">
                <div className="branch-info">
                  <FiMapPin className="branch-info-icon" />
                  <span>{branch.address}</span>
                </div>
                <div className="branch-info">
                  <FiPhone className="branch-info-icon" />
                  <span>{branch.phone}</span>
                </div>
                <div className="branch-info">
                  <FiClock className="branch-info-icon" />
                  <span>{branch.hours}</span>
                </div>

                <div className="branch-actions">
                  <a
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa btn-sm"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <FiMapPin /> Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
