import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      animate={isInView || reduceMotion ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const workExperience = [
  { period: '2018 – dosud', place: 'Soukromá praxe', role: 'Psycholog' },
  { period: '2016–2020', place: 'Úřad pro mezinárodněprávní ochranu dětí Brno', role: 'Psycholog' },
  { period: '2016', place: 'Poradna pro rodinu Prostějov', role: 'Psycholog' },
  { period: '2015–2016', place: 'Diagnostický ústav pro mládež Brno', role: 'Psycholog' },
  { period: '2009–2015', place: 'Výchovný ústav Střílky', role: 'Pedagog, psycholog' },
]

const therapyTraining = [
  'Dlouhodobý výcvik v integrativní psychoterapii, 2015–2020 (750 hodin)',
]

const education = [
  'Pedagogika – sociální práce, Mgr., PedF UPOL',
  'Speciální pedagogika, Bc., PedF UPOL',
  'Psychologie, Mgr., FF UPOL',
]

const courses = [
  'Studium pedagogiky podle § 22 zák. č. 563/2004 Sb. – Krajská PPP a DVPP',
  'Aplikace komplexního přístupu při práci s rozvádějícími se rodiči a jejich dětmi – SPONDEA',
  'Education at the 15th IPSCAN European Conference in the Hague',
  'Úvod do telefonické krizové intervence – Remedium Praha',
  'Tanečně pohybová terapie v institucionální výchově – ICV UPOL',
  'Child inclusive mediation & Counselling – Children Beyond Dispute',
  'Training in advanced family mediation – The Institute for Study of Conflict Transformation',
  'Provázení obtížnými rozhovory – transformativní přístup, Brain Play',
  'Mediace – alternativní řešení interpersonálních konfliktů, ARK Consulting Bratislava',
]

/*
 * Responzivita je řešená přes <style> s media queries, protože inline styly
 * media queries neumí. Nezávisí to na Tailwindu.
 *
 *  mobil   < 640 px   … vše pod sebou
 *  tablet  ≥ 640 px   … výcvik + vzdělání vedle sebe, kurzy přes celou šířku ve 2 sloupcích
 *  PC      ≥ 1024 px  … vlevo výcvik a vzdělání pod sebou, vpravo kurzy
 */
const responsiveCss = `
  .exp-card {
    padding: clamp(20px, 3vw, 32px);
    border-radius: 16px;
    background: rgba(74,144,164,0.04);
    border: 1px solid rgba(74,144,164,0.10);
    height: 100%;
    box-sizing: border-box;
  }

  /* ---------- Časová osa ---------- */
  .exp-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .exp-row:first-child { padding-top: 0; }
  .exp-row:last-child { padding-bottom: 0; border-bottom: none; }

  .exp-period { font-size: 13px; font-weight: 500; color: rgba(74,144,164,0.85); }
  .exp-place  { font-size: 15px; font-weight: 500; color: #fff; line-height: 1.4; }
  .exp-role   { font-size: 14px; color: rgba(255,255,255,0.45); }

  /* ---------- Spodní mřížka ---------- */
  .exp-grid {
    display: grid;
    gap: 20px;
    margin-top: 20px;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "training"
      "education"
      "courses";
  }
  .exp-area-training  { grid-area: training; }
  .exp-area-education { grid-area: education; }
  .exp-area-courses   { grid-area: courses; }

  .exp-courses-list > * { break-inside: avoid; }

  /* ---------- Tablet ---------- */
  @media (min-width: 640px) {
    .exp-row {
      grid-template-columns: 140px minmax(0, 1fr);
      column-gap: 24px;
      row-gap: 2px;
      padding: 16px 0;
    }
    .exp-role { grid-column: 2; }

    .exp-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-areas:
        "training education"
        "courses  courses";
    }
    .exp-courses-list { column-count: 2; column-gap: 32px; }
  }

  /* ---------- PC ---------- */
  @media (min-width: 1024px) {
    .exp-row {
      grid-template-columns: 170px minmax(0, 1.5fr) minmax(0, 1fr);
      align-items: baseline;
      column-gap: 32px;
    }
    .exp-role { grid-column: auto; }
    .exp-place { font-size: 16px; }

    .exp-grid {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
      grid-template-areas:
        "training courses"
        "education courses";
    }
    .exp-courses-list { column-count: 1; }
  }
`

function CategoryCard({
  title,
  area,
  delay = 0,
  listClassName,
  children,
}: {
  title: string
  area: string
  delay?: number
  listClassName?: string
  children: React.ReactNode
}) {
  return (
    <FadeIn delay={delay} className={area} style={{ minWidth: 0 }}>
      <div className="exp-card">
        <h3
          style={{
            margin: '0 0 18px',
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 500,
            color: '#fff',
          }}
        >
          {title}
        </h3>
        <div className={listClassName}>{children}</div>
      </div>
    </FadeIn>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'rgba(74,144,164,0.6)',
          marginTop: '8px',
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>
        {children}
      </span>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="vzdelani-praxe"
      style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}
    >
      <style>{responsiveCss}</style>

      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #050508 0%, #0d1320 50%, #050508 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(74,144,164,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 44px)',
        }}
      >
        <FadeIn>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            Vzdělání a praxe
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            style={{
              margin: '16px 0 0',
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 450,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#fff',
              maxWidth: '700px',
            }}
          >
            Roky praxe, výcviku a dalšího vzdělávání
          </h2>
        </FadeIn>

        {/* Pracovní zkušenosti — časová osa */}
        <FadeIn delay={0.15} style={{ marginTop: '48px' }}>
          <div className="exp-card" style={{ height: 'auto' }}>
            <h3
              style={{
                margin: '0 0 20px',
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                color: '#fff',
              }}
            >
              Pracovní zkušenosti
            </h3>
            <div>
              {workExperience.map((item) => (
                <div className="exp-row" key={`${item.period}-${item.place}`}>
                  <span className="exp-period">{item.period}</span>
                  <span className="exp-place">{item.place}</span>
                  <span className="exp-role">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Terapeutický výcvik / Vzdělání / Kurzy */}
        <div className="exp-grid">
          <CategoryCard title="Terapeutický výcvik" area="exp-area-training" delay={0.2}>
            {therapyTraining.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </CategoryCard>

          <CategoryCard title="Vzdělání" area="exp-area-education" delay={0.25}>
            {education.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </CategoryCard>

          <CategoryCard
            title="Kurzy k diagnostickým metodám"
            area="exp-area-courses"
            delay={0.3}
            listClassName="exp-courses-list"
          >
            {courses.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </CategoryCard>
        </div>
      </div>
    </section>
  )
}