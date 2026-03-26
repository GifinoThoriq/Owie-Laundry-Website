import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './WhyUs.css'

const reasons = [
  {
    number: '01',
    title: 'Proses Cepat & Tepat Waktu',
    desc: 'Cucian selesai dalam 3 jam untuk layanan express. Kami selalu menepati janji waktu pengerjaan.',
  },
  {
    number: '02',
    title: 'Sabun & Pewangi Berkualitas',
    desc: 'Menggunakan deterjen premium dan pewangi tahan lama. Khusus baby care, kami pakai sabun yang aman untuk kulit sensitif.',
  },
  {
    number: '03',
    title: 'Harga Terjangkau',
    desc: 'Layanan berkualitas tidak harus mahal. Kami menawarkan harga kompetitif dengan banyak promo menarik setiap bulan.',
  },
  {
    number: '04',
    title: 'Layanan Antar Jemput',
    desc: 'Tidak perlu repot ke outlet. Cukup hubungi kami, dan tim kami akan menjemput serta mengantar cucian Anda.',
  },
  {
    number: '05',
    title: 'Rating Tinggi di Google',
    desc: 'Dengan rating 4.4 - 5.0 di Google Reviews, kepuasan pelanggan adalah bukti nyata kualitas layanan kami.',
  },
  {
    number: '06',
    title: '2 Lokasi Strategis',
    desc: 'Tersedia di Bintaro dan Adam Malik, Tangerang. Mudah dijangkau dan siap melayani kebutuhan laundry Anda.',
  },
]

export default function WhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="whyus" ref={ref}>
      <div className="container">
        <motion.div
          className="whyus-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Kenapa Owie Laundry?</span>
          <h2 className="section-title">Alasan Pelanggan Memilih Kami</h2>
          <p className="section-subtitle">
            Kepercayaan pelanggan adalah prioritas utama kami. Berikut alasan mengapa
            Owie Laundry menjadi pilihan tepat.
          </p>
        </motion.div>

        <div className="whyus-grid">
          {reasons.map((r, i) => (
            <motion.div
              className="whyus-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <span className="whyus-number">{r.number}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
