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
    <section id="o-mne" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#0a0a0a' }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-5" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: 'clamp(32px, 4vw, 60px)' }}>
          {/* Left: Bio text */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.15}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.60)',
                marginBottom: '20px',
              }}>
                Jmenuji se Michaela Zdráhalová a pocházím z líbezné Kroměříže, kde jsem téměř třicet let žila. Poté jsem se odstěhovala za prací do Brna a poblíž Brna setrvávám dosud. Ráda trávím čas s rodinou, v přírodě, s oblibou poslouchám zvuky lesa, čtu si, vychutnávám dobré jídlo nebo se věnuji různým druhům sportovních aktivit. Snažím se v životě dělat věci, které mě baví a dávají mi smysl. Poctivě. Pozorně. Raději méně, ale kvalitně.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.60)',
                marginBottom: '20px',
              }}>
                V Olomouci na Univerzitě Palackého jsem úspěšně absolvovala studium jednooborové psychologie, pedagogiky – sociální práce a speciální pedagogiky se zaměřením na etopedii a psychopedii. Současně od roku 2009 pracuji s lidmi.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.60)',
                marginBottom: '20px',
              }}>
                Dlouho jsem se věnovala adolescentům s výchovnými problémy, zejména individuální i skupinové práci, krizové intervenci, diagnostice adolescentů, ale také jejich rodinám v rámci mediací a rodinných terapií. V manželské a rodinné poradně jsem získala další zkušenosti s individuálními, ale i párovými konzultacemi, ať už v rámci poradenství, mediace nebo terapie a také s problematikou náhradní rodinné péče. V náhradní rodinné péči se pohybuji dosud, stejně tak stále pracuji s rodinami v konfliktu. V soukromé praxi pak nabízím individuální, párové konzultace, ale i práci s celou rodinou. Nejčastěji řešíme vztahy, sebedůvěru, vztah k sobě, náročné životní situace, ale i úzkosti, nejistoty.
              </p>
            </FadeIn>
          </div>

          {/* Right: Info card with logo */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.3}>
              <div className="glass" style={{
                borderRadius: '20px',
                padding: 'clamp(28px, 3vw, 40px)',
              }}>
                {/* Logo in card */}
                <div className="flex items-center gap-3" style={{ marginBottom: '28px' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6 4.1 A8 8 0 1 0 19.9 15.4 A6.2 6.2 0 1 1 15.6 4.1 Z" fill="#fff" opacity="0.9" />
                  </svg>
                  <span style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: '18px', fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#fff',
                  }}>
                    Michaela Zdráhalová
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#fff',
                  marginBottom: '20px',
                  letterSpacing: '-0.01em',
                }}>
                  Vzdělání a praxe
                </h3>
                <div className="flex flex-col" style={{ gap: '14px' }}>
                  {[
                    { text: 'Mgr. psychologie, Univerzita Palackého v Olomouci' },
                    { text: 'Pedagogika – sociální práce a speciální pedagogika' },
                    { text: 'Od roku 2009 praxe s lidmi' },
                    { text: 'Integrativní psychoterapie – 5letý výcvik' },
                    { text: 'Facilitativní, transformativní a rodinná mediace' },
                    { text: 'Ikigai koučovací kurz, 2024' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.35)',
                        marginTop: '8px', flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.6 }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* How I work */}
        <div style={{ marginTop: 'clamp(60px, 8vw, 100px)' }}>
          <FadeIn delay={0.1}>
            <h3 style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 450,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: '#fff',
              letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}>
              Jak pracuji?
            </h3>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p style={{
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.60)',
              marginBottom: '20px',
            }}>
              Má práce je výsledkem nejen studia, kurzů a psychoterapeutického výcviku, ale hlavně různorodých zkušeností a nespočetných hodin s klienty. Vždy se svůj přístup snažím přizpůsobit potřebám a přáním klienta. Důležité je, abychom si společně tzv. „sedli“, aby byly pro klienta konzultace přínosné, v něčem k zamyšlení nebo inspirativní, aby se cítil bezpečně a přijímán.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p style={{
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.60)',
              marginBottom: '20px',
            }}>
              Při dlouhodobé práci s klienty vycházím z pětiletého sebezkušenostního výcviku v integrativní psychoterapii, který ze své přirozenosti nabízí a kombinuje prvky a účinné kroky i z jiných směrů. Klienty se základními prvky seznamuji a přizpůsobujeme je dle požadavků a nastavení klienta.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p style={{
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.60)',
              marginBottom: '20px',
            }}>
              Vzdělávání a supervize patří k pravidelným součástem mého pracovního života. Jsou podle mě předpokladem profesionality a nezbytného rozhledu. Udržují také v patrnosti myšlenku, že nikdo nemáme patent na pravdu. Samozřejmostí mé práce jsou zásady respektu, přijetí, soukromí a bezpečí.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p style={{
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.60)',
            }}>
              V případě zájmu o bližší informace ke vzdělání, pracovním zkušenostem, absolvovaným kurzům a publikovaným textům ráda zodpovím osobně.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
