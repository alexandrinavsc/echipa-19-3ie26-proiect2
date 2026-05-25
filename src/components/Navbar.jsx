import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-3xl font-bold text-white"
        >
          CapeGo
        </Link>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/tours">Tours</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Navbar;