import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const servicesData = [
  {
    title: 'Individuální terapie',
    desc: 'Bezpečný prostor pro práci s vašimi tématy – úzkostí, stresem, ztrátou, životními změnami nebo touhou po osobním růstu. Přizpůsobuji přístup vašim potřebám.',
    duration: '60 minut',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Párové poradenství',
    desc: 'Společně mapujeme dynamiku vašeho vztahu, komunikační vzorce a hledáme cestu k větší blízkosti a porozumění. Terapie pro páry, které chtějí posílit vztah.',
    duration: '90 minut',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Práce s rodinou',
    desc: 'Rodinná terapie pomáhá pochopit systémové vzorce, zlepšit komunikaci a nalézt nové způsoby společného fungování. Pro rodiny v konfliktu i náhradní rodiny.',
    duration: '120 minut',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
        <path d="M17 21v-2a4 4 0 0 0-4-4h-1" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Ikigai koučing',
    desc: 'Tříměsíční program zaměřený na nalezení vašeho smyslu, silných stránek a cesty k naplněnému životu. Praktický přístup k osobnímu rozvoji.',
    duration: 'Program',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="sluzby" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#070707' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <FadeIn>
          <span style={{
            fontSize: '12px', fontWeight: 400,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Služby
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 style={{
            margin: '16px 0 0',
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 450,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#fff',
            maxWidth: '600px',
          }}>
            Čím se zabývám
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{
            marginTop: '14px',
            fontSize: 'clamp(14px, 1.1vw, 17px)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '560px',
          }}>
            Každý člověk je jedinečný. Přistupuji individuálně k vašim potřebám a pomáhám v oblasti, která je vám nejbližší.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: '16px' }}>
          {servicesData.map((s, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass glass-hover"
                style={{
                  borderRadius: '20px',
                  padding: 'clamp(28px, 3vw, 40px)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '18px',
                }}>
                  {s.icon}
                </div>
                <span style={{
                  fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.30)',
                }}>
                  {s.duration}
                </span>
                <h3 style={{
                  margin: '14px 0 10px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(18px, 1.5vw, 22px)',
                  color: '#fff',
                  letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(13px, 1vw, 15px)',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.50)',
                  flex: 1,
                }}>
                  {s.desc}
                </p>
                <motion.a
                  href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center"
                  style={{
                    marginTop: '20px',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    gap: '6px',
                  }}
                >
                  Objednat se
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}