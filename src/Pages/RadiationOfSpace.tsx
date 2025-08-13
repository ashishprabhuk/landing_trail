import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import radiationModel from '../assets/radiation_of_space.glb?url';

function RadiationModel() {
  const { scene } = useGLTF(radiationModel);
  const meshRef = useRef<THREE.Object3D>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });
  
  return <primitive ref={meshRef} object={scene} scale={1} />;
}

export default function RadiationOfSpace() {
  return (
    <section style={{ height: '100vh', background: 'black', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} color="#4a90e2" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff6b6b" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4ecdc4" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={2} 
          color="#f7b731"
          castShadow
        />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        
        <RadiationModel />
        <OrbitControls enableZoom={false} />
        <Environment preset="night" />
      </Canvas>
    </section>
  );
} 