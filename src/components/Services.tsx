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
    desc: 'Jedna na jednoho. Bezpečný prostor pro práci s vašimi tématy – úzkostí, stresem, ztrátou, životními změnami nebo touhou po osobním růstu.',
    duration: '60 minut',
  },
  {
    title: 'Párové poradenství',
    desc: 'Společně mapujeme dynamiku vašeho vztahu, komunikační vzorce a hledáme cestu k větší blízkosti a porozumění.',
    duration: '90 minut',
  },
  {
    title: 'Práce s rodinou',
    desc: 'Rodinná terapie pomáhá pochopit systémové vzorce, zlepšit komunikaci a nalézt nové způsoby společného fungování.',
    duration: '120 minut',
  },
  {
    title: 'Ikigai koučing',
    desc: 'Tříměsíční program zaměřený na nalezení vašeho smyslu, silných stránek a cesty k naplněnému životu.',
    duration: 'Program',
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
              <div
                className="glass glass-hover"
                style={{
                  borderRadius: '20px',
                  padding: 'clamp(28px, 3vw, 40px)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
              >
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
                }}>
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
