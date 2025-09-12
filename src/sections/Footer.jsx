import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/10 text-white py-10 px-6" id="footer">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Slogan */}
        <div>
          <h1 className="text-2xl font-bold uppercase">AYSULIX</h1>
          <p className="text-white/60 mt-2">Design & Freedom</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="uppercase font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#about" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="#cards" className="hover:text-orange-500">
                Cards
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-orange-500">
                Events
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-orange-500">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="uppercase font-semibold mb-3">Contact</h2>
          <p className="text-white/70">Email: info@Aysulix.com</p>
          <p className="text-white/70">Phone: +49 123 456789</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-orange-500">
              Facebook
            </a>
            <a href="#" className="hover:text-orange-500">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-500">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} AYSULIX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
