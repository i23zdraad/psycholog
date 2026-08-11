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
    desc: 'Osobní rozvoj, úzkosti, deprese, ztráty, životní změny. Bezpečný prostor pro vaše téma.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(74,144,164,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Párové konzultace',
    desc: 'Komunikace, konflikty, nevěra, rozvod, plánování rodiny. Společně hledáme cestu vpřed.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(74,144,164,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Práce s rodinou',
    desc: 'Rodinné konflikty, výchova, vztahy mezi generacemi. Celý systém jako jeden celek.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(74,144,164,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Krizová intervence',
    desc: 'Akutní situace, ztráta blízkého, trauma. Rychlá a profesionální pomoc v těžkých chvílích.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(74,144,164,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Ikigai koučink',
    desc: 'Tříměsíční program pro nalezení smyslu, radosti a rovnováhy ve vašem životě.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(74,144,164,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Lektorování',
    desc: 'Workshopy a školení pro firmy i instituce. Témata dle vašich potřeb a přání.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(74,144,164,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="sluzby" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #050508 0%, #0d1320 50%, #050508 100%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(74,144,164,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
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
            Nabízím široké spektrum služeb pro váš psychický komfort
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '20px', marginTop: '48px' }}>
          {servicesData.map((service, i) => (
            <FadeIn key={service.title} delay={0.15 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(74,144,164,0.20)' }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '28px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(74,144,164,0.08)',
                  border: '1px solid rgba(74,144,164,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#fff',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.45)',
                }}>
                  {service.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
