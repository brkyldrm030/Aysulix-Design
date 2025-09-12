import React from "react";
import { motion } from "framer-motion"; // ✅ Framer Motion importieren
import Heroimg from "../assets/Heroimg.jpg";

const Header = () => {
  return (
    <section id="header">
      <div className="relative">
        <img src={Heroimg} alt="Hero" className="w-full h-auto" />

        {/* Overlay-Text mit Scroll-Animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center ml-40 pl-5 sm:pl-10"
          initial={{ opacity: 0, y: 50 }} // Startzustand
          whileInView={{ opacity: 1, y: 0 }} // wenn sichtbar
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation
          viewport={{ once: true, amount: 0.2 }} // nur einmal triggern
        >
          <h1 className="text-white text-3xl sm:text-6xl lg:text-[100px] leading-snug bg-white/10 rounded-xl">
            Design
            <br />& Freedom
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
