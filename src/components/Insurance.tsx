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

const insurers = [
  { name: 'VZP', full: 'Všeobecná zdravotní pojišťovna', logo: '/logos/vzp.png' },
  { name: 'OZP', full: 'Oborová zdravotní pojišťovna', logo: '/logos/ozp.webp' },
  { name: 'ZP 211', full: 'Zdravotní pojišťovna ministerstva vnitra', logo: '/logos/zp211.png' },
  { name: 'ZP 213', full: 'Revírní bratrská pokladna', logo: '/logos/213.png' },
]

export default function Insurance() {
  return (
    <section id="pojistovny" style={{ position: 'relative', padding: 'clamp(60px, 8vw, 100px) 0', background: '#070707' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <FadeIn>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: '12px', fontWeight: 400,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}>
              Spolupráce
            </span>
            <h2 style={{
              margin: '16px auto 0',
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 450,
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#fff',
              maxWidth: '500px',
            }}>
              Spolupracuji se zdravotními pojišťovnami
            </h2>
            <p style={{
              marginTop: '14px',
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.45)',
              maxWidth: '560px',
              margin: '14px auto 0',
            }}>
              Některé služby je možné čerpat příspěvkem od zdravotní pojišťovny. Více informací ráda poskytnu osobně.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ marginTop: 'clamp(36px, 4vw, 52px)', gap: '16px' }}>
          {insurers.map((ins, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass glass-hover flex flex-col items-center justify-center text-center"
                style={{
                  borderRadius: '16px',
                  padding: 'clamp(24px, 2.5vw, 32px)',
                  minHeight: '160px',
                  transition: 'all 0.3s ease',
                  gap: '12px',
                }}
              >
                {ins.logo ? (
                  <img
                    src={ins.logo}
                    alt={ins.name}
                    style={{
                      maxWidth: '100px',
                      maxHeight: '50px',
                      objectFit: 'contain',
                      filter: 'grayscale(40%) brightness(1.3) contrast(0.9)',
                      opacity: 0.85,
                    }}
                  />
                ) : (
                  <div style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '-0.01em',
                  }}>
                    ZP 213
                  </div>
                )}
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.35)',
                  lineHeight: 1.4,
                }}>
                  {ins.full}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <motion.a
              href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center text-white"
              style={{
                padding: '13px 28px',
                borderRadius: '999px',
                fontSize: 'clamp(13px, 1.1vw, 15px)',
                fontWeight: 400,
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.35)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
              }}
            >
              Objednat se
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}