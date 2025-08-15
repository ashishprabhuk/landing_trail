// import React, { useState } from "react";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('https://formsubmit.co/ajax/business@andrometa.in', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           message: formData.message
//         })
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       className="py-20 text-white min-h-screen"
//     >
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
//         {/* Contact Info */}
//         <div>
//           <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Got questions? Let's connect.
//           </h2>
//           <div className="space-y-3 text-lg">
//             <p className="text-gray-300 flex items-center gap-3">
//               <span className="text-2xl">📞</span> +91 63742 55143 / +91 93455 67780
//             </p>
//             <p className="text-gray-300 flex items-center gap-3">
//               <span className="text-2xl">📧</span> business@andrometa.in
//             </p>
//             <p className="text-gray-300 flex items-center gap-3">
//               <span className="text-2xl">📍</span> Chennai, Tamil Nadu, India
//             </p>
//           </div>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="p-8 space-y-6 rounded-3xl border"
//           style={{
//             border: "1px solid rgba(255,255,255,0.2)",
//               background:
//                 "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
//               color: "#ffffff",
//               fontSize: "14px",
//               fontWeight: "600",
//               cursor: "pointer",
//               transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
//               backdropFilter: "blur(10px)",
//               WebkitBackdropFilter: "blur(10px)",
//               boxShadow:
//                 "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",

//           }}
//         >
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name*"
//             required
//             className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email*"
//             required
//             className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message*"
//             rows="5"
//             required
//             className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
//           />

//           {/* Status Messages */}
//           {submitStatus === 'success' && (
//             <div
//               className="text-green-300 text-sm p-3 rounded-xl border border-green-400/20"
//               style={{
//                 background: "rgba(34, 197, 94, 0.1)",
//                 backdropFilter: "blur(10px)"
//               }}
//             >
//               ✅ Message sent successfully! We'll get back to you soon.
//             </div>
//           )}
//           {submitStatus === 'error' && (
//             <div
//               className="text-red-300 text-sm p-3 rounded-xl border border-red-400/20"
//               style={{
//                 background: "rgba(239, 68, 68, 0.1)",
//                 backdropFilter: "blur(10px)"
//               }}
//             >
//               ❌ Error sending message. Please try again.
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`px-8 py-4 rounded-2xl w-full font-semibold text-lg transition-all duration-300 transform ${
//               isSubmitting
//                 ? 'cursor-not-allowed opacity-50'
//                 : 'hover:scale-[1.02] active:scale-[0.98]'
//             }`}
//             style={{
//               border: "1px solid rgba(255,255,255,0.2)",
//               background:
//                 "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
//               color: "#ffffff",
//               fontSize: "14px",
//               fontWeight: "600",
//               cursor: "pointer",
//               transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
//               backdropFilter: "blur(10px)",
//               WebkitBackdropFilter: "blur(10px)",
//               boxShadow:
//                 "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",

//             }}
//           >
//             {isSubmitting ? 'Sending...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import windyModel from "../assets/a_windy_day.glb?url";

function WindyModel() {
  const { scene } = useGLTF(windyModel);
  const meshRef = useRef<THREE.Object3D>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={1} />;
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
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
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Got questions? Let's connect.
          </h2>
          <div className="space-y-3 text-lg mb-6">
            <p className="text-gray-300 flex items-center gap-3">
              <span className="text-2xl">📞</span> +91 63742 55143 / +91 93455
              67780
            </p>
            <p className="text-gray-300 flex items-center gap-3">
              <span className="text-2xl">📧</span> business@andrometa.in
            </p>
            <p className="text-gray-300 flex items-center gap-3">
              <span className="text-2xl">📍</span> Chennai, Tamil Nadu, India
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-6 rounded-3xl border"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              backdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*"
              rows="5"
              required
              className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
            />

            {submitStatus === "success" && (
              <div className="text-green-300 text-sm p-3 rounded-xl border border-green-400/20">
                ✅ Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-300 text-sm p-3 rounded-xl border border-red-400/20">
                ❌ Error sending message.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 rounded-2xl w-full font-semibold text-lg transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              }}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right Side - 3D Scene */}
        <div className="w-full h-[500px] overflow-hidden">
          <Canvas camera={{ position: [1, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.3} color="#4a90e2" />
            <pointLight
              position={[10, 10, 10]}
              intensity={1.5}
              color="#191631"
            />
            <pointLight
              position={[-10, -10, -10]}
              intensity={1}
              color="#4ecdc4"
            />
            <spotLight
              position={[0, 10, 0]}
              angle={0.3}
              penumbra={1}
              intensity={2}
              color="#191631"
              castShadow
            />
            <WindyModel />
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              minDistance={2.5}
              maxDistance={3}
            />
            <Environment preset="night" />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
