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
    <section id="o-mne" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#000' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: 'clamp(40px, 5vw, 64px)', alignItems: 'center' }}>
          {/* Left: Photo */}
          <FadeIn delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                maxHeight: '560px',
              }}
            >
              {/* Gradient border effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                padding: '1px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(74,144,164,0.3), rgba(255,255,255,0.05), rgba(46,90,124,0.2))',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
                zIndex: 2,
              }} />
              {/* Glow */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-20%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(74,144,164,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 1,
              }} />
              <img
                src="/ja.jpg"
                alt="Michaela Zdráhalová"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(20%) contrast(1.05)',
                }}
              />
              {/* Bottom gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 1,
              }} />
              {/* Name tag */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                zIndex: 3,
              }}>
                <span style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#fff',
                  textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                }}>
                  Mgr. Michaela Zdráhalová
                </span>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.60)',
                  margin: '4px 0 0',
                  textShadow: '0 1px 8px rgba(0,0,0,0.5)',
                }}>
                  Psycholožka & psychoterapeutka
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Right: Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <FadeIn delay={0.2}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
              }}>
                Jmenuji se Michaela Zdráhalová a pocházím z Kroměříže, kde jsem téměř třicet let žila. Poté jsem se odstěhovala za prací do Brna a poblíž Brna setrvávám dosud. Ráda trávím čas s rodinou, v přírodě, s oblibou poslouchám zvuky lesa, čtu si, vychutnávám dobré jídlo nebo se věnuji sportu.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
              }}>
                V Olomouci na Univerzitě Palackého jsem úspěšně absolvovala studium jednooborové psychologie, pedagogiky – sociální práce a speciální pedagogiky. Současně od roku 2009 pracuji s lidmi.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
              }}>
                Dlouho jsem se věnovala adolescentům s výchovnými problémy, krizové intervenci, diagnostice, mediacím a rodinným terapiím. V soukromé praxi nabízím individuální, párové konzultace i práci s celou rodinou. Nejčastěji řešíme vztahy, sebedůvěru, náročné životní situace, úzkosti a nejistoty.
              </p>
            </FadeIn>

            {/* Info cards */}
            <FadeIn delay={0.35}>
              <div className="glass" style={{
                borderRadius: '16px',
                padding: '24px',
                marginTop: '8px',
              }}>
                <h3 style={{
                  margin: '0 0 14px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#fff',
                }}>
                  Vzdělání a praxe
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Mgr. psychologie, Univerzita Palackého v Olomouci',
                    'Pedagogika – sociální práce a speciální pedagogika',
                    'Od roku 2009 praxe s lidmi',
                    'Integrativní psychoterapie – 5letý výcvik (750 h)',
                    'Facilitativní, transformativní a rodinná mediace',
                    'Ikigai koučovací kurz, 2024',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.5 }}>
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: 'rgba(74,144,164,0.6)',
                        marginTop: '6px', flexShrink: 0,
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.a
                href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center text-white"
                style={{
                  marginTop: '4px',
                  padding: '13px 28px',
                  borderRadius: '999px',
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  fontWeight: 400,
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
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