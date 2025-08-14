import React from "react";

export default function Footer() {
  return (
    <footer className="text-white py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p className="mb-6">Start your digital transformation journey with Andrometa today.</p>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg">Get Started Now</button>
        <button className="px-6 py-3 border border-white rounded-lg">Schedule a Call</button>
      </div>
    </footer>
  );
}
