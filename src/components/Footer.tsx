// import footerVideo from "../assets/q-c3d7becf.webm"; // your video path

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Video */}
      {/* <video
        src={footerVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[120%] object-cover -top-1/4"
      /> */}

      {/* Overlay for darkening */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Footer Content */}
      <div className="relative bg-white/10 backdrop-blur-lg border-t border-white/20 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Sections */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm mb-12">
            {/* Contact Us */}
            <div>
              <h3 className="uppercase font-semibold mb-4 text-gray-200 tracking-wider">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>+91 63742 55143</li>
                <li>+91 93455 67780</li>
                <li>business@andrometa.in</li>
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h3 className="uppercase font-semibold mb-4 text-gray-200 tracking-wider">Careers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>careers@andrometa.in</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="uppercase font-semibold mb-4 text-gray-200 tracking-wider">Follow Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="uppercase font-semibold mb-4 text-gray-200 tracking-wider">Navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#journey" className="hover:text-white transition">Start Your Journey</a></li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-10">
            <button className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold hover:bg-white/30 transition">
              Start Your Journey Today
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 text-center text-gray-300 text-xs">
            Andrometa © Copyright 2025 | All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
