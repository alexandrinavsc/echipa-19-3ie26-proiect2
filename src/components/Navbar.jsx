import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Inchide meniul automat cand se schimba ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Blocheaza scroll-ul pe body cand meniul mobil e deschis
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/tours", label: "Tours" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-3xl font-bold text-white">
          CapeGo
        </Link>

        {/* Meniu desktop */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`hover:text-gray-400 transition-colors ${
                  location.pathname === link.to ? "text-white" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buton hamburger - vizibil doar pe mobil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white w-10 h-10 flex items-center justify-center focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Meniu mobil - dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-t border-gray-800" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 bg-black">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-2 text-lg font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
