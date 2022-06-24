import { MeshDistortMaterial } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber"; 

export default function Octahedron(props) {
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})
  
    useFrame(() => {
        mesh.current.rotation.y += 0.01;
      });

    return (
      <mesh ref={mesh} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} rotation-z={Math.PI * 0.25}>
        <octahedronBufferGeometry attach="geometry" args={[2]}/>
        <meshToonMaterial attach="material" color="#5FA8D3"/>
      </mesh>
    )
  }