import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Coloana 1 — Brand */}
        <div>
          <p className="font-bold text-3xl text-yellow-400 mb-3">CapeGo</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Your gateway to unforgettable Cape Town adventures. We craft authentic experiences that connect you with the beauty and culture of the Mother City.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200">📘</a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200">📸</a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200">🐦</a>
          </div>
        </div>

        {/* Coloana 2 — Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/tours", label: "Tours" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coloana 3 — Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>12 Bree Street, Cape Town, 8001</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📞</span>
              <a href="tel:+27215550123" className="hover:text-white transition-colors duration-200">+27 21 555 0123</a>
            </li>
            <li className="flex items-start gap-2">
              <span>✉️</span>
              <a href="mailto:hello@capego.co.za" className="hover:text-white transition-colors duration-200">hello@capego.co.za</a>
            </li>
            <li className="flex items-start gap-2">
              <span>🕐</span>
              <span>Mon–Fri 8am–6pm SAST</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-6 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
        <span>© 2026 CapeGo Travel. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;