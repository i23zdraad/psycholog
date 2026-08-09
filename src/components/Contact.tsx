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

  return (
    <section id="kontakt" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0 60px', background: '#0a0a0a' }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ marginTop: 'clamp(40px, 5vw, 60px)', gap: 'clamp(32px, 4vw, 60px)' }}>
          {/* Left: Info */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col" style={{ gap: '28px' }}>
              <div>
                <div style={{
                  fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.30)',
                  marginBottom: '10px',
                }}>
                  Adresa pracovny
                </div>
                <div style={{
                  fontSize: 'clamp(14px, 1.1vw, 16px)',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.65)',
                }}>
                  Nádražní 238/7, Vyškov<br />
                  budova Central, 3. patro, dveře č. 363
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.30)',
                  marginBottom: '10px',
                }}>
                  E-mail
                </div>
                <a
                  href="mailto:zdrahalova.michaela@gmail.com"
                  className="text-white/65 hover:text-white/90 transition-colors"
                  style={{
                    fontSize: 'clamp(14px, 1.1vw, 16px)',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.12)',
                    paddingBottom: '2px',
                  }}
                >
                  zdrahalova.michaela@gmail.com
                </a>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.30)', marginTop: '6px' }}>
                  Na e-maily se snažím odpovědět do týdne.
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.30)',
                  marginBottom: '10px',
                }}>
                  Komunikuji přes
                </div>
                <div className="flex flex-wrap" style={{ gap: '10px' }}>
                  {['Skype', 'WhatsApp', 'Google Meet'].map((app) => (
                    <span key={app} style={{
                      fontSize: '13px', color: 'rgba(255,255,255,0.50)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '5px 12px', borderRadius: '999px',
                    }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.30)',
                  marginBottom: '10px',
                }}>
                  Rezervace
                </div>
                <motion.a
                  href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center text-white"
                  style={{
                    padding: '12px 26px', borderRadius: '999px',
                    fontSize: '14px', fontWeight: 400,
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  Objednat se online
                </motion.a>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.25}>
            <form
              onSubmit={handleSubmit}
              className="glass"
              style={{
                borderRadius: '20px',
                padding: 'clamp(28px, 3vw, 40px)',
              }}
            >
              <h3 style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(17px, 1.4vw, 20px)',
                color: '#fff',
                marginBottom: '24px',
                letterSpacing: '-0.01em',
              }}>
                Napište mi
              </h3>

              <div style={{ marginBottom: '18px' }}>
                <label style={{
                  display: 'block', fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '6px',
                }}>
                  Jméno
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{
                  display: 'block', fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '6px',
                }}>
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label style={{
                  display: 'block', fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '6px',
                }}>
                  Zpráva
                </label>
                <textarea
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white"
                style={{
                  padding: '13px',
                  borderRadius: '999px',
                  fontSize: '14px', fontWeight: 400,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Odeslat zprávu
              </motion.button>

              {formStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '14px',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.65)',
                    textAlign: 'center',
                  }}
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn delay={0.35}>
          <div style={{
            marginTop: 'clamp(40px, 5vw, 60px)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
            height: 'clamp(280px, 35vw, 380px)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.0!2d17.0!3d49.277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzM3LjIiTiAxN8KwMDAnMDAuMCJF!5e0!3m2!1scs!2scz!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) brightness(0.7)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa ordinace Michaela Zdráhalová"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
