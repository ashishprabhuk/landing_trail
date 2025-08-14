import React from "react";

export default function RequestQuote() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's turn your ideas into action</h2>
        <p className="text-gray-400 mb-8">
          Tell us what you need, and we'll get in touch within 24 hours.
        </p>

        {/* Multi-step form placeholder */}
        <form className="bg-gray-800 p-6 rounded-lg space-y-4">
          <input type="text" placeholder="Full Name*" className="w-full p-3 rounded-lg bg-gray-700" />
          <input type="email" placeholder="Email*" className="w-full p-3 rounded-lg bg-gray-700" />
          <textarea placeholder="Project Details" rows="4" className="w-full p-3 rounded-lg bg-gray-700"></textarea>
          <button className="px-6 py-3 bg-blue-500 rounded-lg w-full">Submit</button>
        </form>
      </div>
    </section>
  );
}
