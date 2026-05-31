import { useState } from "react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-2xl font-bold text-purple-500">
      Ritesh Jaiswal
    </h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-8 text-white">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#reviews">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    {/* Hire Me Button */}
    <a href="#fiverr" className="hidden md:block">
      <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg">
        Hire Me
      </button>
    </a>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-[#0b1020] border-t border-purple-500/20">

      <a
        href="#home"
        className="block px-6 py-4"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>

      <a
        href="#services"
        className="block px-6 py-4"
        onClick={() => setMenuOpen(false)}
      >
        Services
      </a>

      <a
        href="#portfolio"
        className="block px-6 py-4"
        onClick={() => setMenuOpen(false)}
      >
        Portfolio
      </a>

      <a
        href="#reviews"
        className="block px-6 py-4"
        onClick={() => setMenuOpen(false)}
      >
        Reviews
      </a>

      <a
        href="#contact"
        className="block px-6 py-4"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

    </div>
  )}
</nav>


);
}

export default Navbar;
