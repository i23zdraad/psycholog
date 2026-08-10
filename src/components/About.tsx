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

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: 'clamp(32px, 4vw, 56px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <FadeIn delay={0.15}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
              }}>
                Jmenuji se Michaela Zdráhalová a pocházím z Kroměříže, kde jsem téměř třicet let žila. Poté jsem se odstěhovala za prací do Brna a poblíž Brna setrvávám dosud. Ráda trávím čas s rodinou, v přírodě, s oblibou poslouchám zvuky lesa, čtu si, vychutnávám dobré jídlo nebo se věnuji sportu.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
              }}>
                V Olomouci na Univerzitě Palackého jsem úspěšně absolvovala studium jednooborové psychologie, pedagogiky – sociální práce a speciální pedagogiky. Současně od roku 2009 pracuji s lidmi.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
              }}>
                Dlouho jsem se věnovala adolescentům s výchovnými problémy, krizové intervenci, diagnostice, mediacím a rodinným terapiím. V soukromé praxi nabízím individuální, párové konzultace i práci s celou rodinou. Nejčastěji řešíme vztahy, sebedůvěru, náročné životní situace, úzkosti a nejistoty.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <motion.a
                href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center text-white"
                style={{
                  marginTop: '8px',
                  padding: '13px 28px',
                  borderRadius: '999px',
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  fontWeight: 400,
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  alignSelf: 'flex-start',
                }}
              >
                Objednat se
              </motion.a>
            </FadeIn>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FadeIn delay={0.2}>
              <div className="glass" style={{
                borderRadius: '20px',
                padding: 'clamp(24px, 2.5vw, 32px)',
              }}>
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(74,144,164,0.25), rgba(46,90,124,0.25))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', fontWeight: 700, color: '#fff',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  marginBottom: '20px',
                }}>
                  MZ
                </div>
                <h3 style={{
                  margin: '0 0 16px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '18px',
                  color: '#fff',
                }}>
                  Vzdělání a praxe
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Mgr. psychologie, Univerzita Palackého v Olomouci',
                    'Pedagogika – sociální práce a speciální pedagogika',
                    'Od roku 2009 praxe s lidmi',
                    'Integrativní psychoterapie – 5letý výcvik (750 h)',
                    'Facilitativní, transformativní a rodinná mediace',
                    'Ikigai koučovací kurz, 2024',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.5 }}>
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.35)',
                        marginTop: '7px', flexShrink: 0,
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass" style={{
                borderRadius: '20px',
                padding: 'clamp(24px, 2.5vw, 32px)',
              }}>
                <h3 style={{
                  margin: '0 0 14px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '18px',
                  color: '#fff',
                }}>
                  Jak pracuji?
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.50)',
                  margin: 0,
                }}>
                  Má práce je výsledkem nejen studia, kurzů a psychoterapeutického výcviku, ale hlavně různorodých zkušeností a nespočetných hodin s klienty. Vždy se svůj přístup snažím přizpůsobit potřebám klienta. Důležité je, abychom si společně „sedli“, aby se cítil bezpečně a přijímán. Vzdělávání a supervize patří k pravidelným součástem mého pracovního života.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}