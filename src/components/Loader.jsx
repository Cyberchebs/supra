import { useProgress } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const Loader = () => {
  const { progress, active } = useProgress()
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!active && progress === 100) {
      const el = overlayRef.current
      if (!el) return
      el.style.transition = 'opacity 0.8s ease'
      el.style.opacity = '0'
      setTimeout(() => {
        el.style.display = 'none'
      }, 800)
    }
  }, [active, progress])

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      {/* Car icon / branding */}
      <h1
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(60px, 12vw, 100px)',
          color: 'white',
          letterSpacing: '0.08em',
          lineHeight: 1,
          margin: 0,
        }}
      >
        SUP<span style={{ color: '#dc2626' }}>RA</span>
      </h1>

      {/* Progress bar track */}
      <div
        style={{
          width: 'clamp(200px, 40vw, 360px)',
          height: '3px',
          backgroundColor: '#27272a',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#dc2626',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Percentage */}
      <p
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '14px',
          color: '#71717a',
          letterSpacing: '0.25em',
          margin: 0,
        }}
      >
        LOADING {Math.round(progress)}%
      </p>
    </div>
  )
}

export default Loader