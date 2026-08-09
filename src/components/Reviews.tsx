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

const reviewsData = [
  {
    text: 'K paní Zdráhalové docházím již několik let a neměnila bych! Je velmi empatická, milá a přímá. Vždy odcházím s pocitem neuvěřitelné úlevy. Doporučuji ji kudy chodím.',
    author: 'Tereza',
    topic: 'Online psychologické poradenství',
    verified: true,
  },
  {
    text: 'Paní Zdráhalovou navštěvuji formou online sezení již dva roky a jsem velmi vděčná za její podporu. Spolupráce na dálku funguje skvěle a terapie mi výrazně pomáhají v oblasti osobního rozvoje i při zvládání strachů. Její přístup je vždy plný pochopení.',
    author: 'Monika',
    topic: 'Online konzultace',
    verified: true,
  },
  {
    text: 'Paní Mgr. Zdráhalová je odborník s lidskou tváří. V době, kdy se mi po smrti mého syna zhroutil celý svět, dovedla obětavě pomoct. Po terapii u ní jsem se vždy cítila a cítím lépe. Je to člověk na pravém místě. Vřele doporučuji.',
    author: 'Božka',
    topic: 'Individuální terapie',
    verified: true,
  },
  {
    text: 'Paní psycholožku mohu jedině doporučit. Je velmi milá, vstřícná a lidská. Její profesionální a empatický přístup mi nejednou pomohl.',
    author: 'HK',
    topic: 'Individuální konzultace',
    verified: true,
  },
  {
    text: 'Paní psycholožka je velmi milá, empatická, upřímná. Do péče mě přijala bezodkladně, pochopila akutní problém a poskytla profesionální pomoc. Proto její služby využívám opakovaně. S její pomocí můj život dostal novou naději a spokojenost v podobě sebepoznávání a posílení sebedůvěry. Mohu ji vřele doporučit.',
    author: 'Hana',
    topic: 'Individuální konzultace',
    verified: true,
  },
]

export default function Reviews() {
  return (
    <section id="recenze" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <FadeIn>
          <span style={{
            fontSize: '12px', fontWeight: 400,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Recenze
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
            Co říkají klienti
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: '16px' }}>
          {reviewsData.map((r, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.08}>
              <div
                className="glass"
                style={{
                  borderRadius: '20px',
                  padding: 'clamp(24px, 2.5vw, 32px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div className="flex items-center gap-2" style={{ marginBottom: '16px' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(74,144,164,0.4), rgba(46,90,124,0.4))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '13px', fontWeight: 600, color: '#fff',
                    }}>
                      {r.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>{r.author}</span>
                        {r.verified && (
                          <span style={{
                            fontSize: '10px', fontWeight: 500,
                            color: 'rgba(255,255,255,0.45)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            padding: '2px 8px', borderRadius: '999px',
                          }}>
                            ověřeno
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>{r.topic}</span>
                    </div>
                  </div>
                  <p style={{
                    fontSize: 'clamp(13px, 1vw, 14.5px)',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.65)',
                    fontStyle: 'italic',
                    fontFamily: "'Hanken Grotesk', sans-serif",
                  }}>
                    „{r.text}"
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
