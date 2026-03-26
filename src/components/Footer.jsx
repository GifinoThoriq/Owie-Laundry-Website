import { motion } from 'framer-motion'
import { FiInstagram, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import './Footer.css'

const quickLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang Kami', href: '#tentang' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Cabang', href: '#cabang' },
  { name: 'Kontak', href: '#kontak' },
]

const services = [
  'Laundry Cuci Setrika',
  'Laundry Kiloan & Satuan',
  'Laundry Baby Care',
  'Express 3 Jam',
  'Antar Jemput',
  'Cuci Selimut & Sprei',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">OL</span>
              <span className="logo-text">Owie Laundry</span>
            </div>
            <p>
              Layanan laundry profesional dan terpercaya di Tangerang &
              Tangerang Selatan. Bersih, wangi, dan tepat waktu.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/owielaundry/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@owie_laundry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          <div>
            <h4>Menu</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Layanan</h4>
            <ul>
              {services.map((s) => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Kontak</h4>
            <ul className="footer-contact">
              <li>
                <FiMapPin />
                <span>Bintaro & Adam Malik, Tangerang</span>
              </li>
              <li>
                <FiPhone />
                <span>0813-5500-0957 (Bintaro)</span>
              </li>
              <li>
                <FiPhone />
                <span>0851-8818-8274 (Adam Malik)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Owie Laundry. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
