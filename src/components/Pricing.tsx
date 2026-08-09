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

const pricingData = [
  { service: 'Individuální poradenství, terapie', format: 'online / osobně', duration: '60 minut', price: '1 200 Kč' },
  { service: 'Párové poradenství, terapie', format: 'online / osobně', duration: '90 minut', price: '1 800 Kč' },
  { service: 'Práce s rodinou', format: 'pouze osobně', duration: '120 minut', price: '2 400 Kč' },
  { service: 'Ikigai koučing', format: 'online / osobně', duration: 'tříměsíční program', price: 'info na schůzce' },
  { service: 'Lektorování', format: 'osobně / online', duration: 'dle dohody', price: 'individuálně' },
]

export default function Pricing() {
  return (
    <section id="cenik" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <FadeIn>
          <span style={{
            fontSize: '12px', fontWeight: 400,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Ceník
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
          }}>
            Transparentní ceny
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
            Platba předem, nejpozději v den konzultace. Číslo účtu zasílám do zprávy.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: 'clamp(40px, 5vw, 60px)' }}>
            {pricingData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                style={{
                  padding: 'clamp(18px, 2vw, 24px) 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  gap: '8px',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.015)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'transparent'
                }}
              >
                <div>
                  <div style={{
                    fontSize: 'clamp(15px, 1.2vw, 17px)',
                    fontWeight: 500,
                    color: '#fff',
                    letterSpacing: '-0.01em',
                  }}>
                    {item.service}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.35)',
                    marginTop: '3px',
                  }}>
                    {item.format} · {item.duration}
                  </div>
                </div>
                <div style={{
                  fontSize: 'clamp(15px, 1.2vw, 18px)',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.80)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="glass" style={{
            borderRadius: '16px',
            padding: 'clamp(20px, 2.5vw, 28px) clamp(20px, 2.5vw, 32px)',
            marginTop: '32px',
          }}>
            <div style={{
              fontSize: 'clamp(13px, 1vw, 14px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.50)',
            }}>
              <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Storno podmínky:</strong> Termín sezení lze měnit oboustranně nejpozději 24 hodin předem. Při zrušení v kratší době platí storno poplatek 500 Kč kompenzovaný druhé straně.
            </div>
            <div style={{
              fontSize: 'clamp(13px, 1vw, 14px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.50)',
              marginTop: '10px',
            }}>
              <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Zprávy z konzultací neposkytuji.</strong> Při vyžádání soudem uvádím pouze počet setkání, jejich přibližný termín a velmi obecně probíraná témata.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
