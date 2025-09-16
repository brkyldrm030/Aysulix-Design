import React from "react";
import { motion } from "framer-motion"; // ✅ hinzufügen
import arrow from "../assets/arrow.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Verzögerung zwischen den Cards
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Card = () => {
  return (
    <section className="p-10 bg-black" id="card">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1 */}
        <motion.div
          variants={item}
          className="bg-white/30 text-white p-6 shadow rounded-lg flex flex-col"
        >
          <h1 className="uppercase text-xl">Lorem Ipsum</h1>
          <p className="mt-10 text-white/50">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <img
              src={arrow}
              alt="Arrow"
              className="w-[26px] h-[26px] rotate-[-50deg]"
            />
            <button className="uppercase">Learn More</button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={item}
          className="bg-white/30 text-white p-6 shadow rounded-lg flex flex-col"
        >
          <h1 className="uppercase text-xl">Lorem Ipsum</h1>
          <p className="mt-10 text-white/50">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <img
              src={arrow}
              alt="Arrow"
              className="w-[26px] h-[26px] rotate-[-50deg]"
            />
            <button className="uppercase">Learn More</button>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={item}
          className="bg-white/30 text-white p-6 shadow rounded-lg flex flex-col"
        >
          <h1 className="uppercase text-xl">Lorem Ipsum</h1>
          <p className="mt-10 text-white/50">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <img
              src={arrow}
              alt="Arrow"
              className="w-[26px] h-[26px] rotate-[-50deg]"
            />
            <button className="uppercase">Learn More</button>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={item}
          className="bg-white/30 text-white p-6 shadow rounded-lg flex flex-col"
        >
          <h1 className="uppercase text-xl">Lorem Ipsum</h1>
          <p className="mt-10 text-white/50">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <img
              src={arrow}
              alt="Arrow"
              className="w-[26px] h-[26px] rotate-[-50deg]"
            />
            <button className="uppercase">Learn More</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Card;
