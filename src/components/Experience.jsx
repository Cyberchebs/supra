import { Supra } from '../../3dcomponents/Toyota_supra_dekztrax_34'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import { useRef, useEffect } from 'react'
import { useScene } from '../context/Scenecontext'
import { useThree } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { ScrollTrigger, SplitText } from 'gsap/all'



const Experience = () => {

  gsap.registerPlugin(ScrollTrigger)

  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { supraRef, setSupraRef, modelReady } = useScene()
  const { camera } = useThree()  
  const camProxy = useRef({ x: 0, y: 1, z: 8, fov: 50 })

  

  useFrame(() => {
    camera.position.set(camProxy.current.x, camProxy.current.y, camProxy.current.z)
    camera.fov = camProxy.current.fov
    camera.updateProjectionMatrix()
  })


  useEffect(() => {
    if (!window.visualViewport) return
    let rafId
    const onResize = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => ScrollTrigger.refresh())
    }
    window.visualViewport.addEventListener('resize', onResize)
    return () => {
      window.visualViewport.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafId)
    }
  }, [])



  useGSAP(() => {

    if (!modelReady || !supraRef.current) return


      window.scrollTo(0, 0)


       gsap.set(supraRef.current.position, {
      x: isMobile ? 0.2 : 0.4,
      y: -2.3,
      z: 0.4,
    })
    gsap.set(supraRef.current.rotation, {
      x: 0.00,
      y: -1.59,
      z: 0.18,
    })

    const heroSplit = new SplitText(".head", {
	 type: "chars, words",
	});
    
  const hasPlayed = sessionStorage.getItem('introPlayed')

  if (!hasPlayed) {
    gsap.from(supraRef.current.position, {
      x:  -10,
      duration: 1.8,
      ease: 'power2.out',
      onComplete: () => sessionStorage.setItem('introPlayed', 'true')
    })
  }
    gsap.from(heroSplit.chars, {
	 yPercent: 50,
	 duration: 1.8,
   opacity: 0,
	 ease: "expo.out",
	 stagger: 0.06,
	   });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#second',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        invalidateOnRefresh:true
      }
    })

    tl.to(supraRef.current.position, { x: isMobile? -3.2 : -1.6, y: 0.9, z: -2.7 })
      .to(supraRef.current.rotation, { x: 0.12, y: -2.41, z: -0.06 }, '<')
      .to(camProxy.current, { x: isMobile ? -2.0:  1, y: 3, z: 10.2, fov: 10 }, '<')
     
       const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#check',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      invalidateOnRefresh: true
    }
  })

  tl2.to(supraRef.current.position, { x:isMobile ? 4 : 5, y:1, z:0.4 })
    .to(supraRef.current.rotation, { x: 0, y:0.0, z:0 }, '<')
    .to(camProxy.current, { x: 3, y: 3, z: 10.2, fov: 20 }, '<')

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger:"#last",
        start: "top center",
        end:"bottom center",
        scrub:true,
        invalidateOnRefresh:true
      }
    })

    tl3.to(supraRef.current.position, {x:isMobile ? 4 : 5, y:1, z:-55 })
        .to(camProxy.current, { x: 3, y: 3, z: 10.2, fov: 80 }, '<')


  
    gsap.from('#second .title', {
    scrollTrigger: {
      trigger: '#second',
      start: 'top 30%',
      end: 'top 90%',
      toggleActions: 'play none none reverse',
     
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  })

   setTimeout(() => ScrollTrigger.refresh(), 300)


  }, [modelReady])


  return (
    <>
         <ambientLight intensity={3} />
       <mesh  position={[0,0,0]} >
          <Supra ref={setSupraRef} 
          position={[ isMobile ? 0.2 :  0.4, -2.3, 0.4]}
          rotation={[0.00, -1.59, 0.18]}
          scale={isMobile ? 0.5 :1.00} />
       </mesh>
    </>
  )
}

export default Experience