import React from "react";

export default function ContactUs() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Got questions? Let's connect.</h2>
          <p className="text-gray-400">📞 +91 63742 55143 / +91 93455 67780</p>
          <p className="text-gray-400">📧 business@andrometa.in</p>
          <p className="text-gray-400">📍 Chennai, Tamil Nadu, India</p>
        </div>

        {/* Form */}
        <form className="bg-white/10 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Name*"
            className="w-full bg-transparent border border-white/20 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full bg-transparent border border-white/20 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Message*"
            rows="5"
            className="w-full bg-transparent border border-white/20 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
