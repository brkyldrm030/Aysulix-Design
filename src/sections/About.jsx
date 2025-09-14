import React from "react";
import { motion } from "framer-motion";
import Aboutimg from "../assets/Aboutimg.jpg";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-6"
    >
      {/* Text-Block */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white/20 rounded-lg p-6"
      >
        <p className="text-white/90 mb-4 text-sm uppercase tracking-wide">
          ABOUT
        </p>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Where Fashion Meets Lorem Ipsum
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <p className="text-white/70 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
        </div>
      </motion.div>

      {/* Bild */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-center lg:justify-end"
      >
        <img
          src={Aboutimg}
          alt="About"
          className="rounded-lg w-full max-w-md lg:max-w-full"
        />
      </motion.div>
    </section>
  );
};

export default About;
