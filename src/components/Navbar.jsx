import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Cabang', href: '#cabang' },
  { name: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <a href="#beranda" className="logo">
          <span className="logo-icon">OL</span>
          <span className="logo-text">Owie Laundry</span>
        </a>

        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/6281355000957" target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta desktop-only">
          Hubungi Kami
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6281355000957"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Hubungi Kami
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
