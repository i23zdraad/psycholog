import { motion } from 'framer-motion'
import { ArrowDown, Calendar, Phone } from 'lucide-react'

const BOOKING_URL = 'https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid='

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,5,12,0.60) 0%, rgba(5,5,12,0.25) 55%, rgba(5,5,12,0.15) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,12,0.40) 0%, transparent 30%, transparent 65%, rgba(5,5,12,0.55) 100%)' }} />
      <div style={{ position: 'absolute', top: '-10%', left: '5%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at 30% 30%, rgba(74,144,164,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Headline block */}
      <div
        className="absolute z-10"
        style={{
          left: 'clamp(20px, 6vw, 80px)',
          top: 'clamp(180px, 38vh, 420px)',
          maxWidth: '720px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: 'easeOut' }}
          style={{ marginBottom: '16px' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: 'clamp(10px, 1.1vw, 13px)',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            border: '1px solid rgba(255,255,255,0.18)',
            padding: '6px 16px',
            borderRadius: '999px',
            backdropFilter: 'blur(4px)',
          }}>
            psycholožka & psychoterapeutka
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.30, ease: 'easeOut' }}
          style={{ margin: 0, fontFamily: "'Hanken Grotesk', sans-serif", textShadow: '0 2px 34px rgba(0,0,0,0.5)' }}
        >
          <span style={{
            display: 'block',
            fontWeight: 450,
            fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#fff',
          }}>
            Michaela Zdráhalová
          </span>
          <span style={{
            display: 'block',
            fontWeight: 300,
            fontSize: 'clamp(1.3rem, 3vw, 2.4rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '8px',
          }}>
            Psycholožka a psychoterapeutka
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          style={{
            marginTop: '20px',
            fontSize: 'clamp(14px, 1.2vw, 17px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '480px',
            textShadow: '0 1px 12px rgba(0,0,0,0.5)',
          }}
        >
          Od roku 2009 pomáhám lidem nacházet cestu k sobě. 
          Individuální terapie, párové konzultace i práce s rodinou.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-wrap items-center"
          style={{ gap: '14px', marginTop: '36px' }}
        >
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2"
            style={{
              padding: '14px 32px',
              borderRadius: '999px',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              fontWeight: 500,
              textDecoration: 'none',
              color: '#fff',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.20)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            }}
          >
            <Calendar size={17} />
            Objednat se online
          </motion.a>
          <motion.a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2"
            style={{
              padding: '14px 32px',
              borderRadius: '999px',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              fontWeight: 400,
              textDecoration: 'none',
              color: '#fff',
              background: 'rgba(74,144,164,0.12)',
              border: '1px solid rgba(74,144,164,0.30)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            }}
          >
            <Phone size={17} />
            Napište mi
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="absolute left-0 right-0 z-10 hidden sm:flex"
        style={{
          bottom: 0,
          padding: '0 clamp(20px, 6vw, 80px) 28px',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '24px',
        }}
      >
        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap', textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
          Od roku 2009
        </span>
        <p className="hidden md:block" style={{ margin: 0, maxWidth: '400px', fontSize: '12.5px', lineHeight: 1.55, color: 'rgba(255,255,255,0.55)', textAlign: 'center', textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
          Individuální terapie, párové poradenství, práce s rodinou i koučink.
        </p>
        <motion.a
          href="#o-mne"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#o-mne')?.scrollIntoView({ behavior: 'smooth' })
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:flex flex-col items-center gap-1"
          style={{ textDecoration: 'none' }}
        >
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
          <ArrowDown size={16} color="rgba(255,255,255,0.4)" />
        </motion.a>
      </motion.div>
    </section>
  )
}
