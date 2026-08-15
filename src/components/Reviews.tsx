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
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="rgba(74,144,164,0.7)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: typeof reviewsData[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: '380px',
        padding: '28px',
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div className="flex items-center justify-between">
        <Stars count={review.rating} />
        {review.verified && (
          <span style={{
            fontSize: '11px',
            color: 'rgba(74,144,164,0.7)',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}>
            ✓ ověřeno
          </span>
        )}
      </div>
      <p style={{
        fontSize: '14.5px',
        lineHeight: 1.65,
        color: 'rgba(255,255,255,0.75)',
        fontStyle: 'italic',
      }}>
        "{review.text}"
      </p>
      <div style={{ marginTop: 'auto' }}>
        <p style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.9)',
        }}>
          {review.author}
        </p>
        <p style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.4)',
          marginTop: '2px',
        }}>
          {review.topic}
        </p>
      </div>
    </div>
  )
}

export default function Reviews() {
  const duplicated = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData]

  return (
    <section id="recenze" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #050508 0%, #0a0f1a 50%, #050508 100%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(74,144,164,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(74,144,164,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
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
              Co o mně říkají klienti
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
              Více než 33 klientů mi dalo svou důvěru. Zde jsou jejich zkušenosti.
            </p>
          </FadeIn>
        </div>

        {/* Motion poster - 1 řada nekonečného marquee doleva */}
        <div style={{ marginTop: '48px', position: 'relative' }}>
          {/* Fade edges */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to right, #050508, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to left, #050508, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />

          <motion.div
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
            }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 130,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicated.map((review, i) => (
              <ReviewCard key={`${review.author}-${i}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
