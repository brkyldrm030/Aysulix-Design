import React from "react";
import { motion } from "framer-motion"; // ✅ hinzufügen
import Fashionimg2 from "../assets/Fashionimg2.jpg";

const boxVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Quality = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6"
      id="quality"
    >
      {/* Rechte Spalte: Zwei Boxen untereinander */}
      <div className="flex flex-col gap-6 text-white">
        <motion.div
          variants={boxVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/10 p-6 rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-2 uppercase">Lorem Ipsum</h1>
          <p className="text-white/70">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
        </motion.div>

        <motion.div
          variants={boxVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/10 p-6 rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-2 uppercase">Lorem & Ipsum</h1>
          <p className="text-white/70">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
        </motion.div>
      </div>

      {/* Bild */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={Fashionimg2}
          alt="Fashion"
          className="rounded-lg w-full max-w-md lg:max-w-full"
        />
      </motion.div>
    </div>
  );
};

export default Quality;
