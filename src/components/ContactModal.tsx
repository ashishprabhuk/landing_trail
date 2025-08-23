import { useEffect, useState } from "react";
import "./ContactUs.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    projectOverview: "",
    deliveryDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm " >
      <div className="w-full h-full flex items-center justify-center p-2">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl w-full max-w-lg md:p-4 p-3 relative max-h-[85vh] custom-scroll">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-base md:text-lg hover:text-red-400"
          >
            ✕
          </button>

          <h3 className="text-lg md:text-2xl font-semibold mb-3 text-white text-center">
            Start Your Journey 🚀
          </h3>

          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              required
              className="w-full bg-transparent border border-white/20 p-2.5 md:p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full bg-transparent border border-white/20 p-2.5 md:p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number*"
              required
              className="w-full bg-transparent border border-white/20 p-2.5 md:p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full bg-transparent border border-white/20 p-2.5 md:p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
            />
            <textarea
              name="projectOverview"
              value={formData.projectOverview}
              onChange={handleChange}
              placeholder="Project Overview*"
              rows={3}
              required
              className="w-full bg-transparent border border-white/20 p-2.5 md:p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none text-sm"
            />
            <input
              type="text"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              placeholder="Target Delivery Date"
              className="w-full bg-transparent border border-white/20 p-2.5 md:p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
            />

            {/* Success/Error */}
            {submitStatus === "success" && (
              <div className="text-green-300 text-xs p-2 rounded-lg border border-green-400/20">
                ✅ Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-300 text-xs p-2 rounded-lg border border-red-400/20">
                ❌ Error sending message.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 rounded-lg font-semibold text-sm md:text-base text-white border border-white/20 bg-gradient-to-r from-blue-500/40 to-purple-500/40 hover:from-blue-500/60 hover:to-purple-500/60 transition-all"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
