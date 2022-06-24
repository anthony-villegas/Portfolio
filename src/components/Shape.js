import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"; 

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shape.gltf')
  

  useFrame(() => {
  
    group.current.rotation.x += 0.003;
    group.current.rotation.z += 0.003;
    group.current.rotation.z += 0.003;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0.615, -0.783, 0.0]}>
        <group rotation={[0, 0, 0]}>
          <group position={[0, 0, 0]} scale={0.3}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Material} ref={group} >
                
              <meshToonMaterial attach="material" color="#505168"/>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shape.gltf')
