import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import windyModel from "../assets/a_windy_day.glb?url";

function WindyModel() {
  const { scene } = useGLTF(windyModel);
  const meshRef = useRef<THREE.Object3D>(null);

  // Clip half of the model
  const clipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0); // Vertical cut

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  // Apply clipping
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.clippingPlanes = [clipPlane];
      child.material.clipShadows = true;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={1} position={[1, 0, 0]} />;
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    projectOverview: "",
    deliveryDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/business@andrometa.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          projectOverview: "",
          deliveryDate: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 text-white min-h-screen">
  <div className="grid md:grid-cols-2 items-stretch">
    
    {/* Left - Contact Form */}
    <div className="max-w-3xl w-full mx-auto px-4 md:px-8">
      {/* Your left content here (form, title, etc.) */}
    </div>

    {/* Right - 3D Half Model */}
    <div className="w-full h-[500px] md:h-auto">
      <Canvas
        camera={{ position: [1, 0, 5], fov: 50 }}
        gl={{ localClippingEnabled: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.3} color="#4a90e2" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#191631" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4ecdc4" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#191631"
          castShadow
        />
        <WindyModel position={[2, 0, 0]} />
        <OrbitControls enableZoom={true} enablePan={false} minDistance={2.5} maxDistance={3} />
        <Environment preset="night" />
      </Canvas>
    </div>

  </div>
</section>

  );
}
