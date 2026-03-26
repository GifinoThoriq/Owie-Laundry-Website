import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import './CTA.css'

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="kontak" className="cta" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-bg">
            <div className="cta-blob cta-blob-1" />
            <div className="cta-blob cta-blob-2" />
          </div>
          <div className="cta-content">
            <h2>Yuk, Serahkan Cucian Anda ke Owie Laundry!</h2>
            <p>
              Tidak perlu repot lagi urusan cuci-mencuci. Hubungi kami sekarang via
              WhatsApp dan nikmati promo menarik untuk pelanggan baru!
            </p>
            <div className="cta-actions">
              <a
                href="https://wa.me/6281355000957"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
              >
                Chat WhatsApp Bintaro <FiArrowRight />
              </a>
              <a
                href="https://wa.me/6285188188274"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white-outline"
              >
                Chat WhatsApp Adam Malik <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
