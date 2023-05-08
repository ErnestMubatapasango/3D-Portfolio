import React, {Suspense} from 'react'
import {Canvas} from '@react-three/drei'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import {CanvasLoader} from '../Loader'


const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive 
      object={earth.scene}
      scale
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadow
      frameLoop = "demand"
      camera={{}}
      gl={{preserveDrawingBuffer: true}}    
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
          autoRotate
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas