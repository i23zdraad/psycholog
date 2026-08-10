import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Award, HeartHandshake, Target, Calendar } from 'lucide-react'

const BOOKING_URL = 'https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid='

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

const reasons = [
  {
    icon: Clock,
    title: '15+ let praxe',
    desc: 'Od roku 2009 pracuji s lidmi. Mám za sebou tisíce hodin s klienty, krizových intervencí i rodinných terapií.',
  },
  {
    icon: Award,
    title: 'Odborné vzdělání',
    desc: 'Magisterské studium psychologie, pětiletý výcvik v integrativní psychoterapii a kontinuální supervize.',
  },
  {
    icon: HeartHandshake,
    title: 'Lidský přístup',
    desc: 'Jsem přímá, ale citlivá. Klienti oceňují mou upřímnost, empatii a schopnost naslouchat bez soudů.',
  },
  {
    icon: Target,
    title: 'Individuální přístup',
    desc: 'Nepoužívám univerzální šablony. Terapii vždy přizpůsobuji vaší osobnosti, potřebám a tempu.',
  },
]

export default function WhyMe() {
  return (
    <section id="proc-ke-mne" style={{ position: 'relative', padding: 'clamp(60px, 8vw, 100px) 0', background: '#000' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'clamp(32px, 4vw, 64px)', alignItems: 'center' }}>
          <div>
            <FadeIn>
              <span style={{
                fontSize: '12px', fontWeight: 400,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
              }}>
                Proč ke mně?
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
                maxWidth: '500px',
              }}>
                Hledáte někoho, kdo vás opravdu vyslyší?
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p style={{
                marginTop: '20px',
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '480px',
              }}>
                Není mi jedno, jak se druzí mají. Je pro mě důležité, aby byla sezení pro klienty 
                užitečná, inspirativní a aby se cítili bezpečně a přijímáni. Společně hledáme 
                způsoby, nikoli důvody.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center text-white"
                style={{
                  marginTop: '32px',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.30)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  gap: '8px',
                }}
              >
                <Calendar size={17} />
                Začněme společně
              </motion.a>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
            {reasons.map((r, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="glass glass-hover"
                  style={{
                    borderRadius: '20px',
                    padding: 'clamp(24px, 2.5vw, 32px)',
                    height: '100%',
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px',
                    background: 'linear-gradient(135deg, rgba(74,144,164,0.15), rgba(46,90,124,0.1))',
                    border: '1px solid rgba(74,144,164,0.15)',
                  }}>
                    <r.icon size={20} color="rgba(74,144,164,0.9)" />
                  </div>
                  <h3 style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '17px',
                    color: '#fff',
                    marginBottom: '8px',
                  }}>
                    {r.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.45)',
                  }}>
                    {r.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}