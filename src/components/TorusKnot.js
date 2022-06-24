import { MeshDistortMaterial } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber"; 
import { TorusKnotBufferGeometry } from 'three';

export default function TorusKnot(props) {
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})
  
    useFrame(() => {
        mesh.current.rotation.y += 0.01;
      });

    return (
      <mesh ref={mesh} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} rotation-z={Math.PI * 0.25}>
        <torusKnotBufferGeometry attach="geometry" args={[3, .7, 128, 30, 2, 3]}/>
        <meshToonMaterial attach="material" color="#505168"/>
      </mesh>
    )
  }