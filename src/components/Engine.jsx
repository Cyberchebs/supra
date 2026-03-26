import { Inline6 } from '../../3dcomponents/Inline_6_engine'

const Engine = () => {
  return (
   <>
      <ambientLight intensity={5} />
      <mesh position={[0, 0, 0]}>
        <Inline6 />
      </mesh>
    </>
   
  )
}

export default Engine