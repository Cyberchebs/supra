
import './index.css'
import Hero from './components/Hero'
import Scene from './components/Scene'
import Check from "./components/Check"
import SupraFAQ from './components/Faq'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SceneProvider } from './context/Scenecontext'
import Buy from './components/Buy'

function App() {

  gsap.registerPlugin(ScrollTrigger) 

  return (
    <SceneProvider>
      <div className='rig' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex:2}}>
        <Scene />
      </div>
      <main style={{ position: 'relative',zIndex:1 }}> 
        <Hero />
        <Check/>
      </main>
       <div style={{zIndex:3, position:'relative'}}>
          <SupraFAQ />
        </div> 
        <div style={{zIndex:3, position:"relative"}} >
           <Buy/>
        </div>
    </SceneProvider> 
  )
}

export default App
