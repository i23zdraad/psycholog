import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'O mně', href: '#o-mne' },
  { label: 'Proč ke mně', href: '#proc-ke-mne' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Recenze', href: '#recenze' },
  { label: 'Kontakt', href: '#kontakt' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#000" />
      </svg>
    ),
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' })
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(5,5,8,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(74,144,164,0.12)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(20px, 6vw, 80px)',
          height: '64px',
        }}
      >
        <a
          href="#"
          onClick={(e) => scrollTo(e, '#')}
          className="text-white"
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            textDecoration: 'none',
          }}
        >
          Mgr. Michaela Zdráhalová
        </a>

        <div className="hidden md:flex items-center" style={{ gap: '24px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-white/60 hover:text-white transition-colors"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-white"
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
              background: 'rgba(74,144,164,0.15)',
              border: '1px solid rgba(74,144,164,0.35)',
              backdropFilter: 'blur(4px)',
            }}
          >
            Objednat se
          </motion.a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            style={{
              background: 'rgba(5,5,8,0.92)',
              backdropFilter: 'blur(14px)',
              borderBottom: '1px solid rgba(74,144,164,0.12)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px clamp(20px, 6vw, 80px) 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-white/90 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: '18px',
                    fontWeight: 400,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-white inline-flex items-center justify-center"
                style={{
                  marginTop: '8px',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  background: 'rgba(74,144,164,0.15)',
                  border: '1px solid rgba(74,144,164,0.35)',
                }}
              >
                Objednat se
              </motion.a>

              {/* Sociální sítě — stejné ikony jako ve Footeru */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex items-center justify-center gap-3"
                style={{ marginTop: '4px' }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      textDecoration: 'none',
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}