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

export default function About() {
  return (
    <section id="o-mne" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #050508 0%, #0a0f1a 50%, #050508 100%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '10%',
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
            O mně
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
            maxWidth: '700px',
          }}>
            Terapie je cesta. A já vám nabízím bezpečný prostor, kde může začít.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2" style={{ gap: 'clamp(40px, 5vw, 80px)', marginTop: '56px' }}>
          {/* Left: Photo */}
          <FadeIn delay={0.2}>
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                maxWidth: '420px',
                position: 'relative',
              }}>
                <img
                  src="/ja.jpg"
                  alt="Mgr. Michaela Zdráhalová"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Gradient border effect */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  border: '1px solid rgba(74,144,164,0.15)',
                  pointerEvents: 'none',
                }} />
                {/* Glow */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '20%',
                  width: '60%',
                  height: '40px',
                  background: 'radial-gradient(ellipse at center, rgba(74,144,164,0.15) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }} />
                {/* Bottom gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '120px',
                  background: 'linear-gradient(to top, rgba(5,5,8,0.8), transparent)',
                  pointerEvents: 'none',
                }} />
                {/* Name tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                }}>
                  <p style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#fff',
                    textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                  }}>
                    Mgr. Michaela Zdráhalová
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '2px',
                  }}>
                    Psycholožka & psychoterapeutka
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <FadeIn delay={0.25}>
              <p style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}>
                Jmenuji se Michaela Zdráhalová a pocházím z Kroměříže, kde jsem téměř třicet let žila. Poté jsem se odstěhovala za prací do Brna a poblíž Brna setrvávám dosud. Ráda trávím čas s rodinou, v přírodě, s oblibou poslouchám zvuky lesa, čtu si, vychutnávám dobré jídlo nebo se věnuji sportu.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}>
                V Olomouci na Univerzitě Palackého jsem úspěšně absolvovala studium jednooborové psychologie, pedagogiky – sociální práce a speciální pedagogiky. Současně od roku 2009 pracuji s lidmi.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}>
                Dlouho jsem se věnovala adolescentům s výchovnými problémy, krizové intervenci, diagnostice, mediacím a rodinným terapiím. V soukromé praxi nabízím individuální, párové konzultace i práci s celou rodinou. Nejčastěji řešíme vztahy, sebedůvěru, náročné životní situace, úzkosti a nejistoty.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.a
                href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center"
                style={{
                  marginTop: '12px',
                  padding: '14px 32px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: '#fff',
                  background: 'rgba(74,144,164,0.12)',
                  border: '1px solid rgba(74,144,164,0.30)',
                  alignSelf: 'flex-start',
                }}
              >
                Objednat se
              </motion.a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
