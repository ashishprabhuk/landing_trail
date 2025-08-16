/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import windyModel from "../assets/a_windy_day.glb?url";

// Props type for R3F objects
interface WindyModelProps {
  position?: [number, number, number];
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
}

// function WindyModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: WindyModelProps) {
//   const { scene } = useGLTF(windyModel);
//   const meshRef = useRef<THREE.Object3D>(null);

//   // Clip half of the model
//   const clipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0); // Vertical cut

//   useFrame((_state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += delta * 0.1;
//     }
//   });

//   // Apply clipping
//   scene.traverse((child: any) => {
//     if (child.isMesh) {
//       child.material.clippingPlanes = [clipPlane];
//       child.material.clipShadows = true;
//     }
//   });

//   return (
//     <primitive
//       ref={meshRef}
//       object={scene}
//       position={position}
//       scale={scale}
//       rotation={rotation}
//     />
//   );
// }


function WindyModel({ position = [1, 0, 0]}: WindyModelProps) {
    const { scene } = useGLTF(windyModel);
    const meshRef = useRef<THREE.Object3D>(null);
    
    // Clip half of the model
    const clipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0); // Vertical cut
    
    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });
    console.log(position)
    
    // Apply clipping
    scene.traverse((child: any) => {
        if (child.isMesh) {
            child.material.clippingPlanes = [clipPlane];
            child.material.clipShadows = true;
        }
    });
    
    return <primitive ref={meshRef} object={scene} scale={1} position={[1, 0, 0]} />;
    // return <primitive ref={meshRef} object={scene} scale={1} position={posit} />;

}
  
  export default WindyModel;