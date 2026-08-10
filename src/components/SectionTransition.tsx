export default function SectionTransition({ from, to }: { from: string; to: string }) {
  return (
    <div
      style={{
        height: '80px',
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}