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

const reasons = [
  {
    num: '01',
    title: 'Odbornost a zkušenost',
    desc:'Více než 15 let praxe, tři vysokoškolská vzdělání a dlouhodobý psychoterapeutický výcvik. Registrace v České asociaci pro psychoterapii.',
  },
  {
    num: '02',
    title: 'Integrativní přístup',
    desc: 'Kombinuji různé terapeutické směry a přizpůsobuji je vašim individuálním potřebám.',
  },
  {
    num: '03',
    title: 'Bezpečné prostředí',
    desc: 'Respekt, důvěrnost a empatie. Bez hodnocení, bez nátlaku, jen otevřený dialog.',
  },
  {
    num: '04',
    title: 'Flexibilita',
    desc: 'Individuální, párové i rodinné sezení. Možnost osobního i online setkání.',
  },
]

export default function WhyMe() {
  return (
    <section id="proc-ke-mne" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #050508 0%, #0a0f1a 50%, #050508 100%)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
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
            Proč ke mně
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
            Důvody, proč si vybrat právě mě
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2" style={{ gap: '24px', marginTop: '48px' }}>
          {reasons.map((reason, i) => (
            <FadeIn key={reason.num} delay={0.15 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(74,144,164,0.20)' }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  height: '100%',
                }}
              >
                <span style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(74,144,164,0.5)',
                  letterSpacing: '0.1em',
                }}>
                  {reason.num}
                </span>
                <h3 style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#fff',
                  marginTop: '12px',
                }}>
                  {reason.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.45)',
                  marginTop: '10px',
                }}>
                  {reason.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
