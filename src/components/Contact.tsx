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
    <section id="kontakt" style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #050508 0%, #0a0f1a 50%, #050508 100%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
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

        <div className="grid md:grid-cols-2" style={{ gap: 'clamp(40px, 5vw, 80px)', marginTop: '48px' }}>
          {/* Left: Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <FadeIn delay={0.2}>
              <div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Email
                </p>
                <a href="mailto:info@michaelazdrahalova.cz" style={{
                  fontSize: '16px',
                  color: '#fff',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(74,144,164,0.3)',
                  paddingBottom: '2px',
                }}>
                  info@michaelazdrahalova.cz
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Telefon
                </p>
                <a href="tel:+420777123456" style={{
                  fontSize: '16px',
                  color: '#fff',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(74,144,164,0.3)',
                  paddingBottom: '2px',
                }}>
                  +420 777 123 456
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Online objednávka
                </p>
                <motion.a
                  href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: '#fff',
                    background: 'rgba(74,144,164,0.12)',
                    border: '1px solid rgba(74,144,164,0.30)',
                  }}
                >
                  Objednat se online
                </motion.a>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(74,144,164,0.03)',
                border: '1px solid rgba(74,144,164,0.08)',
              }}>
                <p style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.4)',
                }}>
                  Pokud jste ve stavu ohrožení sebe nebo jiných osob, prosíme, neprodleně kontaktujte <strong style={{ color: 'rgba(255,255,255,0.6)' }}>První linku psychické pomoci</strong> (telefonicky: <a href="tel:116123" style={{ color: 'rgba(74,144,164,0.7)', textDecoration: 'none' }}>116 123</a>).
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <input
                  type="text"
                  placeholder="Jméno"
                  required
                  style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(74,144,164,0.3)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(74,144,164,0.3)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <textarea
                  placeholder="Vaše zpráva..."
                  required
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(74,144,164,0.3)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 32px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#fff',
                  background: 'rgba(74,144,164,0.12)',
                  border: '1px solid rgba(74,144,164,0.30)',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
              >
                Odeslat zprávu
              </motion.button>
              {formStatus && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(74,144,164,0.8)',
                    marginTop: '8px',
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
