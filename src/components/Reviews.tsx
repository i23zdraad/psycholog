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
    rating: 5,
  },
  {
    text: 'Paní Zdráhalovou navštěvuji formou online sezení již dva roky a jsem velmi vděčná za její podporu. Spolupráce na dálku funguje skvěle a terapie mi výrazně pomáhají v oblasti osobního rozvoje i při zvládání strachů.',
    author: 'Monika',
    topic: 'Online konzultace',
    verified: true,
    rating: 5,
  },
  {
    text: 'Paní Mgr. Zdráhalová je odborník s lidskou tváří. V době, kdy se mi po smrti mého syna zhroutil celý svět, dovedla obětavě pomoct. Po terapii u ní jsem se vždy cítila lépe. Je to člověk na pravém místě. Vřele doporučuji.',
    author: 'Božka',
    topic: 'Individuální terapie',
    verified: true,
    rating: 5,
  },
  {
    text: 'Paní psycholožku mohu jedině doporučit. Je velmi milá, vstřícná a lidská. Její profesionální a empatický přístup mi nejednou pomohl.',
    author: 'HK',
    topic: 'Individuální konzultace',
    verified: true,
    rating: 5,
  },
  {
    text: 'Paní psycholožka je velmi milá, empatická, upřímná. Do péče mě přijala bezodkladně, pochopila akutní problém a poskytla profesionální pomoc. S její pomocí můj život dostal novou naději a spokojenost. Mohu ji vřele doporučit.',
    author: 'Hana',
    topic: 'Individuální konzultace',
    verified: true,
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center" style={{ gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="recenze" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#070707' }}>
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

        <FadeIn delay={0.15}>
          <p style={{
            marginTop: '14px',
            fontSize: 'clamp(14px, 1.1vw, 17px)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '560px',
          }}>
            Recenze od klientů, kteří absolvovali ověřená sezení. Vaše zpětná vazba je pro mě důležitá.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: '16px' }}>
          {reviewsData.map((r, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass glass-hover"
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
                  <div className="flex items-center gap-2" style={{ marginBottom: '14px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(74,144,164,0.4), rgba(46,90,124,0.4))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '14px', fontWeight: 600, color: '#fff',
                      flexShrink: 0,
                    }}>
                      {r.author.charAt(0)}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div className="flex items-center gap-2" style={{ flexWrap: 'wrap' }}>
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
                  <Stars count={r.rating} />
                  <p style={{
                    marginTop: '12px',
                    fontSize: 'clamp(13px, 1vw, 14.5px)',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.65)',
                    fontStyle: 'italic',
                    fontFamily: "'Hanken Grotesk', sans-serif",
                  }}>
                    „{r.text}"
                  </p>
                </div>
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
              Přidat recenzi na ZnamyLekar.cz
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}