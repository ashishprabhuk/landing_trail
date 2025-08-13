import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import blackholeModel from '../assets/globe.glb?url';

function GlobeModel() {
  const { scene } = useGLTF(blackholeModel);
  const meshRef = useRef<THREE.Object3D>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; // 0.5x speed rotation
    }
  });
  
  return <primitive ref={meshRef} object={scene} scale={1.5} />;
}

export default function Globe() {
  return (
    <section style={{ height: '100vh', background: 'linear-gradient(135deg, #e8f4fd 0%, #b8e6b8 50%, #ffd6d6 100%)', position: 'relative' }}>
      {/* 3D Canvas Background */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.6} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffb3b3" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#b3d9ff" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1.5} 
          color="#ffffb3"
          castShadow
        />
        
        {/* Stars Background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={3000} 
          factor={3} 
          saturation={0.3} 
          fade 
          speed={0.5}
        />
        
        <GlobeModel />
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset" />
      </Canvas>
    </section>
  );
}
