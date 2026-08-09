export default function Footer() {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '1px solid rgba(255,255,255,0.03)',
      padding: 'clamp(32px, 4vw, 50px) clamp(20px, 4vw, 44px)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between" style={{ gap: '16px' }}>
          <div className="flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6 4.1 A8 8 0 1 0 19.9 15.4 A6.2 6.2 0 1 1 15.6 4.1 Z" fill="rgba(255,255,255,0.35)" />
            </svg>
            <span style={{
              fontSize: '13px', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}>
              Michaela Zdráhalová
            </span>
          </div>

          <div className="flex flex-wrap" style={{ gap: '20px' }}>
            {[
              { label: 'O mně', href: '#o-mne' },
              { label: 'Služby', href: '#sluzby' },
              { label: 'Ceník', href: '#cenik' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-white/25 hover:text-white/55 transition-colors"
                style={{ fontSize: '12px', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          fontSize: '11px',
          color: 'rgba(255,255,255,0.15)',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.03)',
        }}>
          © 2026 Michaela Zdráhalová. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
