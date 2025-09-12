import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons von lucide-react

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black">
      <div className="flex items-center justify-between text-white py-3 px-6">
        {/* Logo / Brand links */}
        <div className="font-bold text-xl">AYSULIX.</div>

        {/* Desktop-Navigation */}
        <nav className="hidden lg:flex gap-4 uppercase items-center">
          <a
            href="#card"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Designers
          </a>
          <a
            href="#card"
            className="bg-white/20 px-2 py-1 rounded-lg hover:text-orange-600"
          >
            Collabs
          </a>
          <a
            href="#advan"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Events
          </a>
          <a
            href="#quality"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Blog
          </a>
          <a
            href="#about"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Card
          </a>
          <a
            href="#footer"
            className="bg-orange-600 text-black font-semibold rounded-lg px-2 py-1 hover:text-white"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Burger-Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="flex flex-col gap-2 p-4 bg-black text-white lg:hidden uppercase">
          <a
            href="#card"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Designers
          </a>
          <a
            href="#about"
            className="bg-white/20 px-2 py-1 rounded-lg hover:text-orange-600"
          >
            Collabs
          </a>
          <a
            href="#advan"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Events
          </a>
          <a
            href="#quality"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Blog
          </a>
          <a
            href="#about"
            className="bg-white/20 py-1 px-2 rounded-lg hover:text-orange-600"
          >
            Card
          </a>
          <a
            href="#footer"
            className="bg-orange-600 text-black font-semibold rounded-lg px-2 py-1 hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      )}
    </section>
  );
};

export default Navbar;
