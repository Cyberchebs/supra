import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect } from 'react'

const CameraDebug = () => {
  const { camera } = useThree()

  const { x, y, z, fov } = useControls('Camera', {
    x: { value: 0, min: -20, max: 20, step: 0.1 },
    y: { value: 1, min: -20, max: 20, step: 0.1 },
    z: { value: 8, min: -20, max: 20, step: 0.1 },
    fov: { value: 50, min: 10, max: 120, step: 1 },
  })

  useEffect(() => { camera.position.set(x, y, z) }, [x, y, z])
  useEffect(() => { camera.fov = fov; camera.updateProjectionMatrix() }, [fov])

  return null
}

export default CameraDebug