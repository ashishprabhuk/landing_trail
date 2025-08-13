import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import blackholeModel from '../assets/blackhole.glb?url';

function BlackHoleModel() {
  const { scene } = useGLTF(blackholeModel);
  const meshRef = useRef<THREE.Object3D>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; // 0.5x speed rotation
    }
  });
  
  return <primitive ref={meshRef} object={scene} scale={1.5} />;
}

export default function Blackhole() {
  return (
    <section style={{ height: '100vh', background: 'black', position: 'relative' }}>
      {/* Hero Section */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
        pointerEvents: 'none'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '0 0 20px rgba(0, 102, 255, 0.8)',
          background: 'linear-gradient(45deg, #ffffff, #0066ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Welcome to Andrometa
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          lineHeight: '1.6',
          textShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}>
          Experience a new era of digital innovation, automation, and cosmic-scale efficiency. 
          Your journey to the stars begins here.
        </p>
                 <div style={{
           display: 'flex',
           gap: '1rem',
           flexWrap: 'wrap',
           justifyContent: 'center',
           pointerEvents: 'auto'
         }}>
          <button style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: 'transparent',
            color: '#0066ff',
            border: '2px solid #0066ff',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textShadow: '0 0 10px rgba(0, 102, 255, 0.5)'
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = '#0066ff';
            (e.target as HTMLButtonElement).style.color = 'white';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
            (e.target as HTMLButtonElement).style.color = '#0066ff';
          }}>
            Our Services
          </button>
          <button style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
          }}>
            Our Products
          </button>
        </div>
      </div>
      
      {/* 3D Canvas Background */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BlackHoleModel />
        <OrbitControls enableZoom={false} />
        <Environment preset="night" />
      </Canvas>
    </section>
  );
}
