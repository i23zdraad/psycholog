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
  { service: 'Individuální poradenství, terapie', format: '60 minut', duration: '60 minut', price: '1 200 Kč', popular: false },
  { service: 'Párové poradenství, terapie', format: '90 minut', duration: '90 minut', price: '1 800 Kč', popular: true },
  { service: 'Práce s rodinou', format: '120 minut', duration: '120 minut', price: '2 400 Kč', popular: false },
  { service: 'Ikigai koučing', format: 'tříměsíční program', duration: 'tříměsíční program', price: 'info na schůzce', popular: false },
  { service: 'Lektorování', format: 'dle dohody', duration: 'dle dohody', price: 'individuálně', popular: false },
]

export default function Pricing() {
  return (
    <section id="cenik" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #050508 0%, #0d1320 50%, #050508 100%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
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
            maxWidth: '600px',
          }}>
            Poskytované služby a jejich ceny
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{
            marginTop: '14px',
            fontSize: 'clamp(14px, 1.1vw, 16px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '520px',
          }}>
            Platba předem, nejpozději v den konzultace. Číslo účtu zasílám do zprávy.
          </p>
        </FadeIn>

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {pricingData.map((item, i) => (
            <FadeIn key={item.service} delay={0.2 + i * 0.08}>
              <motion.div
                whileHover={{ background: 'rgba(74,144,164,0.04)', borderColor: 'rgba(74,144,164,0.15)' }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '20px 24px',
                  borderRadius: '16px',
                  background: item.popular ? 'rgba(74,144,164,0.05)' : 'rgba(255,255,255,0.015)',
                  border: item.popular ? '1px solid rgba(74,144,164,0.20)' : '1px solid rgba(255,255,255,0.06)',
                  position: 'relative',
                }}
              >
                {item.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '20px',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: 'rgba(74,144,164,0.25)',
                    border: '1px solid rgba(74,144,164,0.40)',
                  }}>
                    Nejoblíbenější
                  </span>
                )}
                <div style={{ flex: '1 1 200px' }}>
                  <p style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#fff',
                  }}>
                    {item.service}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: '2px',
                  }}>
                    {item.format}
                  </p>
                </div>
                <p style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: item.popular ? 'rgba(74,144,164,0.9)' : 'rgba(74,144,164,0.8)',
                  whiteSpace: 'nowrap',
                }}>
                  {item.price}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div style={{
            marginTop: '32px',
            padding: '24px',
            borderRadius: '16px',
            background: 'rgba(74,144,164,0.04)',
            border: '1px solid rgba(74,144,164,0.12)',
          }}>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
            }}>
              <strong style={{ color: 'rgba(74,144,164,0.85)' }}>Storno podmínky:</strong>{' '}
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>
                Termín sezení lze měnit oboustranně nejpozději 24 hodin předem. Při zrušení v kratší době platí storno poplatek 500 Kč kompenzovaný druhé straně.
              </span>
            </p>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              marginTop: '14px',
            }}>
              <strong style={{ color: 'rgba(74,144,164,0.85)' }}>Zprávy z konzultací neposkytuji.</strong>{' '}
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>
                Při vyžádání soudem uvádím pouze počet setkání, jejich přibližný termín a velmi obecně probíraná témata.
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
