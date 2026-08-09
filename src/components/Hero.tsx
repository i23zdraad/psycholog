import { motion } from 'framer-motion'

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
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.20) 55%, rgba(0,0,0,0.10) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.35) 100%)' }} />
      <div style={{ position: 'absolute', top: '-10%', left: '5%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at 30% 30%, rgba(74,144,164,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

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
            Registrovaná psycholožka & psychoterapeutka
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
            Psycholog, psychoterapeut
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-center"
          style={{ gap: '16px', marginTop: '32px' }}
        >
          <motion.a
            href="https://www.znamylekar.cz/profil/michaela-zdrahalova?utm_source=widget-clinic-&utm_medium=link&widget=1&fid="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.12)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center text-white"
            style={{
              padding: '13px 28px',
              borderRadius: '999px',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              fontWeight: 400,
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          >
            Objednat se
          </motion.a>
          <a
            href="#cenik"
            className="text-white/80 hover:text-white transition-colors"
            style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', fontWeight: 400, textDecoration: 'none' }}
          >
            Ceník
          </a>
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
          Vyškov & online
        </span>
        <p className="hidden md:block" style={{ margin: 0, maxWidth: '400px', fontSize: '12.5px', lineHeight: 1.55, color: 'rgba(255,255,255,0.55)', textAlign: 'center', textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
          Individuální terapie, párové poradenství, práce s rodinou i koučink. Osobně ve Vyškově nebo online.
        </p>
        <span className="hidden lg:block" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap', textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
          [Posuňte dolů]
        </span>
      </motion.div>
    </section>
  )
}
