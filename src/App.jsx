import './index.css'
import Hero from './components/Hero'
import Scene from './components/Scene'
import Check from "./components/Check"
import SupraFAQ from './components/Faq'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SceneProvider } from './context/Scenecontext'
import Buy from './components/Buy'
import Loader from './components/Loader'
import { useGLTF } from '@react-three/drei'
import { useScene } from './context/Scenecontext'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

useGLTF.preload('/3dcomponents/Toyota_supra_dekztrax_34.glb')
useGLTF.preload('/3dcomponents/Inline_6_engine.glb')

// Separate component so it can access SceneContext
const ScrollLock = () => {
  const { modelReady } = useScene()

  useEffect(() => {
    // ✅ Lock scroll immediately on mount — user cannot scroll at all
    // while the model is loading. This guarantees scroll = 0 when
    // GSAP builds its timelines, so scrub never seeks to a wrong position.
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = '0'

    return () => {
      // Cleanup in case component unmounts unexpectedly
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [])

  useGSAP(() => {
    ScrollTrigger.refresh()
  })

  useEffect(() => {
    if (!modelReady) return

    // ✅ Model is ready — unlock scroll and ensure we're at the top.
    // Small delay so the unlock happens after GSAP timelines are built
    // in Experience.jsx (which also runs on modelReady).
    const timer = setTimeout(() => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      window.scrollTo(0, 0)
    }, 100)

    return () => clearTimeout(timer)
  }, [modelReady])

  return null
}

function App() {
  return (
    <SceneProvider>
      <Loader />
      <ScrollLock />

      <div className='rig' style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100dvh',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        <Scene />
      </div>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Check />
      </main>

      <div style={{ zIndex: 3, position: 'relative' }}>
        <SupraFAQ />
      </div>

      <div style={{ zIndex: 3, position: 'relative' }}>
        <Buy />
      </div>
    </SceneProvider>
  )
}

export default App