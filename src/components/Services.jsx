import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDroplet, FiPackage, FiTruck, FiClock, FiHeart, FiStar } from 'react-icons/fi'
import { GiRunningShoe } from 'react-icons/gi'
import './Services.css'

const services = [
  {
    icon: <FiDroplet />,
    title: 'Laundry Cuci Setrika',
    desc: 'Layanan cuci dan setrika lengkap untuk pakaian sehari-hari. Bersih, wangi, dan rapi siap pakai.',
    color: '#0ea5e9',
    bg: '#e0f2fe',
  },
  {
    icon: <FiPackage />,
    title: 'Laundry Kiloan & Satuan',
    desc: 'Pilih sesuai kebutuhan Anda. Tersedia paket kiloan hemat dan satuan untuk item spesial.',
    color: '#8b5cf6',
    bg: '#ede9fe',
  },
  {
    icon: <FiHeart />,
    title: 'Laundry Baby Care',
    desc: 'Khusus pakaian bayi menggunakan sabun khusus yang lembut dan aman untuk kulit sensitif si kecil.',
    color: '#ec4899',
    bg: '#fce7f3',
  },
  {
    icon: <FiClock />,
    title: 'Express 3 Jam',
    desc: 'Butuh cepat? Layanan express kami menyelesaikan cucian Anda hanya dalam 3 jam saja!',
    color: '#f97316',
    bg: '#fff7ed',
  },
  {
    icon: <FiTruck />,
    title: 'Antar Jemput',
    desc: 'Tidak sempat ke outlet? Tenang, kami menyediakan layanan antar jemput langsung ke rumah Anda.',
    color: '#10b981',
    bg: '#ecfdf5',
  },
  {
    icon: <GiRunningShoe />,
    title: 'Cuci Selimut, Sprei & Sepatu',
    desc: 'Selain pakaian, kami juga melayani cuci selimut, sprei, bed cover, dan sepatu kesayangan Anda.',
    color: '#6366f1',
    bg: '#eef2ff',
  },
  {
    icon: <FiStar />,
    title: 'Promo Menarik',
    desc: 'Dapatkan promo dan diskon menarik setiap bulannya. Follow Instagram kami untuk info terbaru!',
    color: '#eab308',
    bg: '#fefce8',
  },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="layanan" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Layanan Kami</span>
          <h2 className="section-title">Layanan Lengkap untuk Semua Kebutuhan</h2>
          <p className="section-subtitle">
            Dari pakaian sehari-hari hingga item khusus, Owie Laundry siap menangani
            semuanya dengan profesional dan harga terjangkau.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              className="service-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div
                className="service-icon"
                style={{ background: service.bg, color: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
