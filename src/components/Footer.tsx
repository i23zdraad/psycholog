import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'O mně', href: '#o-mne' },
  { label: 'Proč ke mně', href: '#proc-ke-mne' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Recenze', href: '#recenze' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ gap: '20px' }}>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.40)',
          }}>
            Michaela Zdráhalová
          </span>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: '20px' }}>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-white/25 hover:text-white/55 transition-colors"
                style={{ fontSize: '13px', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <motion.a
            href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: 'rgba(255,255,255,0.80)' }}
            className="text-white/40"
            style={{ fontSize: '13px', textDecoration: 'none' }}
          >
            Objednat se
          </motion.a>
        </div>
        <p style={{
          textAlign: 'center',
          marginTop: '24px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.20)',
        }}>
          © {new Date().getFullYear()} Mgr. Michaela Zdráhalová. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  )
}