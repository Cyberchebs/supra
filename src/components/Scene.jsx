import { Canvas, useThree } from '@react-three/fiber'
import Experience from './Experience'
import { useScene } from '../context/Scenecontext'
import { useEffect } from 'react'

  const CameraSetup = () => {
  const { camera } = useThree()
  const { cameraRef } = useScene()
  useEffect(() => { cameraRef.current = camera }, [camera])
  return null
}




const Scene = () => {
  return (
     <div  style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', }}>
        <Canvas  camera={{ position: [0, 1, 8], fov: 50 }}>
          <Experience />
           <CameraSetup/>
        </Canvas> 
      </div>
  )
}

export default Scene