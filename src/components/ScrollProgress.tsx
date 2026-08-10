import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height: '2px',
        scaleX,
        background: 'linear-gradient(90deg, rgba(74,144,164,0.9), rgba(100,180,200,0.9))',
      }}
    />
  )
}