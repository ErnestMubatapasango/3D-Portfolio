import React from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  
  //usegltf - allows us to access the model in react
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    //3D models make use of a mesh tag
    //primitive is a component that takes the model we want to display
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.70}  
        position={isMobile ? [0,-2.5, -2.2] : [0,-4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
//fov = field of view {how wide the scene is going to be}
//camera position - represents the x,y, z values of the camera
//suspense - allows us to add a loader whilst the model is still loading 
//Orbit controls - allow us to move the component left and right
//max and min polar angles - allow the model to be rotated to a certain angle and not 360 deg
 export const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    function handleMediaQueryChange(event){
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return() => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position :[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
      >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI /2} 
          minPolarAngle={Math.PI /2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default Computers;
