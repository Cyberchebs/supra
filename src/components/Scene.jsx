import { Canvas, useThree } from '@react-three/fiber'
import Experience from './Experience'
import { useScene } from '../context/Scenecontext'
import { useEffect, Suspense } from 'react'

  const CameraSetup = () => {
  const { camera } = useThree()
  const { cameraRef } = useScene()
  useEffect(() => { cameraRef.current = camera }, [camera])
  return null
}




const Scene = () => {
  return (
     <div  style={{  width: '100%', height: '100dvh', }}>
        <Canvas  camera={{ position: [0, 1, 8], fov: 50 }}>
             <Suspense fallback={null}>
          <Experience />
              </Suspense>
           <CameraSetup/>
        </Canvas> 
      </div>
  )
}

export default Scene