import React, { useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import Shape from './Shape';
import { Canvas, useFrame } from "@react-three/fiber";
import '../App.css'




const AnimatedShape = () => {
    return (
    <Canvas className="canvas" orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />

        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Shape />
      
    </Canvas>
    )           
    
}

export default AnimatedShape;