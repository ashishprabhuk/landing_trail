import { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
// import WindyModel from "./WindyModel";
import "./ContactUs.css";
import ContactIllustration from "./ContactIllustration";

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
  const [submitStatus, setSubmitStatus] = useState(String);

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

  return (
    <section className="py-20 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-40 mb-16">
        <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Got questions? Let’s connect.
          </h2>
          <ContactIllustration />

          {/* Phones */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 shadow-lg">
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+916374255143"
                className="text-blue-400 mr-3 hover:underline"
              >
                +91 63742 55143
              </a>
              <a
                href="tel:+919345567780"
                className="text-blue-400 hover:underline"
              >
                +91 93455 67780
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 shadow-lg inline-block">
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:business@andrometa.in"
              className="text-blue-400 hover:underline"
            >
              business@andrometa.in
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-1 items-stretch">
        {/* Left - Contact Form */}
        <div className="max-w-3xl w-full mx-auto px-4 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-6 rounded-3xl border"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              backdropFilter: "blur(10px)",
            }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold">
                Start Your Journey
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mt-2">
                We’re ready to bring your ideas to life. Start your digital
                transformation journey with Andrometa today. Tell us what you
                need, and we’ll get in touch.
              </p>
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              required
              className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Include country code)*"
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
              name="projectOverview"
              value={formData.projectOverview}
              onChange={handleChange}
              placeholder="Project Overview* (Briefly describe your needs or challenges)"
              rows={4}
              required
              className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
            />
            <input
              type="text"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              placeholder="Target Delivery Date (dd/mm/yyyy)"
              className="w-full bg-transparent border border-white/20 p-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />{" "}
            {submitStatus === "success" && (
              <div className="text-green-300 text-sm p-3 rounded-xl border border-green-400/20">
                {" "}
                ✅ Message sent successfully!{" "}
              </div>
            )}{" "}
            {submitStatus === "error" && (
              <div className="text-red-300 text-sm p-3 rounded-xl border border-red-400/20">
                {" "}
                ❌ Error sending message.{" "}
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
              {" "}
              {isSubmitting ? "Sending..." : "Submit"}{" "}
            </button>
          </form>
        </div>

      
      </div>
    </section>
  );
}
