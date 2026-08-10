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
  { service: 'Individuální konzultace / terapie', format: 'online / osobně', duration: '60 minut', price: '1 200 Kč', popular: false },
  { service: 'Párové poradenství / terapie', format: 'online / osobně', duration: '90 minut', price: '1 800 Kč', popular: true },
  { service: 'Rodinná konzultace / terapie', format: 'pouze osobně', duration: '120 minut', price: '2 400 Kč', popular: false },
  { service: 'Ikigai koučing', format: 'online / osobně', duration: 'tříměsíční program', price: 'info na schůzce', popular: false },
  { service: 'Lektorování', format: 'osobně / online', duration: 'dle dohody', price: 'individuálně', popular: false },
]

export default function Pricing() {
  return (
    <section id="cenik" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
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

        <div style={{ marginTop: 'clamp(40px, 5vw, 60px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {pricingData.map((item, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.005, background: 'rgba(255,255,255,0.025)' }}
                transition={{ duration: 0.25 }}
                className="glass"
                style={{
                  borderRadius: '16px',
                  padding: 'clamp(20px, 2.5vw, 28px) clamp(24px, 3vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: item.popular ? '1px solid rgba(255,255,255,0.15)' : undefined,
                }}
              >
                {item.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                  }}>
                    Nejčastější
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between" style={{ gap: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      margin: 0,
                      fontFamily: "'Hanken Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: 'clamp(16px, 1.4vw, 20px)',
                      color: '#fff',
                      letterSpacing: '-0.01em',
                    }}>
                      {item.service}
                    </h3>
                    <p style={{
                      margin: '6px 0 0',
                      fontSize: 'clamp(13px, 1vw, 14px)',
                      color: 'rgba(255,255,255,0.40)',
                    }}>
                      {item.format} · {item.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-4" style={{ flexShrink: 0 }}>
                    <span style={{
                      fontFamily: "'Hanken Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: 'clamp(18px, 1.6vw, 24px)',
                      color: '#fff',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.price}
                    </span>
                    <motion.a
                      href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.12)' }}
                      whileTap={{ scale: 0.96 }}
                      className="hidden sm:inline-flex items-center text-white"
                      style={{
                        padding: '8px 18px',
                        borderRadius: '999px',
                        fontSize: '13px',
                        fontWeight: 400,
                        textDecoration: 'none',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.20)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Objednat
                    </motion.a>
                  </div>
                </div>
                <a
                  href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden inline-flex items-center justify-center text-white"
                  style={{
                    marginTop: '4px',
                    padding: '10px 20px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.20)',
                  }}
                >
                  Objednat se
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.35)',
            }}>
              <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Storno podmínky:</strong> Termín sezení lze měnit oboustranně nejpozději 24 hodin předem. Při zrušení v kratší době platí storno poplatek 500 Kč.
            </p>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.35)',
            }}>
              <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Zprávy z konzultací neposkytuji.</strong> Při vyžádání soudem uvádím pouze počet setkání, jejich přibližný termín a velmi obecně probíraná témata.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}