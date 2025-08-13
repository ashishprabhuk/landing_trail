// src/components/Earth.tsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Path to your GLB file in src/assets
import modelPath from "../assets/globe.glb?url";

const Model: React.FC = () => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const Earth: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), 0); // transparent bg
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Earth;
