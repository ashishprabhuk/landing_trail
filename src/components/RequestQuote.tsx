import React, { useState } from "react";
import footerVideo from "../assets/q-c3d7becf.webm"; 

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/business@andrometa.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Quote Request from Website'
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-20 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's turn your ideas into action</h2>
        <p className="text-gray-400 mb-8">
          Tell us what you need, and we'll get in touch within 24 hours.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4" style={{border: "1px solid rgba(255,255,255,0.2)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
              }}>
          <input 
            type="text" 
            name="name"
            placeholder="Full Name*" 
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          
          <input 
            type="email" 
            name="email"
            placeholder="Email*" 
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          
          <textarea 
            name="message"
            placeholder="Project Details" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          
          <button 
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg w-full font-medium transition-colors ${
              isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            style={{border: "1px solid rgba(255,255,255,0.2)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
              }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {submitStatus === 'success' && (
            <div className="text-green-300 text-sm p-3 rounded-xl border border-green-400/20"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              backdropFilter: "blur(10px)"
            }}>
              <p>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-300 text-sm p-3 rounded-xl border border-red-400/20"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              backdropFilter: "blur(10px)"
            }}>
              <p>Something went wrong. Please try again or contact us directly.</p>
            </div>
          )}
        </div>
      </div>
      <video
    src={footerVideo}
    autoPlay
    loop
    muted
    playsInline
    className="left-1/2 top-1/2 w-full h-[400px] object-cover opacity-50"
  />
    </section>
  );
}