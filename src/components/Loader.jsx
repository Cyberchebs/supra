import { useProgress } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useScene } from '../context/Scenecontext'

const Loader = () => {
  const { progress } = useProgress()
  const { modelReady } = useScene()
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!modelReady) return

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const hasReloaded = sessionStorage.getItem('hasReloaded')

    if (isMobile && !hasReloaded) {
      // Mark it so we don't loop — reload only happens once per session
      sessionStorage.setItem('hasReloaded', 'true')
      // Small delay so the GLB is fully cached before reload
      setTimeout(() => window.location.reload(), 300)
      return
    }

    // Desktop or already reloaded — just fade out normally
    const el = overlayRef.current
    if (!el) return
    el.style.transition = 'opacity 0.8s ease'
    el.style.opacity = '0'
    setTimeout(() => { el.style.display = 'none' }, 800)
  }, [modelReady])

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
      <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(60px, 12vw, 100px)',
        color: 'white',
        letterSpacing: '0.08em',
        lineHeight: 1,
        margin: 0,
      }}>
        SUP<span style={{ color: '#dc2626' }}>RA</span>
      </h1>

      <div style={{
        width: 'clamp(200px, 40vw, 360px)',
        height: '3px',
        backgroundColor: '#27272a',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#dc2626',
          borderRadius: '2px',
          transition: 'width 0.3s ease',
        }} />
      </div>

      <p style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '14px',
        color: '#71717a',
        letterSpacing: '0.25em',
        margin: 0,
      }}>
        LOADING {Math.round(progress)}%
      </p>
    </div>
  )
}

export default Loader