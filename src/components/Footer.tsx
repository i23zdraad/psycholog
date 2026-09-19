import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'O mně', href: '#o-mne' },
  { label: 'Vzdělání a praxe', href: '#vzdelani-praxe' },
  { label: 'Proč ke mně', href: '#proc-ke-mne' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Recenze', href: '#recenze' },
  { label: 'Kontakt', href: '#kontakt' },
]

const socials = [
  {
    name: 'Instagram',
    href: '#', // <-- změň na svůj odkaz
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
    href: '#', // <-- změň na svůj odkaz
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#', // <-- změň na svůj odkaz
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#000" />
      </svg>
    ),
  },
]

export default function Footer() {
  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 0 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '32px', alignItems: 'start' }}>
          {/* Left: Brand */}
          <div>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.80)',
              display: 'block',
              marginBottom: '8px',
            }}>
              Michaela Zdráhalová
            </span>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.35)',
              margin: 0,
              maxWidth: '240px',
            }}>
              Psycholožka a psychoterapeutka. Pomáhám lidem nacházet cestu k sobě.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-col" style={{ gap: '10px' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.30)',
              marginBottom: '4px',
            }}>
              Navigace
            </span>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-white/30 hover:text-white/70 transition-colors"
                style={{ fontSize: '14px', textDecoration: 'none', width: 'fit-content' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Socials + CTA */}
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.30)',
              marginBottom: '4px',
            }}>
              Sledujte mě
            </span>
            <div className="flex items-center" style={{ gap: '10px' }}>
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={s.name}
                  className="flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textDecoration: 'none',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center text-white"
              style={{
                marginTop: '4px',
                padding: '10px 20px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 400,
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.20)',
                width: 'fit-content',
              }}
            >
              Objednat se
            </motion.a>
          </div>
        </div>

        <div style={{
          marginTop: '40px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.20)',
          }}>
            © {new Date().getFullYear()} Mgr. Michaela Zdráhalová. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}