import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

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

export default function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('Děkuji za zprávu. Ozvu se vám do týdne.')
    setTimeout(() => setFormStatus(''), 5000)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  return (
    <section id="kontakt" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', background: '#070707' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)' }}>
        <FadeIn>
          <span style={{
            fontSize: '12px', fontWeight: 400,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Kontakt
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
            Ráda vás uslyším
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: 'clamp(32px, 4vw, 56px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <FadeIn delay={0.15}>
              <div className="glass" style={{ borderRadius: '20px', padding: 'clamp(24px, 2.5vw, 32px)' }}>
                <h3 style={{
                  margin: '0 0 12px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#fff',
                }}>
                  Adresa pracovny
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.55)',
                  margin: 0,
                }}>
                  Nádražní 238/7, Vyškov<br />
                  budova Central, 3. patro, dveře č. 363
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass" style={{ borderRadius: '20px', padding: 'clamp(24px, 2.5vw, 32px)' }}>
                <h3 style={{
                  margin: '0 0 12px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#fff',
                }}>
                  Komunikuji přes
                </h3>
                <div className="flex flex-wrap" style={{ gap: '8px' }}>
                  {['Skype', 'WhatsApp', 'Google Meet', 'Telefon'].map((app) => (
                    <span key={app} style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.60)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '6px 14px',
                      borderRadius: '999px',
                    }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="glass" style={{ borderRadius: '20px', padding: 'clamp(24px, 2.5vw, 32px)' }}>
                <h3 style={{
                  margin: '0 0 12px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#fff',
                }}>
                  Rezervace
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.55)',
                  margin: '0 0 16px',
                }}>
                  Nejsnazší cesta k termínu je přes online rezervaci na ZnamyLekar.cz
                </p>
                <motion.a
                  href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center text-white"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.30)',
                  }}
                >
                  Objednat se online
                </motion.a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="glass" style={{
              borderRadius: '20px',
              padding: 'clamp(24px, 2.5vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <h3 style={{
                margin: '0 0 4px',
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '18px',
                color: '#fff',
              }}>
                Napište mi
              </h3>
              <input
                type="text"
                placeholder="Jméno"
                required
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              />
              <textarea
                placeholder="Zpráva"
                rows={5}
                required
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  alignSelf: 'flex-start',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#fff',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Odeslat zprávu
              </motion.button>
              {formStatus && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.60)',
                    margin: 0,
                  }}
                >
                  {formStatus}
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}