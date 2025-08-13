import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import dizzyingModel from '../assets/24_dizzying_space_travel_-_inktober2019.glb?url';

function DizzyingModel() {
  const { scene } = useGLTF(dizzyingModel);
  const meshRef = useRef();

  useEffect(() => {
    // Center & scale model
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = 5 / maxDim;
    scene.scale.setScalar(scaleFactor);
  }, [scene]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return <primitive ref={meshRef} object={scene} />;
}

export default function DizzyingSpaceTravel() {
  return (
    <section style={{ height: '100vh', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        {/* Ambient + key light for general visibility */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* HDR environment for realistic lighting */}
        <Environment preset="sunset" background={false} />

        {/* Model */}
        <DizzyingModel />

        {/* Controls */}
        <OrbitControls enableZoom enablePan enableRotate />
      </Canvas>
    </section>
  );
}
