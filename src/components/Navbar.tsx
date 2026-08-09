import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
  { label: 'O mně', href: '#o-mne' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Recenze', href: '#recenze' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{ padding: '20px 24px' }}
      >
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6 4.1 A8 8 0 1 0 19.9 15.4 A6.2 6.2 0 1 1 15.6 4.1 Z" fill="#fff" />
          </svg>
          <span style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff' }}>
            M. Zdráhalová
          </span>
        </a>

        {/* Desktop Center links */}
        <div className="hidden lg:flex items-center" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', gap: '32px' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontSize: '14px', fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center" style={{ gap: '18px' }}>
          <motion.a
            href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.12)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center text-white"
            style={{
              padding: '10px 22px', borderRadius: '999px',
              fontSize: '14px', fontWeight: 400,
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              whiteSpace: 'nowrap',
            }}
          >
            Objednat se
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5"
          style={{ width: '32px', height: '32px', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="block bg-white/80" style={{ width: '22px', height: '1.5px', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(4.5px)' : 'none' }} />
          <span className="block bg-white/80" style={{ width: '22px', height: '1.5px', borderRadius: '2px', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <span className="block bg-white/80" style={{ width: '22px', height: '1.5px', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none' }} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(5,5,8,0.96)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center" style={{ gap: '28px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-white/90 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: '26px', fontWeight: 400,
                    textDecoration: 'none', letterSpacing: '-0.01em',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="inline-flex items-center text-white mt-4"
                style={{
                  padding: '14px 32px', borderRadius: '999px',
                  fontSize: '16px', fontWeight: 400,
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.35)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                Objednat se
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
