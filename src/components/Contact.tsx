import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

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
            Kontaktujte mě
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2" style={{ gap: 'clamp(40px, 5vw, 80px)', marginTop: '48px' }}>
          {/* Left: Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <FadeIn delay={0.2}>
              <div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Adresa pracovny
                </p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} style={{ color: 'rgba(74,144,164,0.7)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '16px', color: '#fff', lineHeight: 1.5 }}>
                      Nádražní 238/7, Vyškov 682 01
                    </p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.40)', marginTop: '2px' }}>
                      budova Central, 3. patro, pracovna č. 363
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
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
                  zdrahalova.michaela@gmail.com
                </a>
              </div>
            </FadeIn>


            <FadeIn delay={0.35}>
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

            <FadeIn delay={0.4}>
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

          {/* Right: Map with pin */}
          <FadeIn delay={0.3}>
            <div style={{
              position: 'relative',
              width: '100%',
              minHeight: '420px',
              height: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(74,144,164,0.08)',
            }}>
              <iframe
                src="https://maps.google.com/maps?q=N%C3%A1dra%C5%BEn%C3%AD+238%2F7%2C+682+01+Vy%C5%A1kov&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)', minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa pracovny"
              />
              {/* Overlay card with address */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                padding: '14px 18px',
                borderRadius: '12px',
                background: 'rgba(5,5,8,0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(74,144,164,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(74,144,164,0.12)',
                  border: '1px solid rgba(74,144,164,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={16} style={{ color: 'rgba(74,144,164,0.9)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#fff' }}>
                    Nádražní 238/7, Vyškov
                  </p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '1px' }}>
                    budova Central, 3. patro, pracovna 363
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}